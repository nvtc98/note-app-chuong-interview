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
  addNote: (note: Note) => void;
}>({
  noteData: [],
  addNote: () => {},
});

type NoteProviderProps = PropsWithChildren<{}>;

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

  console.log('note', JSON.stringify(noteData, null, 2));

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

  return (
    <NoteContext.Provider value={{noteData, addNote}}>
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
