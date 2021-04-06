import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../../utils/color_util';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  button: isActive => ({
    width,
    backgroundColor: isActive ? Colors.danger : Colors.disable,
    position: 'absolute',
    bottom: 0,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  btnText: {
    fontWeight: '600',
    fontSize: 16,
    color: Colors.white,
    letterSpacing: 3,
  },
});

export default styles;
