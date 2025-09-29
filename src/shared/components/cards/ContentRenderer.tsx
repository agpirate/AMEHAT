import styleWrap from "../../../shared/hooks/styleWrap.js"
// const {boxStyles,borderStyle,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

import env from "../../config/environment.js"
import { View, Text, Image,Dimensions,ActivityIndicator,Linking, TouchableOpacity,useWindowDimensions, StyleSheet, ImageBackground } from 'react-native';
import React, { useMemo,useState,useContext,useRef,useEffect } from 'react';


export const sampleContent = [
  "This is a plain text string",
  {
    type: 'text',
    text: 'This is bold text',
    bold: true
  },
  {
    type: 'paragraph',
    children: [
      "This is a paragraph with ",
      {
        type: 'text',
        text: 'mixed',
        italic: true
      },
      " content types"
    ]
  },
  {
    type: 'image',
    url: 'https://example.com/image.jpg',
    caption: 'Example image'
  },
  {
    type: 'link',
    url: 'https://example.com',
    children: ['Click here']
  }
];

type imageType = 
 | {url:string}
type ContentNode = 
  | string 
  | { type: 'text', text: string, bold?: boolean, italic?: boolean }
  | { type: 'paragraph', children: ContentNode[] }
  | { type: 'image', url: string, caption?: string,image?:imageType }
  | { type: 'link', url: string, children: ContentNode[] };

interface ContentRendererProps {
  content: ContentNode[];
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {


  const [loading, setloading] = React.useState(true);
  const [error, setrrror] = React.useState(false);
    const [dimensions, setDimensions] = useState({ width: 1, height: 1 });

      const windowWidth = useWindowDimensions().width;
      const imageContainer = [{
        padding:0,
        margin:0,
        width: windowWidth*1,
        height: dimensions.width ? ((windowWidth*1) * dimensions.height / dimensions.width) : 150,
        overflow: 'hidden',
            borderRadius: 0,
      }]


    const {boxStyles,boxSizes,borderStyle,shadowStyles,radiusStyles,bgcStyles,fontStyles,flexSizes,flexStyles} = styleWrap()

  

  if(!Array.isArray(content)) return <View><Text></Text></View>

  const renderNode = (node: ContentNode, index: number) => {

    if(!node) return null

    if (typeof node === 'string') {
      return <Text key={index}>{node}</Text>;
    }
    switch (node.type) {
      case 'text':
        return (
          <Text 
            key={index}
            style={[
              node.bold && styles.bold,
              node.italic && styles.italic,
              fontStyles.fcolor_grey225
            ]}
          >
            {node.text}
          </Text>
        );

      case 'paragraph':
        return (
          <View key={index} style={styles.paragraph}>
            {node.children.map((child, i) => renderNode(child, i))}
          </View>
        );

      case 'image':
        return (
          <View key={index} style={[]}>
            {
              node.image && 
            <Image 
              source={{ uri: node.image.url }} 
              style={[
                {        width: windowWidth*0.9,
                         height: dimensions.width ? ((windowWidth*0.9) * dimensions.height / dimensions.width) : 150,
                         borderRadius: 8,
                        },
                         
                         ]}
              resizeMode="contain"

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
            }
            {node.caption && <Text style={styles.caption}>{node.caption}</Text>}
          </View>
        );

      case 'link':
        return (
          <TouchableOpacity 
            key={index}
            onPress={() => Linking.openURL(node.url)}
            
          >
            <Text style={styles.link}>
              {node.children.map((child, i) => renderNode(child, i))}
            </Text>
          </TouchableOpacity>
        );

      default:
        return null;
    }
  };

  return (
    <View style={[flexStyles.ia_start,flexStyles.cgap_xs,boxStyles.boxStyle_xxs]}>
      {content.map((node, index) => renderNode(node, index))}
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin:0
  },
  paragraph: {
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  imageContainer: {
    marginVertical: 3,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
  },
  caption: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default ContentRenderer;