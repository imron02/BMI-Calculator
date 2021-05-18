import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors_util';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  square: {
    backgroundColor: Colors.mirage,
    justifyContent: 'center',
    alignItems: 'center',
    width: (width - 45) / 2,
    borderRadius: 8,
    paddingVertical: 20,
  },
  text: {
    color: Colors.disable,
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {
    color: Colors.white,
    fontSize: 40,
    fontWeight: 'bold',
  },
  actionWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
    justifyContent: 'space-evenly',
  },
  action: {
    width: 50,
    height: 50,
    backgroundColor: Colors.secondary,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
