import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Landing = () => {
  return (
    <View style={styles.background}>
      <Text>Landing Page</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFD7D7',
  },
});

export default Landing;
