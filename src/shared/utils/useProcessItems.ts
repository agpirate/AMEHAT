// hooks/useProcessItems.js
import { useMemo } from 'react';
import { timeAgo,formatRelativeTime } from './dateUtils.js';

import env from "../config/environment.js"

import {processImageData,processGalleryImages} from "./useImageProcess" 
import processVideoData from "./useMediaProcess"

interface videoType 
{
  id: string,
  title: string,
  // Unified source representation
  source: {
    type: "uploaded" | "youtube" | "external" | "hls" | "dash" | null,
    url: string, // Complete URL or path
    meta: {width?: number | string,height?: number| string,duration?: number| string,
      format?: string,is_live?: boolean
    }
  },
  thumbnails: {default: string,medium?: string,high?: string}
}

let videoFile : videoType = {
    id: "",
  title: "",
  // Unified source representation
  source: {
    type: null,
    url: '', // Complete URL or path
    meta: {width:'100%',height:100,duration: 0,
      format: '',is_live: true
    }
  },
  thumbnails: {default: '',medium: '',high: ''}
}
interface options {

      defaultImageUrl?: string,
          defaultCategory?: string,
    summaryLength?: number,
    enableDateProcessing?: boolean,
    enableDefaultValues?: boolean
}

export const useProcessItem = (data:Record<string,any>, options:options = {}) => {
  const {
    defaultImageUrl = 'https://thumbs.dreamstime.com/b/falling-drop-rain-blue-earth-image-water-splash-crown-shape-water-splash-crown-shape-falling-drop-earth-140453719.jpg',
    defaultCategory = 'General',
    summaryLength = 100,
    enableDateProcessing = true,
    enableDefaultValues = true
  } = options;
    
    let processedItem = { ...data };

    //-----
      const imageResult = processImageData(processedItem,defaultImageUrl ?? null);

      const imageGalleries = processGalleryImages(processedItem,imageResult.images.thumbnail)

      let videoResult = processVideoData(processedItem,'',imageResult.images.thumbnail) 

      // processedItem = { ...processedItem,...videoResult}
      processedItem = {...processedItem,GalleryImage:imageGalleries,
        ...videoResult,
        ...imageResult,

      }

      // Normalized video data structure

      if(enableDefaultValues && !(processedItem.GalleryImage ?? false)){
        try{
        let galleries = processedItem.images ?? processedItem.imageUrls ?? [defaultImageUrl,defaultImageUrl,defaultImageUrl] ;
        processedItem.GalleryImage = (Array.isArray(galleries)) ? galleries : [galleries,galleries]
        }catch{processedItem.GalleryImage = null}
      }

      // Process dates
      if (enableDateProcessing && (processedItem.createdAt ?? false)) {
        try{
        // processedItem.formattedDate = formatRelativeTime(processedItem.createdAt);
        processedItem.fullDate = timeAgo(processedItem.createdAt) ?? processedItem.createdAt;
        }catch{ processedItem.fullDate=processedItem.createdAt  }
      }

      if(!(processedItem.title ?? false)) processedItem.title = processedItem.header ?? ''
      if(Array.isArray(processedItem.title)) processedItem.title = processedItem.title[0]
      
      let desc = processedItem.description ?? processedItem.excerpt ?? ''
      if(typeof desc == 'object'){
        if(Array.isArray(desc))desc = ''//desc[0].
        else{desc = ''}
        processedItem.summary = desc
        } 

      if(!(processedItem.summary ?? false)) processedItem.summary = ''
      if(!(processedItem.content ?? false)) processedItem.content = processedItem.details ?? ''
      // if(!Array.isArray(processedItem.content)) processedItem.content = [processedItem.content]
      
      // Process default values
      if (enableDefaultValues) {
        try{
        processedItem.category = processedItem.category ?? defaultCategory;
        processedItem.views = typeof processedItem.views === 'number' ? processedItem.views : 0;
        processedItem.comments = typeof processedItem.comments === 'number' ? processedItem.comments : 0;
        processedItem.isFeatured = processedItem.isFeatured ?? false;
        }catch{}
      }
      // return processedItem;
  return processedItem
};

export const useProcessItems = (data:Record<string,any>, options:options = {}) => {
  let {
    defaultImageUrl = 'https://thumbs.dreamstime.com/b/falling-drop-rain-blue-earth-image-water-splash-crown-shape-water-splash-crown-shape-falling-drop-earth-140453719.jpg',
    defaultCategory = 'General',
    summaryLength = 100,
    enableDateProcessing = true,
    enableDefaultValues = true
  } = options;

  try{
  const processedData = useMemo(() => {
    if (!Array.isArray(data)) return [];

    return data.map(item => {
      // Create a new object with the original item properties
      let processedItem = { ...item };

          //-----
      const imageResult = processImageData(processedItem,defaultImageUrl ??  null);
      let imageSource:any;
       imageSource = {uri:imageResult.images.thumbnail,...imageResult.images}

      const imageGalleries = processGalleryImages(processedItem,imageResult.images.thumbnail)

      let videoResult = processVideoData(processedItem,'',imageResult.images.thumbnail) 

      // processedItem = { ...processedItem,...videoResult}
      processedItem = {...processedItem,GalleryImage:imageGalleries,
        ...videoResult,
        ...imageResult,

        imageSource, //url,thumbnail,....captions..
      }

          // console.log(typeof videoSource === 'object' && videoSource !== null ? videoSource.thumbnail : '', '-00000000000',videoSource)

      // Normalized video data structure

      if(enableDefaultValues && !(processedItem.GalleryImage ?? false)){
        try{
        let galleries = processedItem.images ?? processedItem.imageUrls ?? [defaultImageUrl,defaultImageUrl,defaultImageUrl] ;
        processedItem.GalleryImage = (Array.isArray(galleries)) ? galleries : [galleries,galleries]
        }catch{processedItem.GalleryImage = null}
      }

      // Process dates
      if (enableDateProcessing && (processedItem.createdAt ?? false)) {
        try{
        // processedItem.formattedDate = formatRelativeTime(processedItem.createdAt);
                processedItem.fullDate = timeAgo(processedItem.createdAt) ?? processedItem.createdAt;
        }catch{ processedItem.fullDate=processedItem.createdAt  }
      }

      if(!(processedItem.title ?? false)) processedItem.title = processedItem.header ?? ''
      if(Array.isArray(processedItem.title)) processedItem.title = processedItem.title[0]
    
      let desc = processedItem.description ?? processedItem.excerpt ?? ''
      if(typeof desc == 'object'){
        if(Array.isArray(desc))desc = ''//desc[0].
        else{desc = ''}
        processedItem.summary = desc
        } 

      if(!(processedItem.summary ?? false)) processedItem.summary = ''
      if(!(processedItem.content ?? false)) processedItem.content = processedItem.details ?? ''
      // if(!Array.isArray(processedItem.content)) processedItem.content = [processedItem.content]
      
      // Process summary
      // if (enableDefaultValues && !processedItem.summary && processedItem.content) {
      //   processedItem.summary = 
      //     processedItem.content[0].substring(0, summaryLength) + 
      //     (processedItem.content[0].length > summaryLength ? '...' : '');
      // }

      // Process default values
      if (enableDefaultValues) {
        processedItem.category = item.category ?? defaultCategory;
        processedItem.views = typeof item.views === 'number' ? item.views : 0;
        processedItem.comments = typeof item.comments === 'number' ? item.comments : 0;
        processedItem.isFeatured = item.isFeatured ?? false;
      }

      return processedItem;
    });
  }, [data, defaultImageUrl, defaultCategory, summaryLength, enableDateProcessing, enableDefaultValues]);
  
  return processedData;

  }catch(e){
    console.log('ERRRRRRRRR',e)
    return data}

};