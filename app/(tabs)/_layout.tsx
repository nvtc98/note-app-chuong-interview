import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Link, Tabs} from 'expo-router';
import {Image, Pressable, Text, View} from 'react-native';

import {useClientOnlyValue} from '@/components/useClientOnlyValue';
import {LinearGradient} from 'expo-linear-gradient';
import styles from '@/constants/styles';
import {colors, gradientColors} from '@/constants/colors';
import {TabBar, TabHeader} from '@/components/Tab';
import tabData from '@/data/tabData';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{marginBottom: -3}} {...props} />;
}

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <LinearGradient
      colors={gradientColors.background}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <Tabs
        tabBar={props => <TabBar {...props} />}
        screenOptions={{
          // headerTransparent: true,
          // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          headerShown: useClientOnlyValue(false, true),
          sceneStyle: {backgroundColor: 'transparent'},
          header: props => <TabHeader {...props} />,
        }}>
        {tabData.map(({name, title, iconActive, iconInactive, headerShown}) => (
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
            }}
          />
        ))}
      </Tabs>
    </LinearGradient>
  );
}
