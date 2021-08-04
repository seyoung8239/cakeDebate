import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Login = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.logIn}>로그인</Text>
      <TouchableOpacity style={[styles.button, styles.kakao]}>
        <Text style={styles.text}>카카오로 시작하기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.naver]}>
        <Text style={[styles.white, styles.text]}>네이버로 시작하기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.facebook]}>
        <Text style={[styles.white, styles.text]}>페이스북으로 시작하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logIn: {
    position: 'absolute',
    left: '5%',
    top: '10%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  view: {
    flex: 1,
    // justifyContent: 'center',
    // backgroundColor: 'blue',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    width: '70%',
    borderRadius: 10,
  },
  kakao: {
    backgroundColor: '#EEF154',
  },
  naver: {
    backgroundColor: '#72EC38',
  },
  facebook: {
    backgroundColor: '#3D20EF',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  white: {
    color: 'white',
  },
});

export default Login;
