type AppColors = Record<string, string>;
type GradientColors = {
  [key: string]: [string, string, ...string[]];
};

const colors: AppColors = {
  textPrimary: '#FFF',
  textSecondary: '#FFFFFFB2',
  box: '#FFFFFF0D',
  boxBorder: '#FFFFFF1F',
  tabInactive: '#918DAC',
  highlight: '#F94695',
};

const gradientColors: GradientColors = {
  background: ['#1B284F', '#351159', '#421C45', '#3B184E'],
  tabHeaderBackground: ['#280947', '#280841'],
  tabBarBackground: ['#1C0B37', '#1D0837'],
  button: ['#F94695', '#F13A76'],
};

export {colors, gradientColors};
