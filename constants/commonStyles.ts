import {StyleSheet} from 'react-native';
import {colors} from './colors';
import {radius16, size12, size14, size16, size24, spacing16} from './metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: colors.textPrimary,
    fontSize: size24,
    fontWeight: '600',
  },
  titleText: {
    color: colors.textPrimary,
    fontSize: size16,
    fontWeight: '400',
  },
  text: {
    color: colors.textPrimary,
    fontSize: size14,
    fontWeight: '400',
  },
  tabTitleText: {
    fontSize: size12,
    fontWeight: '500',
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
    padding: spacing16,
  },
  flex1: {
    flex: 1,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
  },
});
