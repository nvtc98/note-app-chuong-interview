import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import commonStyles from '@/constants/commonStyles';
import {gradientColors} from '@/constants/colors';

const Background: React.FC<{children: React.ReactNode}> = ({children}) => (
  <LinearGradient
    colors={gradientColors.background}
    style={commonStyles.container}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 1}}>
    {children}
  </LinearGradient>
);

export default Background;
