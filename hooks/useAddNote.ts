import {OptionProps} from '@/components/Picker';
import noteConfigData from '@/data/noteConfigData';
import {useState, useEffect} from 'react';
import {useNote} from './noteContext';
import {Note} from '@/data/noteList';
import {router} from 'expo-router';

const optionList = noteConfigData.map(config => ({
  value: config.id,
  label: config.title,
}));

const useAddNote = () => {
  const {addNote} = useNote();

  const [text, setText] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<
    Note['categoryId'] | null
  >(null);

  const onSelectOption = (value: OptionProps['value']) => {
    setSelectedOption(Number(value));
  };

  const onSaveNote = () => {
    if (selectedOption === null || !text.length) {
      return;
    }
    const node: Note = {
      categoryId: selectedOption,
      content: text,
      time: Date.now(),
    };
    addNote(node);
    router.back();
  };

  return {
    text,
    setText,
    optionList,
    selectedOption,
    setSelectedOption,
    onSelectOption,
    onSaveNote,
  };
};

export default useAddNote;
