import React,{useState} from 'react';

import SkeletonLoader from '../../utils/SkeletonLoader';

import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


interface ImageMetadata {
  caption?: string;
  altText?: string;
  credit: string;
  createdAt: string;
  // Add any other relevant metadata fields
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

interface ImagePlayerProps {
  item: ImageObject;
  // env: {
  //   API_BASE_URL: string;
  // };
  styles?: {
    container?: any;
    image?: any;
  };
  defaultImage?: any; // require('path/to/default.png')
  onPress?: (imageData: any) => void;
  setDimensions?: (dims: { width: number; height: number }) => void;
  setError?: (error: boolean) => void;
  setLoading?: (loading: boolean) => void;
}

const ImagePlayer: React.FC<ImagePlayerProps> = ({
  item,
  styles = {},
  defaultImage,
  setDimensions,
  setError,
   setLoading,
}) => {
  // Default styles
  const containerStyle = StyleSheet.flatten([
    styles.container
  ]);

  const imageStyle = StyleSheet.flatten([
    {
      borderRadius: 0,
      width: '100%',
      height:'100%',
      resizeMode: 'contain'
    },
    styles.image ?? ''
  ]);

  const [loading, setloading] = useState(true);
  const [error, setrrror] = useState(false);
  
  return (
    <> 
    <View style={[{
              borderRadius: 8,
              borderWidth: 0},containerStyle]}>
      
      {loading && <SkeletonLoader />}

{item.uri ? 
      <Image 
        source={{uri: item.uri,cache:'reload'}}
        style={imageStyle}

        onLoad={(e) => {
          const { width, height } = e.nativeEvent.source;
          setDimensions && setDimensions({ width, height });
        }}
        onLoadEnd={() => setloading(false)}
        onError={() => {
           setrrror(true);
           setloading(false);
        }}
   
      />
         : <Text style={{color:'red'}}>Image Unavailable</Text>
      }

      {error && (
                                  <View style={[]}>
                                    <Text>Image unavailable</Text>
                                  </View>
                                )}

        {/* {renderCaption()} */}
      </View>
      {/* {renderMetadata()} */}

      </>
  );
};

export default ImagePlayer;