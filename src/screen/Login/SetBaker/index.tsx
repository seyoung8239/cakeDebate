import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

import Icon from 'react-native-vector-icons/AntDesign';

const SetBaker = () => {
  const navigation = useNavigation();
  const [nickname, setNickname] = useState('');

  return (
    <View style={styles.view}>
      <Icon
        name="left"
        size={30}
        style={styles.icon}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.text}>제빵사 설정</Text>
      <Text style={styles.subText}>
        자신만의 토론을 만들어가는 제빵사의 이름을 지어주세요.
      </Text>
      <Image
        style={styles.image}
        source={require('../../../asset/image/baker.png')}
      />
      <TextInput
        placeholder="고양이"
        defaultValue={nickname}
        onChange={input => setNickname(input)}
        style={styles.input}
      />
      <TouchableOpacity style={styles.btnNextActive}>
        <Text style={styles.btnNextText}>설정 완료</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetBaker;
