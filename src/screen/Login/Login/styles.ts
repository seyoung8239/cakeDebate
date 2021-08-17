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
    marginBottom: 85,
    fontWeight: 'bold',
    fontSize: 30,
  },
  image: {
    // flex: 1,
    width: 200,
    height: 200,
    resizeMode: 'contain',
    // top: '5%',
    left: '25%',
    bottom: 10,
  },
  view: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttons: {
    marginTop: 35,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    padding: 13,
    marginTop: 25,
    width: '75%',
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
