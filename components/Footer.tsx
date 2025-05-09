import React, {PropsWithChildren} from 'react';
import {View, ViewStyle} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {gradientColors} from '@/constants/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {radius20} from '@/constants/metrics';

export type FooterProps = PropsWithChildren<{
  containerStyle?: ViewStyle;
}>;

const Footer: React.FC<FooterProps> = ({containerStyle, children}) => {
  const {bottom} = useSafeAreaInsets();

  return (
    <View style={containerStyle}>
      <LinearGradient
        colors={gradientColors.tabBarBackground}
        style={[
          {
            borderTopLeftRadius: radius20,
            borderTopRightRadius: radius20,
            overflow: 'hidden',
          },
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        {children}
        <View style={{height: bottom}} />
      </LinearGradient>
    </View>
  );
};

export default Footer;
