import React from 'react';
import {router, Tabs} from 'expo-router';
import {Image, TouchableOpacity} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';
import commonStyles from '@/constants/commonStyles';
import {gradientColors} from '@/constants/colors';
import {TabBar, TabHeader} from '@/components/Tab';
import tabData from '@/data/tabData';
import {size24, spacing20} from '@/constants/metrics';

export default function TabLayout() {
  return (
    <LinearGradient
      colors={gradientColors.background}
      style={commonStyles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <Tabs
        tabBar={props => <TabBar {...props} />}
        screenOptions={{
          sceneStyle: {backgroundColor: 'transparent'},
          header: props => <TabHeader {...props} />,
        }}>
        {tabData.map(
          ({
            name,
            title,
            iconActive,
            iconInactive,
            headerShown,
            tabBarActiveBackgroundColor,
            headerRightIcon,
            headerRightAction,
          }) => (
            <Tabs.Screen
              key={name}
              name={name}
              options={{
                title,
                headerShown: headerShown ?? true,
                tabBarIcon: ({focused, size}) => (
                  <Image
                    source={focused ? iconActive : iconInactive}
                    style={{width: size, height: size}}
                  />
                ),
                headerRight: () => (
                  <TouchableOpacity
                    hitSlop={{
                      top: spacing20,
                      bottom: spacing20,
                      left: spacing20,
                      right: spacing20,
                    }}
                    onPress={() => router.push(`/${headerRightAction}` as any)}>
                    <Image
                      source={headerRightIcon}
                      style={{width: size24, height: size24}}
                    />
                  </TouchableOpacity>
                ),
                tabBarActiveBackgroundColor,
              }}
            />
          ),
        )}
      </Tabs>
    </LinearGradient>
  );
}
