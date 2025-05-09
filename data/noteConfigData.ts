export type NoteConfig = {
  id: number;
  title: string;
  icon: number;
  personIcon: number;
};

export const characterLimit = 20;
export const noteLimit = 3;

export default [
  {
    id: 1,
    title: 'Work and study',
    icon: require('@/assets/images/workandstudy.png'),
    personIcon: require('@/assets/images/workandstudy-person.png'),
  },
  {
    id: 2,
    title: 'Life',
    icon: require('@/assets/images/life.png'),
    personIcon: require('@/assets/images/life-person.png'),
  },
  {
    id: 3,
    title: 'Health and wellness',
    icon: require('@/assets/images/healthandwellness.png'),
    personIcon: require('@/assets/images/healthandwellness-person.png'),
  },
] as NoteConfig[];
