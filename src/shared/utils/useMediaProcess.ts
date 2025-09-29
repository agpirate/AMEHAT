import env from "../config/environment.js"

interface VideoFormat {
  url: string;
  width?: number;
  height?: number;
  bitrate?: number;
  duration?: number;
  mimeType?: string;
}

interface VideoFormats {
  [key: string]: VideoFormat;
}

interface VideoObject {
  url: string | null;
  formats?: VideoFormats;
  thumbnail?: string | null;
  provider?: string;
  secure_url?: string;
  public_id?: string;
  metadata?: {
    title?: string;
    description?: string;
    created_at?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

interface ProcessedVideo {
  formattedVideo: VideoObject | null;
  videoObject: VideoObject | null;
  featuredVideo: string | null;
  featuredThumbnail?: string | null;
  featuredVideoThumbail: string | null;
  streamingUrl: string | null;
  videos: VideoObject;
}

const processVideoData = (item: any,defaultVideoUrl: string,defaultThumbnailUrl: string): ProcessedVideo => {
  let result: ProcessedVideo = {
    formattedVideo: null,videoObject: null,featuredVideo: null,streamingUrl: null,
    featuredThumbnail: null,featuredVideoThumbail: defaultThumbnailUrl,
    videos: {url:null,thumbnail:defaultThumbnailUrl} ,
  };

                              let id: string | null;

    let url = null;
    let thumbnail : string | null = defaultThumbnailUrl ?? null
    let videoObj = {};

  try {
                  const videoSource = item.video ?? item.videoUrl ?? item.stream_url ?? item.media_url ?? item.media_content ?? item.youtubeUrl ?? item.video_file ?? 
                       item.media_content ?? item.video_asset ?? defaultVideoUrl;
    

                       if(videoSource){

                            if(typeof videoSource === 'object'){
                                videoObj = videoSource
      
                              if(videoSource.provider ){

                              // if (!formats.hls && formatKeys.some(k => formats[k].url.endsWith('.m3u8'))) {
                              //   url = formats[formatKeys.find(k => formats[k].url.endsWith('.m3u8'))!];
                              // }

                                //local provider
                                if(videoSource.provider == 'local'){
                                  url = getBestAvailableVideoFormat(videoSource) ?? getBestAvailableVideoUrl(videoSource) ?? defaultVideoUrl
                                  thumbnail = getBestAvailableVideoThumbnailFormat(videoSource) ?? getBestAvailableVideoThumbnailUrl(videoSource) ?? null ;     
                                }else{

                                      if (videoSource.provider === 'cloudinary' || videoSource.provider === 's3'){
                                          url = getBestAvailableVideoUrl(videoSource) || defaultVideoUrl
                                            }
                                      else if (videoSource.provider === 'mux'){
                                            url = getBestAvailableVideoUrl(videoSource) || defaultVideoUrl
                                            }
                                  thumbnail =  getBestAvailableVideoThumbnailUrl(videoSource) ?? getBestAvailableVideoThumbnailFormat(videoSource) ?? null ;     
                                }

                              }
                              else{

                              }
                             }else{

                              if (videoSource.includes('youtube.com') || videoSource.includes('youtu.be')) {
                              [url, id] = normalizeYoutubeUrl(videoSource);
                              thumbnail = id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
                            } else if (videoSource.includes('vimeo.com')) {
                              [url,id] = normalizeVimeoUrl(videoSource);
                              thumbnail = id ? `https://vumbnail.com/${id}.jpg` : null;
                            } else if (videoSource.endsWith('.m3u8')) {
                              url = videoSource;
                            } else{
                              url=videoSource
                            }

                             }
                       }

    } catch (error) {
      console.warn('Video processing error:', error);
    }

  url = isValidVideoUrl(url) ? url : defaultVideoUrl;
  if(url){url =  (url.includes('http') ? url : env.API_BASE_URL+url)}
  
  thumbnail = isValidImageUrl(thumbnail) ? thumbnail : defaultThumbnailUrl;
  thumbnail = thumbnail ? (thumbnail.includes('http') ? thumbnail : env.API_BASE_URL+thumbnail) : (defaultThumbnailUrl) 
  
  result.videos = {...videoObj,url,videoUrl:url,uri:thumbnail,thumbnail}
  return result;
};

export default processVideoData

const isValidImageUrl = (url: string | null): boolean => {
  if(!url) return false;
  try {
    new URL(url); // Will throw if invalid URL
    return /\.(jpg|jpeg|png|gif)(\?.*)?$/i.test(url);
  } catch {
    return false;
  }
};

const isValidVideoUrl = (url: string | null): boolean => {
  if(!url) return false;
  try {
    new URL(url); // Will throw if invalid URL
    return !(/\.(jpg|jpeg|png|gif)(\?.*)?$/i.test(url));
  } catch {
    return false;
  }
};
// Helper functions
const normalizeYoutubeUrl = (url: string): [string,string |null] => {
  // Convert to embed format if needed
  const id = getYoutubeId(url);
  return [id ? `https://www.youtube.com/embed/${id}` : '',id];
};

const normalizeVimeoUrl = (url: string): [string,string | null] => {
  const id = getVimeoId(url);
  return [id ? `https://player.vimeo.com/video/${id}` : '',id];
};

/**
 * Extracts YouTube ID from various URL formats
 */
const getYoutubeId = (url: string): string | null => {
  // Standard URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  
  if (match && match[2].length === 11) {
    return match[2];
  }
  // Short URL format
  const shortRegExp = /youtube.com\/shorts\/([^#&?]*)/;
  const shortMatch = url.match(shortRegExp);
  
  if (shortMatch && shortMatch[1].length === 11) {
    return shortMatch[1];
  }
  
  // Embedded URL format
  const embedRegExp = /youtube.com\/embed\/([^#&?]*)/;
  const embedMatch = url.match(embedRegExp);
  
  if (embedMatch && embedMatch[1].length === 11) {
    return embedMatch[1];
  }
  
  return '';
};

/**
 * Extracts Vimeo ID from various URL formats
 */
const getVimeoId = (url: string): string | null => {
  // Standard URL formats
  const regExp = /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/;
  const match = url.match(regExp);
  
  return match ? match[1] : null;
};

/**
 * Extracts Facebook video ID
 */
const getFacebookId = (url: string): string | null => {
  const regExp = /(?:facebook\.com|fb\.watch)\/(?:[^\/]+\/videos\/|video\.php\?v=)(\d+)/;
  const match = url.match(regExp);
  
  return match ? match[1] : null;
};

/**
 * Detects if URL is a streaming manifest
 */
const isStreamingUrl = (url: string): boolean => {
  return /\.(m3u8|mpd)$/.test(url);
};



const getBestAvailableVideoFormat =(image:VideoObject):string | null =>{

    // Check formats for URLs
  if (image.formats) {
    const formats = ['large', 'medium', 'small'];
    for (const format of formats) {
      if (image.formats[format]?.url) {
        return image.formats[format].url;
      }
    }
  }
  return null

}

const getBestAvailableVideoUrl = (image: VideoObject): string | null => {
  // Check common URL fields in order of preference
  const urlFields = ['url', 'secure_url', 'source', 'src', 'videoUrl','playback_url'];
  
  for (const field of urlFields) {
    if (image[field] && typeof image[field] === 'string') {
      return image[field];
    }
  }

  return null;
};

/**
 * Gets appropriate thumbnail based on video source
 */
const getVideoThumbnail = (
  videoObj: VideoObject, 
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

const getBestAvailableVideoThumbnailUrl = (video: VideoObject): string | null => {
  // Check common URL fields in order of preference
  const urlFields = ['thumbnail','thumbnail_url'];
  for (const field of urlFields) {
    if (video[field] && typeof video[field] === 'string') {
      return video[field];
    }
  }

  return null;
};

const getBestAvailableVideoThumbnailFormat =(video:VideoObject):string | null =>{

    // Check formats for URLs
  if (video.formats) {
    const formats = ['thumbnail'];
    for (const format of formats) {
      if (video.formats[format]?.url) {
        return video.formats[format].url;
      }
    }
  }

  return null

}

const getSocialMediaThumbnail =   (
  videoObj: VideoObject, 
  defaultThumbnail: string
): string => {

    // Priority 3: Provider-specific thumbnails
  if (videoObj.provider === 'youtube' && videoObj.url) {
    const id = getYoutubeId(videoObj.url);
    return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : defaultThumbnail;
  }
  
  if (videoObj.provider === 'vimeo' && videoObj.url) {
    const id = getVimeoId(videoObj.url);
    return id ? `https://vumbnail.com/${id}.jpg` : defaultThumbnail;
  }
  return defaultThumbnail;
}