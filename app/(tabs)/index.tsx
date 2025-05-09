import {Image, ScrollView, Text, View} from 'react-native';

import commonStyles from '@/constants/commonStyles';
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
    <View style={commonStyles.container}>
      <ScrollView style={{padding: size20}}>
        <View style={commonStyles.row}>
          <Ionicons
            name="time-outline"
            size={20}
            color={colors.textSecondary}
          />
          <Text
            style={[
              commonStyles.titleText,
              {marginLeft: spacing8, color: colors.textSecondary},
            ]}>
            Recently created notes
          </Text>
        </View>
        {initialData.map(category => (
          <View key={category.id} style={{marginTop: spacing27}}>
            <View style={[commonStyles.row, {marginBottom: spacing4}]}>
              <Image
                source={category.icon}
                style={{width: size20, height: size20}}
                resizeMode="contain"
              />
              <Text style={[commonStyles.titleText, {marginLeft: spacing8}]}>
                {category.title}
              </Text>
            </View>
            {category.items.map((item, index) => (
              <View
                key={index}
                style={[
                  commonStyles.boxContainer,
                  commonStyles.row,
                  {marginTop: spacing8},
                ]}>
                <Text
                  style={[
                    commonStyles.text,
                    commonStyles.flex1,
                    {marginLeft: spacing8},
                  ]}>
                  {item}
                </Text>
                <Image
                  // NOTE: use image because the icon has gradient
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
    </View>
  );
}
