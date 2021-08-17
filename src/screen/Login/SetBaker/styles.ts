import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  view: {flex: 1, marginLeft: '5%', marginRight: '5%'},
  icon: {
    marginTop: 20,
  },
  text: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 30,
  },
  subText: {
    marginBottom: 20,
  },
  btnNextActive: {
    width: '100%',
    alignItems: 'center',
    padding: 15,
    marginTop: 20,
    // borderWidth: 2,
    backgroundColor: '#F55656',
    borderRadius: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    left: '22.5%',
    marginTop: 30,
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 25,
    fontSize: 20,
  },
  btnNextInactive: {
    width: '100%',
    alignItems: 'center',
    padding: 15,
    marginTop: 20,
    // borderWidth: 2,
    backgroundColor: '#FFD3D3',
    borderRadius: 10,
  },
  btnNextText: {
    color: 'white',
    fontSize: 20,
    shadowColor: 'black',
  },
});
