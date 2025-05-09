import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import type {
  BottomTabBarProps,
  BottomTabHeaderProps,
} from '@react-navigation/bottom-tabs';
import {LinearGradient} from 'expo-linear-gradient';
import {colors, gradientColors} from '@/constants/colors';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from '@/constants/styles';
import {
  radius20,
  size20,
  size24,
  size36,
  size50,
  spacing12,
  spacing16,
  spacing20,
  spacing6,
} from '@/constants/metrics';

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  navigation,
  descriptors,
}) => {
  const {bottom} = useSafeAreaInsets();
  return (
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
      <View
        style={[styles.row, styles.spaceEvenly, {paddingVertical: spacing20}]}>
        {state.routes.map((route, index) => {
          const {title, tabBarIcon} = descriptors[route.key].options;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.alignCenter}>
              {tabBarIcon?.({
                focused: isFocused,
                color: isFocused ? colors.highlight : colors.tabInactive,
                size: title ? size50 : size36,
              })}
              <Text
                style={[
                  styles.tabTitleText,
                  {
                    marginTop: spacing6,
                    color: isFocused ? colors.highlight : colors.tabInactive,
                  },
                ]}>
                {title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{height: bottom}} />
    </LinearGradient>
  );
};

const TabHeader: React.FC<BottomTabHeaderProps> = ({options, route}) => {
  const {top} = useSafeAreaInsets();
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
          styles.row,
          styles.spaceBetween,
          {paddingHorizontal: spacing20, paddingVertical: spacing16},
        ]}>
        <Text style={styles.headerText}>{options.title ?? route.name}</Text>
        <Image
          source={require('@/assets/images/hexagon.png')}
          style={{width: size24, height: size24}}
        />
      </View>
    </LinearGradient>
  );
};

export {TabBar, TabHeader};
