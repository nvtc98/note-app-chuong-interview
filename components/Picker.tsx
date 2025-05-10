import {colors, gradientColors} from '@/constants/colors';
import commonStyles from '@/constants/commonStyles';
import {radius24, size24, spacing16, spacing8} from '@/constants/metrics';
import {usePicker} from '@/hooks/usePicker';
import {Feather} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

export interface OptionProps {
  label: string;
  value: string | Number;
}

interface PickerProps {
  placeholder: string;
  options: OptionProps[];
  selectedValue: OptionProps['value'] | null;
  onSelect: (value: OptionProps['value']) => void;
}

const Picker: React.FC<PickerProps> = ({
  placeholder,
  options,
  selectedValue,
  onSelect,
}) => {
  const {isExpanded, toggleExpand} = usePicker();

  return (
    <View>
      <TouchableWithoutFeedback onPress={toggleExpand}>
        <View
          style={[
            commonStyles.boxContainer,
            commonStyles.row,
            commonStyles.spaceBetween,
          ]}>
          <Text style={commonStyles.text}>
            {options.find(option => option.value === selectedValue)?.label ||
              placeholder}
          </Text>
          <Feather
            name={isExpanded ? 'chevron-up' : 'chevron-down'}
            size={size24}
            color={colors.textPrimary}
            style={{marginRight: spacing8}}
          />
        </View>
      </TouchableWithoutFeedback>
      {isExpanded && (
        <View
          style={[
            commonStyles.boxContainer,
            {marginTop: spacing8, gap: spacing8},
          ]}>
          {options.map(({label, value}) => (
            <Text
              key={`${value}`}
              style={[
                commonStyles.text,
                {
                  color:
                    value === selectedValue
                      ? colors.textPrimary
                      : colors.tabInactive,
                },
              ]}
              onPress={() => {
                toggleExpand();
                onSelect(value);
              }}>
              {label}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Picker;
