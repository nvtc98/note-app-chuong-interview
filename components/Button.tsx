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
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style} disabled={disabled}>
      <LinearGradient
        colors={gradientColors.button}
        style={[
          commonStyles.justifyCenter,
          commonStyles.alignCenter,
          styles.button,
        ]}>
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
