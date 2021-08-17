import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

import Icon from 'react-native-vector-icons/AntDesign';

const Login = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    console.log('clicked');
    navigation.navigate('Privacy');
  };

  return (
    <View style={styles.view}>
      {/* <Icon name="left" size={30} style={styles.icon} /> */}
      <Text style={styles.logIn}>로그인</Text>
      <Image
        style={styles.image}
        source={require('../../../asset/image/landing_main.png')}
      />
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={handlePress}
          style={[styles.button, styles.kakao]}
        >
          <Text style={styles.text}>카카오로 시작하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePress}
          style={[styles.button, styles.naver]}
        >
          <Text style={[styles.white, styles.text]}>네이버로 시작하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePress}
          style={[styles.button, styles.facebook]}
        >
          <Text style={[styles.white, styles.text]}>페이스북으로 시작하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
