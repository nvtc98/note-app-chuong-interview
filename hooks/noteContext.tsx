import NoteConfigData, {
  characterLimit,
  NoteConfig,
  noteLimit,
} from '@/data/noteConfigData';
import NoteList, {Note} from '@/data/noteList';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from 'react';

export const NoteContext = createContext<{
  noteData: Array<NoteConfig & {items: Note[]}>;
  setNoteData: React.Dispatch<
    React.SetStateAction<
      (NoteConfig & {
        items: Note[];
      })[]
    >
  >;
  initData: () => void;
}>({
  noteData: [],
  setNoteData: () => {},
  initData: () => {},
});

type NoteProviderProps = PropsWithChildren<{}>;

export const NoteProvider = ({children}: NoteProviderProps) => {
  const [noteData, setNoteData] = useState<Array<NoteConfig & {items: Note[]}>>(
    [],
  );

  const initData = () => {
    setNoteData(
      NoteConfigData.map(config => ({
        ...config,
        items: NoteList.filter(note => note.categoryId === config.id),
      })),
    );
  };

  useEffect(initData, []);

  return (
    <NoteContext.Provider value={{noteData, setNoteData, initData}}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNote = () => {
  const context = useContext(NoteContext);
  if (context === undefined) {
    throw new Error('useNote must be used within a NoteProvider');
  }
  const {noteData, setNoteData, initData} = context;

  const getLatestNotes = (notes: Note[]) => {
    const sortedNotes = notes.sort(
      (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime(),
    );
    const latestNotes = sortedNotes.slice(0, noteLimit);
    const latestNotesWithContent = latestNotes.map(note => ({
      ...note,
      content:
        note.content.length > characterLimit
          ? `${note.content.slice(0, characterLimit)}...`
          : note.content,
    }));
    return latestNotesWithContent;
  };

  const addNote = (note: Note) => {
    const newNoteData = noteData.map(config => {
      if (config.id === note.categoryId) {
        return {
          ...config,
          items: [...config.items, note],
        };
      }
      return config;
    });
    setNoteData(newNoteData);
  };

  const clearAllNotes = () => {
    // setNoteData([]);
    initData();
  };

  return {...context, getLatestNotes, addNote, clearAllNotes};
};
