import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Landing = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.background}>
      <Image
        style={styles.image}
        source={require('../asset/image/landing_main.png')}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.to}
      />
      {/* <Text>Landing Page</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFD7D7',
  },
  to: {
    width: '100%',
    height: '100%',
  },
  image: {
    // flex: 1,
    width: 200,
    height: 200,
    resizeMode: 'contain',
    top: '35%',
    left: '25%',
  },
});

export default Landing;
