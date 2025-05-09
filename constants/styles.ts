import {StyleSheet} from 'react-native';
import colors from './colors';
import {radius16} from './spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '400',
  },
  text: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '400',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxContainer: {
    backgroundColor: colors.box,
    borderColor: colors.boxBorder,
    borderWidth: 1,
    borderRadius: radius16,
    padding: 16,
  },
  flex1: {
    flex: 1,
  },
});
