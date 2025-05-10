import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';
import commonStyles from '@/constants/commonStyles';
import {
  size18,
  size20,
  size24,
  size260,
  spacing12,
  spacing16,
  spacing20,
  spacing27,
  spacing33,
  spacing4,
  spacing8,
} from '@/constants/metrics';
import Ionicons from '@expo/vector-icons/Ionicons';
import {colors} from '@/constants/colors';
import initialData from '@/data/noteConfigData';
import {useEffect, useState} from 'react';
import {router} from 'expo-router';
import Background from '@/components/Background';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Feather from '@expo/vector-icons/Feather';
import useAddNote from '@/hooks/useAddNote';
import Picker from '@/components/Picker';
import settingsData from '@/data/settingsData';
import {useNote} from '@/hooks/noteContext';
import Toast from '@/components/Toast';
import {useToast} from '@/hooks/toastContext';
import normalize from 'react-native-normalize';

export default function Settings() {
  const {clearAllNotes} = useNote();
  const {onShowToast, toastTitle} = useToast();

  const onClearAllNotes = () => {
    onShowToast(`All notes have
been cleared`);
    clearAllNotes();
  };

  return (
    <Background>
      <ScrollView style={{padding: spacing20, marginTop: normalize(120)}}>
        <View style={{gap: spacing16}}>
          {settingsData.map(settingItem => (
            <TouchableOpacity key={settingItem.id}>
              <View
                style={[
                  commonStyles.boxContainer,
                  commonStyles.row,
                  commonStyles.spaceBetween,
                ]}>
                <View style={commonStyles.row}>
                  <Image
                    source={settingItem.icon}
                    style={{width: size24, height: size24}}
                  />
                  <Text
                    style={[commonStyles.titleText, {marginLeft: spacing16}]}>
                    {settingItem.title}
                  </Text>
                </View>
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
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Footer>
        <View
          style={[
            commonStyles.justifyCenter,
            commonStyles.alignCenter,
            {paddingVertical: spacing33},
          ]}>
          <Button
            disabled={!!toastTitle}
            title="Delete All Notes"
            onPress={onClearAllNotes}
            style={{height: normalize(34), width: normalize(200)}}
            textStyle={commonStyles.text}
          />
        </View>
      </Footer>
    </Background>
  );
}
