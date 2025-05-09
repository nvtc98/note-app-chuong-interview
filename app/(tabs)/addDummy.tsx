import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';
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
import initialData from '@/data/noteConfigData';
import {useCallback, useEffect} from 'react';
import {router, useFocusEffect} from 'expo-router';

export default function Add() {
  useFocusEffect(
    useCallback(() => {
      router.push('/add');
    }, []),
  );

  return null;
}
