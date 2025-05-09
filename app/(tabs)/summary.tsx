import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import commonStyles from '@/constants/commonStyles';
import {
  radius20,
  size18,
  size20,
  size22,
  size48,
  size50,
  spacing12,
  spacing16,
  spacing20,
  spacing22,
  spacing24,
  spacing27,
  spacing4,
  spacing8,
} from '@/constants/metrics';
import Ionicons from '@expo/vector-icons/Ionicons';
import {colors} from '@/constants/colors';
import initialData from '@/data/initialData';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Button from '@/components/Button';

export default function Summary() {
  const {top} = useSafeAreaInsets();

  return (
    <View style={commonStyles.container}>
      <View style={{height: styles.robotImageSize.height}}>
        <Image
          source={require('@/assets/images/summary-robot.png')}
          style={[styles.robotImageSize, {position: 'absolute', right: 0}]}
        />
        <Text
          style={[
            commonStyles.headerText,
            {
              marginTop: spacing16 + top,
              marginBottom: spacing16,
              marginLeft: spacing20,
            },
          ]}>
          Summary
        </Text>
      </View>
      <ScrollView
        style={{
          paddingHorizontal: spacing20,
          paddingVertical: spacing22,
          backgroundColor: colors.box,
          borderTopLeftRadius: radius20,
          borderTopRightRadius: radius20,
        }}>
        {/* thêm key */}
        {[1, 2, 3].map((category, index) => (
          <View style={{marginTop: index ? spacing24 : 0}}>
            <View style={[commonStyles.row]}>
              <View style={[commonStyles.row, commonStyles.flex1]}>
                <Image
                  source={require('@/assets/images/life-person.png')}
                  style={{width: size48, height: size48}}
                />
                <Text style={[commonStyles.titleText, {marginLeft: spacing4}]}>
                  Work and study
                </Text>
              </View>
              <Button title="Detail" onPress={() => {}} />
            </View>
            <View style={[{marginTop: spacing12}, commonStyles.boxContainer]}>
              <Text style={[commonStyles.text, {color: colors.textSecondary}]}>
                This topic has a total of 50 records.
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  robotImageSize: {
    width: 239,
    height: 185,
  },
});
