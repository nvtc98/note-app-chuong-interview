import NoteConfigData, {
  characterLimit,
  NoteConfig,
  noteLimit,
} from '@/data/noteConfigData';
import NoteList, {Note} from '@/data/noteList';
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';

export const NoteContext = createContext<{
  noteData: Array<NoteConfig & {items: Note[]}>;
  setNotes: Dispatch<SetStateAction<(NoteConfig & {items: Note[]})[]>>;
}>({
  noteData: [],
  setNotes: () => {},
});

type NoteProviderProps = {
  children: ReactNode;
};

export const NoteProvider = ({children}: NoteProviderProps) => {
  const [noteData, setNoteData] = useState<Array<NoteConfig & {items: Note[]}>>(
    [],
  );

  const loadData = () => {
    setNoteData(
      NoteConfigData.map(config => ({
        ...config,
        items: NoteList.filter(note => note.categoryId === config.id),
      })),
    );
  };

  useEffect(loadData, []);

  return (
    <NoteContext.Provider value={{noteData, setNotes: setNoteData}}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNote = () => {
  const context = useContext(NoteContext);
  if (context === undefined) {
    throw new Error('useNote must be used within a NoteProvider');
  }

  const getLatestNotes = (notes: Note[]) => {
    console.log(
      '->',
      notes
        .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
        .slice(0, 3),
    );

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

  return {...context, getLatestNotes};
};
