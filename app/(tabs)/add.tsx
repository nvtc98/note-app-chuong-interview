import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';
import styles from '@/constants/styles';
import {
  size18,
  size20,
  spacing12,
  spacing27,
  spacing4,
  spacing8,
} from '@/constants/metrics';
import Ionicons from '@expo/vector-icons/Ionicons';
import {colors} from '@/constants/colors';
import initialData from '@/data/initialData';

export default function Home() {
  return (
    <View style={[styles.container, {backgroundColor: 'transparent'}]}>
      {/* <LinearGradient
        // Background Linear Gradient
        colors={['#1B284F', '#351159', '#421C45', '#3B184E']}
        style={styles.container}> */}
      <ScrollView style={{padding: size20}}>
        <View style={styles.row}>
          <Ionicons
            name="time-outline"
            size={20}
            color={colors.textSecondary}
          />
          <Text
            style={[
              styles.titleText,
              {marginLeft: spacing8, color: colors.textSecondary},
            ]}>
            Recently created notes
          </Text>
        </View>
        {initialData.map(category => (
          <View key={category.id} style={{marginTop: spacing27}}>
            <View style={[styles.row, {marginBottom: spacing4}]}>
              <Image
                source={category.icon}
                style={{width: size20, height: size20}}
                resizeMode="contain"
              />
              <Text style={[styles.titleText, {marginLeft: spacing8}]}>
                {category.title}
              </Text>
            </View>
            {category.items.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.boxContainer,
                  styles.row,
                  {marginTop: spacing8},
                ]}>
                <Text
                  style={[styles.text, styles.flex1, {marginLeft: spacing8}]}>
                  {item}
                </Text>
                <Image
                  source={require('@/assets/images/chevron-right-highlight.png')}
                  style={{
                    width: size18,
                    height: size18,
                    marginLeft: spacing12,
                  }}
                  resizeMode="contain"
                />
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
      {/* </LinearGradient> */}
    </View>
  );
}
