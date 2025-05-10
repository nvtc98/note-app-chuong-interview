import {useState} from 'react';

export const usePicker = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const onValueChange = (itemValue: string) => setSelectedValue(itemValue);

  return {
    selectedValue,
    onValueChange,
    isExpanded,
    toggleExpand,
  };
};
