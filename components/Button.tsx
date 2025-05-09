import {gradientColors} from '@/constants/colors';
import commonStyles from '@/constants/commonStyles';
import {radius24, spacing16, spacing8} from '@/constants/metrics';
import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({title, onPress, style, textStyle}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={gradientColors.button}
        style={[styles.button, style]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: radius24,
    paddingHorizontal: spacing16,
    paddingVertical: spacing8,
  },
  text: {
    ...commonStyles.text,
    fontWeight: '600',
  },
});

export default Button;
