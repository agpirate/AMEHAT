import styleWrap from "../../../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

import { useProcessItems,useProcessItem } from '../../../../../shared/utils/useProcessItems';


import { useWindowDimensions,Animated,View, Text, TouchableOpacity, StyleSheet, TextInput, Image,StatusBar,ScrollView,FlatList,Linking } from 'react-native';
import { useTranslation } from 'react-i18next';
import React, {useMemo, useState,useContext,useRef,useEffect } from 'react';



import Video from 'react-native-video';
import Share from 'react-native-share';

import {NewsDetail} from "../../../../../shared/components/cards/featuredCards/news/index.js"

export const  MainComponent = ({data,onPressItem}) =>{

  const api_url = "http://196.190.43.162"
const { t } = useTranslation();

const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()


        //image loader -
    const [loading, setLoading] = useState(true);
      const [error, setError] = useState(false);
      const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
      const windowWidth = useWindowDimensions().width;
    
      
     // Sample ad components
  const BannerAd = () => (
    <View style={styles.adContainer}>
      <Text style={styles.adText}>ADVERTISEMENT</Text>
      <View style={styles.adContent}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/320x50' }} 
          style={styles.adImage} 
        />
      </View>
    </View>
  );
  
  const platforms = [
    { name: 'Facebook', icon: 'logo-facebook', color: '#3b5998' },
    { name: 'X', icon: 'logo-twitter', color: '#1da1f2' },
    { name: 'WhatsApp', icon: 'logo-whatsapp', color: '#25d366' },
    // { name: 'More', icon: 'ellipsis-h', color: '#333' },
  ];
  
//   const shareContent = async (params) => {
//   try {
//     await Share.share({
//       message: `Check out this news: ${params.title}\n\n${params.description}`,
//       url: params.url, // if you have a URL
//       title: params.title
//     });
//   } catch (error) {
//     console.error('Error sharing:', error.message);
//   }
// };

  const handleShare = async (platform) => {

    await Share.share({
      message: `Check out this news:`,
      url: api_url, // if you have a URL
      title:' params.title'
    });
    return;
    try {
      if (platform === 'More') {
        await Share.open({
          title: 'Share content',
          message: item.title,
          url: api_url
        });
      } else {
        await Share.shareSingle({
          title: `Share on ${platform}`,
          message: item.title ?? '',
          url: api_url,
          // social: Share.Social[platform.toUpperCase()],
        });
      }
    } catch (error) {
      Alert.alert('Error', `Could not share to ${platform}`);
    }
  };

  const ContentItem = ({ item }) => (
  typeof item === 'string' || !('type' in item) ? (
    <View style={styles.content}>
      <Text>{item}</Text>
    </View>
  ) : item.type === 'text' ? (
    <Text>''</Text>
  ) : (
    <View style={styles.content}>
      <ContentRenderer content={item.children} />
      <Text>...</Text>
    </View>
  )
);

  const RelatedNewsItem = ({ item }) => (
    <TouchableOpacity style={[]}
    onPress={() => Linking.openURL(item.link)}
    >
      {item.image  && <Image source={{ uri: item.image }} style={styles.relatedImage} /> }
      { item.title && <Text style={[]}>{item.title}</Text>}
      <Text style={[fontStyles.fcolor_primary]}>{item.link}</Text>
    </TouchableOpacity>
  );


    const processedData = useProcessItem(data, {
    defaultImageUrl : 'https://www.almondsolutions.com/images/blog-loading-speed-210324.jpg',
      summaryLength: 80,
      enableDefaultValues:true,
    });


    return (

    <View style={[]}>


      <NewsDetail item = { processedData}  />
                             
    
      {/* First Ad Placement */}
      { false && <BannerAd /> }
      
      {/* Video Player */}
      {processedData.FeaturedVideo && (
        <View style={styles.videoContainer}>
          {Platform.OS === 'android' ? (
            <Video
              source={{ uri: processedData.FeaturedVideo }}
              style={styles.video}
              controls={true}
              resizeMode="contain"
            />
          ) : (
            <WebView
              source={{ uri: `https://www.youtube.com/embed/${extractYoutubeId(processedData.FeaturedVideo)}` }}
              style={styles.video}
              javaScriptEnabled={true}
              domStorageEnabled={true}
            />
          )}
          <Text style={styles.videoCaption}>{processedData.videoCaption}</Text>
        </View>
      )
      }
      
      {/* More content */}
         {/* { Array.isArray(processedData.content) && processedData.content.length >= 2 && (
          <ContentItem item={processedData.content[1]} />
        )} */
        }

      {/* Image Gallery */}
      {processedData.GalleryImage && processedData.GalleryImage.length > 0 && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.galleryContainer}>
          {processedData.GalleryImage.map((img, index) => (
            <View key={index} style={styles.galleryItem}>
              <Image source={{ uri: img, cache: 'reload' }}  style={styles.galleryImage} />
              <Text style={styles.galleryCaption}>{img.caption}</Text>
            </View>
          ))}
        </ScrollView>
      )}
      
      {/* Middle Ad Placement */}
      { false && <BannerAd /> }
      
      {/* Related Links Section */}
      <View style={[flexStyles.ccolumn]}>
      <Text style={styles.sectionTitle}>{t(`common|related`)} {t(`common|news`)}  </Text>
        {processedData.relatedLink ?
         processedData.relatedLink.map((item, index) => (
          <RelatedNewsItem key={index} item={item} />
        )) :
        (<Text> {t(`common|visit`)}  : www.tigraitv.com </Text>)
      }
      </View>
      
      {/* Final content */}
      {/* <Text style={styles.content}>{Array.isArray(processedData[content]) ? processedData[content][3] : ''}</Text> */}
      {/* Bottom Ad Placement */}

      { false && 
      <View style={styles.largeAdContainer}>
        <Text style={styles.adText}>ADVERTISEMENT</Text>
        <View style={styles.largeAdContent}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/300x250' }} 
            style={styles.largeAdImage} 
          />
        </View>
      </View>
      }
      
      {/* Social Sharing */}

    </View>
    )
}


// Helper function to extract YouTube ID from URL
const extractYoutubeId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  author: {
    fontSize: 14,
    color: '#666',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  featuredImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 5,
  },
  imageCaption: {
    fontSize: 12,
    color: '#888',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    color: '#333',
  },
  videoContainer: {
    marginVertical: 15,
  },
  video: {
    width: '100%',
    height: 200,
    backgroundColor: '#000',
  },
  videoCaption: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
    fontStyle: 'italic',
  },
  galleryContainer: {
    marginVertical: 15,
  },
  galleryItem: {
    marginRight: 10,
    width: 200,
  },
  galleryImage: {
    width: 200,
    height: 120,
    borderRadius: 5,
  },
  galleryCaption: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  adContainer: {
    borderWidth: 1,
    borderColor: '#eee',
    padding: 10,
    marginVertical: 15,
    alignItems: 'center',
  },
  largeAdContainer: {
    borderWidth: 1,
    borderColor: '#eee',
    padding: 10,
    marginVertical: 15,
    alignItems: 'center',
    height: 300,
  },
  adText: {
    fontSize: 12,
    color: '#999',
    marginBottom: 5,
  },
  adContent: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeAdContent: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adImage: {
    width: 320,
    height: 50,
  },
  largeAdImage: {
    width: 300,
    height: 250,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#333',
  },
  relatedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  relatedItem: {
    width: '48%',
    marginBottom: 15,
  },
  relatedImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
  relatedTitle: {
    fontSize: 14,
    marginTop: 5,
    color: '#333',
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  shareText: {
    fontSize: 16,
    marginRight: 10,
    color: '#333',
  },
  socialIcons: {
    flexDirection: 'row',
  },
  socialButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  socialIcon: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});