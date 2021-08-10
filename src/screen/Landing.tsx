import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Landing = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.background}>
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
});

export default Landing;
