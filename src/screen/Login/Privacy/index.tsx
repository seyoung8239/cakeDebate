import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function OpenCake() {
  return (
    <View>
      <Text>개인정보 수집동의</Text>
      <Text>본인인증</Text>
      <Text>나만의 토론을 위한 본인인증 입니다.</Text>
      <TouchableOpacity>
        <Text>다음</Text>
      </TouchableOpacity>
    </View>
  );
}
