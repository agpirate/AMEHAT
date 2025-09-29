import React,{useContext} from 'react';
import { View, Text, StyleSheet, Image,Linking, TouchableOpacity } from 'react-native';

import { fontStyles } from '../../../styles/contentGroundStyles/font/fontStyles.js';
import { boxStyles } from '../../../styles/boxStyles.js';
import { borderStyles} from '../../../styles/boxBoundStyles/border/border.js';
import { radiusStyles} from '../../../styles/boxBoundStyles/border/radius.js';
import { bgcStyles} from '../../../styles/contentGroundStyles/bg/bgcolors.js';
import { flexSizes } from '../../../styles/displayStyles/child_EditableSizes/BoxSizes.js';
import { flexStyles } from '../../../styles/displayStyles/FlexContainer.js'
import { ThemeContext } from '../../../shared/contexts/themProvider.js';
import env from "../../../shared/config/environment.js"

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

type ContentNode = 
  | string 
  | { type: 'text', text: string, bold?: boolean, italic?: boolean }
  | { type: 'paragraph', children: ContentNode[] }
  | { type: 'image', url: string, caption?: string }
  | { type: 'link', url: string, children: ContentNode[] };

interface ContentRendererProps {
  content: ContentNode[];
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {


      let {theme} = useContext(ThemeContext);
        let styles_ =
    //  useMemo(() => (
        {boxStyles:boxStyles(theme),radiusStyles:radiusStyles(theme),bgcStyles:bgcStyles(theme),
      fontStyles:fontStyles(theme),flexSizes:flexSizes,flexStyles:flexStyles(theme)}
      // ), [theme]); // Only recalculates when theme changes
  

  if(!Array.isArray(content)) return <View><Text></Text></View>

  const renderNode = (node: ContentNode, index: number) => {

    if (typeof node === 'string') {
      return <Text key={index}>{node}</Text>;
    }

    switch (node.type) {
      case 'text':
        return (
          <Text 
            key={index}
            style={[
              styles.text,
              node.bold && styles.bold,
              node.italic && styles.italic
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
          <View key={index} style={styles.imageContainer}>
            <Image 
              source={{ uri: node['image'].url }} 
              style={[styles_.radiusStyles.radius_sm,{width:'100%',height:150}]}
              resizeMode="contain"
            />
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
    <View style={styles.container}>
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