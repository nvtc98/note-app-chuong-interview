import {LinearGradientProps} from 'expo-linear-gradient';

type GradientColorMap = {
  [key: string]: LinearGradientProps['colors'];
};

const colors = {
  textPrimary: '#FFF',
  textSecondary: '#FFFFFFB2',
  box: '#FFFFFF0D',
  boxBorder: '#FFFFFF1F',
  tabInactive: '#918DAC',
  highlight: '#F94695',
  textPlaceholder: '#FFFFFFE5',
  backdrop: '#0003',
};

const gradientColors: GradientColorMap = {
  background: ['#1B284F', '#351159', '#421C45', '#3B184E'],
  tabHeaderBackground: ['#280947', '#280841'],
  tabBarBackground: ['#1C0B37', '#1D0837'],
  button: ['#F94695', '#F13A76'],
  toast: ['#C724E1', '#4E22CC'],
} as const;

export {colors, gradientColors};
