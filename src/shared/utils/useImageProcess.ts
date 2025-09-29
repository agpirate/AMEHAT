//"image": "https://cdn.example.com/img1.jpg" 
//"thumbnail": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ..."
//galleries : []

// 
//   {
//     "url": "/uploads/image.jpg",
//     "provider":'local'
//     "formats": {
//       "thumbnail": {"url": "/uploads/thumbnail_image.jpg", "width": 150, "height": 150},
//       "small": {"url": "/uploads/small_image.jpg", "width": 300, "height": 300}
//     },
//     "width": 1920,
//     "height": 1080
//   }
// 
// {
//     "public_id": "sample123",
//     "version": "1492527487",
//     "url": "http://res.cloudinary.com/demo/image/upload/v1492527487/sample.jpg",
//     "secure_url": "https://res.cloudinary.com/demo/image/upload/v1492527487/sample.jpg",
//     "format": "jpg",
//     "bytes": 12345
//   }
// 

// "[
//   {"url": "/uploads/img1.jpg", "alt": "Image 1"},
//   {"url": "/uploads/img2.jpg", "alt": "Image 2"}
// ]

import env from "../config/environment.js"

interface ProcessedImageResult {
  formattedImage: ImageObject | null;
  objectImage: ImageObject | null;
  featuredImage: string;
}

interface ImageFormats {
  [key: string]: {
    url: string;
    width?: number;
    height?: number;
  };
}

interface ImageObject {
  url: string | null;
  formats?: ImageFormats;
  [key: string]: any; // Other potential properties
}

  const result = {
    FormatedImage: null as ImageObject | null,
    ObjectImage: null as ImageObject | null,
    FeaturedImage: null as string | null,
    images: {url:null} as ImageObject,
  };
  
const processImageData = (
  item: any,
  defaultImageUrl: string
) => {

  let thumbnail : string | null = defaultImageUrl ?? null
  let imageObj = {}

  try {
    // Get image from various possible fields
    const imageFile =  item.image ?? item.imageUrl ?? item.image_file ?? item.thumbnail ??  defaultImageUrl;
    
    if(imageFile){

      if(typeof imageFile === 'object'){
        imageObj = imageFile

        if(imageFile.provider){

          if(['cloudinary', 's3'].includes(imageFile.provider)){
            thumbnail =  getBestAvailableImageUrl(imageFile) ?? getBestAvailableImageFormat(imageFile) ?? defaultImageUrl ;     
          }
          else{ //local provider
            thumbnail = getBestAvailableImageFormat(imageFile) ?? getBestAvailableImageUrl(imageFile) ?? defaultImageUrl ;     
          }
        }else{ //no provider
            thumbnail = getBestAvailableImageFormat(imageFile) ?? getBestAvailableImageUrl(imageFile) ?? defaultImageUrl ;     
        }
      }else{ //string ? 
        
        if( /^data:image\/(png|jpeg|jpg|gif);base64,/.test(imageFile)){ //base64 string image
          thumbnail = imageFile;
        }
        else{ //normal string image
          thumbnail = imageFile;
        }
      }

    }
    
  } catch (error) {
    console.warn('Image processing error:', error);
  }
  

  thumbnail = isValidImageUrl(thumbnail) ? thumbnail : defaultImageUrl;
  thumbnail = thumbnail ? (thumbnail.includes('http') ? thumbnail : env.API_BASE_URL+thumbnail) : defaultImageUrl        

  result.images = {...imageObj,url:thumbnail,uri:thumbnail,galleries:[],thumbnail}

  return result;
};

// Helper Functions

const isCloudinaryOrS3Image = (image: any): boolean => {
  return typeof image === 'object' && 
         image.provider && 
         ['cloudinary', 's3'].includes(image.provider);
};

const getProviderImageUrl = (image: ImageObject): string | null => {
  return image.secure_url || image.url || null;
};

const isBase64Image = (image: any): boolean => {
  return typeof image === 'string' && 
         /^data:image\/(png|jpeg|jpg|gif);base64,/.test(image);
};

const isValidImageUrl = (url: string | null): boolean => {
  if(!url) return false;
  try {
    new URL(url); // Will throw if invalid URL
    return /\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i.test(url);
  } catch {
    return false;
  }
};

const processImageObject = (imageFile: ImageObject): string | null => {
  let imageUrl = null;
    // Priority 1: Explicit thumbnail

   if(imageFile.formats){
    imageUrl = getBestAvailableImageFormat(imageFile)
  }
  else{
    imageUrl = getBestAvailableImageUrl(imageFile)
  }

  return imageUrl
};

const getBestAvailableImageUrl = (image: ImageObject): string | null => {
  // Check common URL fields in order of preference
  const urlFields = ['url', 'secure_url', 'source', 'src', 'imageUrl','thumbnail'];
  
  for (const field of urlFields) {
    if (image[field] && typeof image[field] === 'string') {
      return image[field];
    }
  }

  return null;
};

const getBestAvailableImageFormat =(image:ImageObject):string | null =>{

    // Check formats for URLs
  if (image.formats) {
    const formats = ['large', 'medium', 'small', 'thumbnail'];
    for (const format of formats) {
      if (image.formats[format]?.url) {
        return image.formats[format].url;
      }
    }
  }
  return null

}

const processGalleryImages = (item: any, defaultUrl: string): (string | ImageObject)[] => {
  try {

    let galleryData = item.images ?? item.gallery ?? item.imageUrls ?? defaultUrl

    if (!galleryData) return [defaultUrl, defaultUrl];
    if (!Array.isArray(galleryData)) return [defaultUrl];

    return galleryData.map(item => {
      if (typeof item === 'string') return item;
      if (typeof item === 'object' && item.url) return item;
      return defaultUrl;
    });
  } catch {
    return [defaultUrl, defaultUrl];
  }
};


const getVideoThumbnail = (
  videoObj: ImageObject, 
  defaultThumbnail: string
): string => {
  // Priority 1: Explicit thumbnail
  if (typeof videoObj.thumbnail === 'string') {
    return videoObj.thumbnail;
  }
  
  // Priority 2: Formatted thumbnail
  if (videoObj.formats?.thumbnail?.url) {
    return videoObj.formats.thumbnail.url;
  }
  
  if (videoObj.formats?.small?.url) {
    return videoObj.formats.thumbnail.url;
  }
  if (videoObj.formats?.medium?.url) {
    return videoObj.formats.thumbnail.url;
  }


  
  return defaultThumbnail;
};


export { processImageData, processGalleryImages }