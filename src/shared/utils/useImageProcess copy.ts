//"image": "https://cdn.example.com/img1.jpg" 
// {
//   "image": {
//     "url": "/uploads/image.jpg",
//     "formats": {
//       "thumbnail": {"url": "/uploads/thumbnail_image.jpg", "width": 150, "height": 150},
//       "small": {"url": "/uploads/small_image.jpg", "width": 300, "height": 300}
//     },
//     "width": 1920,
//     "height": 1080
//   }
// }
// {
//   "image": {
//     "public_id": "sample123",
//     "version": "1492527487",
//     "url": "http://res.cloudinary.com/demo/image/upload/v1492527487/sample.jpg",
//     "secure_url": "https://res.cloudinary.com/demo/image/upload/v1492527487/sample.jpg",
//     "format": "jpg",
//     "bytes": 12345
//   }
// }
// "thumbnail": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ..."

// "gallery": [
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
  url: string;
  formats?: ImageFormats;
  [key: string]: any; // Other potential properties
}

  const result = {
    FormatedImage: null as ImageObject | null,
    ObjectImage: null as ImageObject | null,
    FeaturedImage: null as string | null
  };
  
const processImageData = (
  item: any,
  defaultImageUrl: string
) => {


  try {
    // Get image from various possible fields
    const imageFile =  item.image ?? item.imageUrl ?? item.image_file ?? item.thumbnail ??  defaultImageUrl;
      
    // Handle Cloudinary/S3 special cases
    if (isCloudinaryOrS3Image(imageFile)) {
      result.FeaturedImage = getProviderImageUrl(imageFile) || defaultImageUrl;
      return result;
    }

    // Handle base64 images
    if (isBase64Image(imageFile)) {
      result.FeaturedImage = imageFile;
      return result;
    }

    // Handle Cloudinary/S3 special cases
    if (typeof imageFile === 'object' && imageFile.provider) {
      if (imageFile.provider === 'cloudinary' || imageFile.provider === 's3') {
        result.FeaturedImage = imageFile.secure_url || imageFile.url || defaultImageUrl;
        return result;
      }
    }
    
    // Handle base64 images
    if (typeof imageFile === 'string' && imageFile.startsWith('data:image')) {
      result.FeaturedImage = imageFile;
      return result;
    }


    if (typeof imageFile === 'object') {

      // processImageObject(imageFile, result);
      
      if ('formats' in imageFile) {
        // Structured image with formats
        const formats = imageFile.formats || {};
        const formatKeys = Object.keys(formats);
        
        // Ensure thumbnail exists (fallback to first format)
        if (!formats.thumbnail && formatKeys.length > 0) {
          if (!imageFile.formats) imageFile.formats = {};
          imageFile.formats.thumbnail = formats[formatKeys[0]];
        }

        result.FormatedImage = imageFile;
      } else {
        // Unstructured image object
        result.ObjectImage = imageFile;
      }
    } else if (typeof imageFile === 'string') {
      // Direct image URL
      result.FeaturedImage = imageFile;
    } else {
      // Invalid type - use default
      result.FeaturedImage = defaultImageUrl;
    }
    
  } catch (error) {
    console.warn('Image processing error:', error);
    result.FeaturedImage = defaultImageUrl;
  }
   
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

const isValidImageUrl = (url: string): boolean => {
  try {
    new URL(url); // Will throw if invalid URL
    return /\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i.test(url);
  } catch {
    return false;
  }
};

const processImageObject = (imageFile: ImageObject, result: any): void => {
  if ('formats' in imageFile) {
    // Structured image with formats
    const formats = imageFile.formats || {};
    const formatKeys = Object.keys(formats);
    
    // Ensure thumbnail exists (fallback to first available format)
    if (!formats.thumbnail && formatKeys.length > 0) {
      if (!imageFile.formats) imageFile.formats = {};
      imageFile.formats.thumbnail = formats[formatKeys[0]];
    }

    result.formattedImage = imageFile;
    result.featuredImage = getBestAvailableImageUrl(imageFile) || result.featuredImage;
  } else {
    // Unstructured image object
    result.objectImage = imageFile;
    result.featuredImage = getBestAvailableImageUrl(imageFile) || result.featuredImage;
  }
};

const getBestAvailableImageUrl = (image: ImageObject): string | null => {
  // Check common URL fields in order of preference
  const urlFields = ['url', 'secure_url', 'source', 'src', 'imageUrl'];
  
  for (const field of urlFields) {
    if (image[field] && typeof image[field] === 'string') {
      return image[field];
    }
  }

  // Check formats for URLs
  if (image.formats) {
    const formats = ['large', 'medium', 'small', 'thumbnail'];
    for (const format of formats) {
      if (image.formats[format]?.url) {
        return image.formats[format].url;
      }
    }
  }

  return null;
};

const processGalleryImages = (item: any, defaultUrl: string): (string | ImageObject)[] => {
  try {

    let galleryData = item.images ?? item.gallery ?? item.imageUrls ?? defaultUrl

    if (!galleryData) return [defaultUrl, defaultUrl, defaultUrl];
    if (!Array.isArray(galleryData)) return [defaultUrl];

    return galleryData.map(item => {
      if (typeof item === 'string') return item;
      if (typeof item === 'object' && item.url) return item;
      return defaultUrl;
    });
  } catch {
    return [defaultUrl, defaultUrl, defaultUrl];
  }
};

export { processImageData, processGalleryImages }