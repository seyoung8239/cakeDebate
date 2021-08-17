import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

export default function OpenCake() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [verifCode, setVerifCode] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const [isVerifing, setIsVerifing] = useState(false);
  const [isNext, setIsNext] = useState(false);

  const handlePressAgreement = () => {
    setIsAgreed(crnt => !crnt);
    // checkIfVerif();
  };

  const handlePressVerif = () => {
    setIsVerifing(true);
    // checkIfVerif();
  };

  const handlePressNext = () => {
    navigation.navigate('SetBaker');
  };

  useEffect(() => {
    if (isVerifing && isAgreed) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
  }, [isAgreed, isVerifing]);

  return (
    <View style={styles.view}>
      <Text style={styles.text}>개인정보 수집동의</Text>
      <View style={styles.term}>
        <View style={styles.agree}>
          <Text style={styles.textAgree}>동의합니다. </Text>
          <TouchableOpacity
            onPress={handlePressAgreement}
            style={isAgreed ? styles.btnAgree : styles.btnNotAgree}
          />
        </View>
      </View>
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
        <TouchableOpacity
          style={isVerifing ? styles.inactive : styles.active}
          onPress={handlePressVerif}
        >
          <Text
            style={
              isVerifing
                ? styles.btnVerifTextInactive
                : styles.btnVerifTextActive
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
      {isNext ? (
        <TouchableOpacity
          style={styles.btnNextActive}
          onPress={handlePressNext}
        >
          <Text style={styles.btnNextText}>다음</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.btnNextInactive}>
          <Text style={styles.btnNextText}>다음</Text>
        </View>
      )}
    </View>
  );
}
