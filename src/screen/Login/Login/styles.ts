import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  icon: {
    marginTop: 20,
    marginLeft: 25,
  },
  logIn: {
    // position: 'absolute',
    // left: '5%',
    // top: '5%',
    marginTop: 20,
    marginLeft: 30,
    marginBottom: 300,
    fontWeight: 'bold',
    fontSize: 30,
  },
  view: {
    flex: 1,
  },
  buttons: {
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    padding: 15,
    marginTop: 30,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  white: {
    color: 'white',
  },
});

export default styles;
