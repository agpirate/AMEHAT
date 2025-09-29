


export interface categoryType {

  locale:string[],
  region:string[],
  category:string[],

  mediaType:string[],
}

// // Extract types
// export type Locale = typeof categories.locale[number];
// export type Region = typeof categories.region[number];
// export type Category = typeof categories.category[number];
// export type MediaType = typeof categories.mediaType[number];

export interface categoryDataType {
    locale: string,
    region: string,
    category: string,
    mediaType: string,
}