import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors_util';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  content: {paddingBottom: 130},
  button: {
    width,
    position: 'absolute',
    bottom: 0,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnActive: {backgroundColor: Colors.danger},
  btnInActive: {backgroundColor: Colors.disable},
  btnText: {
    fontWeight: '600',
    fontSize: 16,
    color: Colors.white,
    letterSpacing: 3,
  },
  weightAndAge: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
});

export default styles;
