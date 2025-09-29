import { View, Animated,Text, Image,Dimensions,ActivityIndicator, useWindowDimensions,TouchableOpacity, StyleSheet } from 'react-native';
import env from "../../../../../shared/config/environment.js"

const renderImage = ({item}) => 

{
  console.log(item.FormatedImage ?? 'ppp','0000000000',env.API_BASE_URL+item.FormatedImage.formats.thumbnail.url)
return (
    <View> 
{ item.FeaturedImage ? (
            <View style={[,{width:'30%',height:100,overflow:'hidden'}]}>
                          <Image source={{uri: item.FeaturedImage, cache: 'reload' }} style={[{borderRadius: 30,width:'100%',height:'100%',resizeMode:'contain'}]} />
          </View>
            ) : (

              item.FormatedImage ? (
                <View style={[,{width:'30%',height:100,overflow:'hidden'}]}>
                 <Image source={{uri: env.API_BASE_URL+item.FormatedImage.formats.thumbnail.url, cache: 'reload' }} 
                 style={[{borderRadius: 30,width:'100%',height:'100%',resizeMode:'contain'}]} />
                 
          </View>
            ) : ( 

              item.ObjectImage ? (
                <View style={[,{width:'30%',height:100,overflow:'hidden'}]}>
                 <Image source={{uri: env.API_BASE_URL+item.ObjectImage.url, cache: 'reload' }} style={[{borderRadius: 30,width:'100%',height:'100%',resizeMode:'contain'}]} />
                </View>
            ) : ( 
                null
                //  <Image source={require('assets/images/tmma_logo.png')} style={[styles_.radiusStyles.radius_xs,{width:'100%',height:'100%',resizeMode:'contain'}]} />
            )
            )
           )
          }

        </View>
    )

}

export default renderImage