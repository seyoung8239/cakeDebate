import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export default function OpenCake() {
  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [verifCode, setVerifCode] = useState('');
  const [isVerifing, setIsVerifing] = useState(false);

  return (
    <View style={styles.view}>
      <Text style={styles.text}>개인정보 수집동의</Text>
      <View style={styles.term}></View>
      <Text style={styles.text}>본인인증</Text>
      <Text style={styles.subText}>나만의 토론을 위한 본인인증 입니다.</Text>
      <TextInput
        placeholder="이름"
        defaultValue={name}
        onChange={input => setName(input)}
        style={styles.input}
      />
      <View style={styles.verif}>
        <TextInput
          placeholder="000-0000-0000"
          defaultValue={phoneNum}
          onChange={input => setPhoneNum(input)}
          style={styles.inputPhone}
        />
        <TouchableOpacity style={isVerifing ? styles.active : styles.inactive}>
          <Text
            style={
              isVerifing
                ? styles.btnVerifTextActive
                : styles.btnVerifTextInactive
            }
          >
            인증요청
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="인증번호"
        defaultValue={verifCode}
        onChange={input => setVerifCode(input)}
        style={styles.input}
      />
      <TouchableOpacity
        style={isVerifing ? styles.btnNextActive : styles.btnNextInactive}
      >
        <Text style={styles.btnNextText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
}
