import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';
import commonStyles from '@/constants/commonStyles';
import {
  size18,
  size20,
  size260,
  spacing12,
  spacing20,
  spacing27,
  spacing4,
  spacing8,
} from '@/constants/metrics';
import Ionicons from '@expo/vector-icons/Ionicons';
import {colors} from '@/constants/colors';
import initialData from '@/data/noteConfigData';
import {useEffect} from 'react';
import {router} from 'expo-router';
import Background from '@/components/Background';

const maxInputLength = 200;

export default function Add() {
  return (
    <Background>
      <ScrollView style={{padding: spacing20, marginTop: 120}}>
        {/* <View style={commonStyles.boxContainer}>
          <TextInput
            style={[
              commonStyles.text,
              {
                height: size260,
              },
            ]}
            multiline
            maxLength={maxInputLength}
            placeholder="Please input note content"
            placeholderTextColor={colors.textPlaceholder}
          />
        </View> */}
      </ScrollView>
    </Background>
  );
}
