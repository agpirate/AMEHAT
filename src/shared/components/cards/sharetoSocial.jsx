import React from 'react';
import { View, Button, Alert } from 'react-native';
import Share from 'react-native-share';

const SocialShare = () => {
  const shareContent = async () => {
    const shareOptions = {
      title: 'Share via',
      message: 'Check out this awesome content!\n',
      url: 'https://example.com', // URL to share
      social: Share.Social.FACEBOOK, // Optional - specify platform directly
    };

    try {
      await Share.open(shareOptions);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const shareToFacebook = async () => {
    try {
      await Share.shareSingle({
        title: 'Share on Facebook',
        message: 'Check this out!',
        url: 'https://example.com',
        social: Share.Social.FACEBOOK,
      });
    } catch (error) {
      Alert.alert('Error', 'Facebook share failed');
    }
  };

  const shareToTwitter = async () => {
    try {
      await Share.shareSingle({
        title: 'Share on Twitter',
        message: 'Check this out! #Awesome',
        url: 'https://example.com',
        social: Share.Social.TWITTER,
      });
    } catch (error) {
      Alert.alert('Error', 'Twitter share failed');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Share Content" onPress={shareContent} />
      <View style={{ marginVertical: 10 }} />
      <Button title="Share to Facebook" onPress={shareToFacebook} />
      <View style={{ marginVertical: 10 }} />
      <Button title="Share to Twitter" onPress={shareToTwitter} />
    </View>
  );
};

export default SocialShare;