import React from 'react';
import {View, Text, Image, ImageSourcePropType} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {colors, gradientColors} from '@/constants/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import commonStyles from '@/constants/commonStyles';
import {
  radius20,
  size24,
  spacing16,
  spacing20,
  spacing8,
} from '@/constants/metrics';
import type {HeaderOptions} from '@react-navigation/elements';
import Feather from '@expo/vector-icons/Feather';
import {useNavigation} from 'expo-router';

type HeaderProps = {
  title: string;
  headerRight?: React.ReactNode | HeaderOptions['headerRight'];
  showBack?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  title,
  headerRight,
  showBack = false,
}) => {
  const {top} = useSafeAreaInsets();
  const {canGoBack, goBack} = useNavigation();

  return (
    <LinearGradient
      colors={gradientColors.tabHeaderBackground}
      style={{
        borderBottomLeftRadius: radius20,
        borderBottomRightRadius: radius20,
        overflow: 'hidden',
      }}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <View style={{height: top}} />
      <View
        style={[
          commonStyles.row,
          commonStyles.spaceBetween,
          {paddingHorizontal: spacing20, paddingVertical: spacing16},
        ]}>
        <View style={commonStyles.row}>
          {showBack && (
            <Feather
              name="chevron-left"
              size={size24}
              color={colors.textPrimary}
              style={{marginRight: spacing8}}
              onPress={goBack}
            />
          )}
          <Text style={commonStyles.headerText}>{title}</Text>
        </View>
        {headerRight &&
          (typeof headerRight === 'function'
            ? headerRight({canGoBack: canGoBack()})
            : headerRight)}
      </View>
    </LinearGradient>
  );
};

export default Header;
