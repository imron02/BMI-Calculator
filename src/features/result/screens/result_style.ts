import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors_util';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: Colors.white,
  },
  card: {
    backgroundColor: Colors.secondary,
    marginTop: 30,
    borderRadius: 8,
    alignItems: 'center',
    padding: 30,
  },
  status: {
    color: Colors.green,
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  bmi: {
    fontWeight: 'bold',
    fontSize: 80,
    color: Colors.white,
  },
  info: {color: Colors.disable},
  text: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  textCenter: {textAlign: 'center'},
  btnSave: {
    backgroundColor: Colors.dark,
    width: 200,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveText: {
    color: Colors.white,
    fontSize: 16,
    letterSpacing: 2,
  },
  btnBack: {
    width,
    backgroundColor: Colors.danger,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontWeight: '600',
    fontSize: 16,
    color: Colors.white,
    letterSpacing: 3,
  },
});

export const spacing = (height: number) => {
  return StyleSheet.create({
    space: {height},
  });
};

export default styles;
