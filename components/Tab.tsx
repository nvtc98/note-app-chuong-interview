import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import type {
  BottomTabBarProps,
  BottomTabHeaderProps,
} from '@react-navigation/bottom-tabs';
import {colors} from '@/constants/colors';
import commonStyles from '@/constants/commonStyles';
import {size36, size50, spacing20, spacing6} from '@/constants/metrics';
import {router} from 'expo-router';
import tabData from '@/data/tabData';
import Header from './Header';
import Footer from './Footer';

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  navigation,
  descriptors,
}) => {
  // Special handling for the Summary screen because its screen content overlaps with colors.box
  const {tabBarActiveBackgroundColor} =
    descriptors[state.routes[state.index].key].options;

  return (
    <Footer containerStyle={{backgroundColor: tabBarActiveBackgroundColor}}>
      <View
        style={[
          commonStyles.row,
          commonStyles.spaceEvenly,
          {
            paddingVertical: spacing20,
          },
        ]}>
        {state.routes.map((route, index) => {
          const {title, tabBarIcon} = descriptors[route.key].options;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            const destination = tabData[index].destination;

            if (!isFocused && !event.defaultPrevented) {
              if (destination) {
                router.push(`/${destination}` as any);
              } else {
                navigation.navigate(route.name);
              }
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={commonStyles.alignCenter}>
              {tabBarIcon?.({
                focused: isFocused,
                color: isFocused ? colors.highlight : colors.tabInactive,
                size: title ? size50 : size36,
              })}
              <Text
                style={[
                  commonStyles.tabTitleText,
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
    </Footer>
  );
};

const TabHeader: React.FC<BottomTabHeaderProps> = ({options, route}) => {
  return (
    <Header
      headerRight={options.headerRight}
      title={options.title || route.name}
    />
  );
};

export {TabBar, TabHeader};
