import {
  Image,
  KeyboardAvoidingView,
  Platform,
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
import {useEffect} from 'react';
import {router} from 'expo-router';
import Background from '@/components/Background';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Feather from '@expo/vector-icons/Feather';
import useAddNote from '@/hooks/useAddNote';
import Picker from '@/components/Picker';

const maxInputLength = 200;

export default function Add() {
  const {
    optionList,
    selectedOption,
    onSelectOption,
    onSaveNote,
    text,
    setText,
  } = useAddNote();

  return (
    <KeyboardAvoidingView
      style={commonStyles.flex1}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Background>
        <ScrollView style={{padding: spacing20, marginTop: 120}}>
          <Picker
            placeholder="Choose a category"
            options={optionList}
            selectedValue={selectedOption}
            onSelect={onSelectOption}
          />
          <View style={[commonStyles.boxContainer, {marginTop: spacing16}]}>
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
              value={text}
              onChangeText={setText}
            />
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
              title="Save"
              onPress={onSaveNote}
              style={{height: 34, width: 200}}
            />
          </View>
        </Footer>
      </Background>
    </KeyboardAvoidingView>
  );
}
