import {colors, gradientColors} from '@/constants/colors';
import commonStyles from '@/constants/commonStyles';
import {
  radius20,
  radius24,
  spacing16,
  spacing22,
  spacing33,
  spacing8,
} from '@/constants/metrics';
import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';

interface ToastProps {
  title: string;
  show: boolean;
}

const Toast: React.FC<ToastProps> = ({title, show}) => {
  return show ? (
    <View style={styles.backdropContainer}>
      <LinearGradient
        colors={gradientColors.toast}
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <Text style={commonStyles.titleText}>{title}</Text>
      </LinearGradient>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  backdropContainer: {
    ...StyleSheet.absoluteFillObject,
    ...commonStyles.justifyCenter,
    ...commonStyles.alignCenter,
    backgroundColor: colors.backdrop,
  },
  container: {
    borderRadius: radius20,
    paddingVertical: spacing22,
    paddingHorizontal: spacing33,
  },
});

export default Toast;
