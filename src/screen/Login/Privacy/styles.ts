import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  view: {flex: 1, marginLeft: '5%', marginRight: '%'},
  term: {
    height: '25%',
    backgroundColor: '#BBBBBB',
    marginTop: 10,
  },
  text: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 30,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 25,
    fontSize: 20,
  },
  inputPhone: {
    // marginBottom: 25,
    fontSize: 20,
  },
  subText: {
    marginBottom: 20,
  },
  verif: {flexDirection: 'row', borderBottomWidth: 1, marginBottom: 25},
  active: {},
  inactive: {
    width: 80,
    height: 38,
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'red',
    position: 'absolute',
    right: 0,
  },
  btnVerifTextActive: {},
  btnVerifTextInactive: {
    color: 'red',
    fontWeight: 'bold',
  },

  btnNext: {},
  btnNextActive: {},
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
