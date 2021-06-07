import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors_util';

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
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: Colors.mirage,
    marginBottom: 10,
    borderRadius: 10,
  },
  status: {
    backgroundColor: Colors.secondary,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  statusLabel: {
    fontSize: 20,
    color: Colors.white,
  },
  itemLabel: {
    color: Colors.white,
    fontSize: 16,
  },
  bmiLabel: {
    fontSize: 18,
    color: Colors.green,
  },
  description: {paddingVertical: 10, flex: 1},
});

export default styles;
