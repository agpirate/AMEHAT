import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ViewCardProps {
  category?: string;
  createdAt?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  date?: string;
  error?: Error;
  data?: any;
}

const ViewCard = ({
  category,
  createdAt,
  title,
  description,
  imageUrl,
  date,
  error,
  data
}: ViewCardProps) => {
  if (error) {
    return (
      <View style={styles.container}>
                <Text></Text>
      </View>
    );
  }

  // Empty state
  return (
    <View style={styles.container}>
        <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  description: {
    fontSize: 14,
    color: '#666'
  },
  errorText: {
    color: 'red',
    fontSize: 16
  }
});

export default ViewCard;