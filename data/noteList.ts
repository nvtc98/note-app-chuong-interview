export type Note = {
  id: number;
  categoryId: number;
  content: string;
  time: string;
};

const noteList: Note[] = [
  {
    id: 1,
    categoryId: 1,
    content: 'Overview of basic computer networking knowledge',
    time: '2023-10-01',
  },
  {
    id: 2,
    categoryId: 1,
    content:
      'How to calculate float multiplication and division in JavaScript?',
    time: '2023-10-02',
  },
  {
    id: 3,
    categoryId: 2,
    content: 'Pan-fried chicken breast with vegetable salad',
    time: '2023-10-03',
  },
  {
    id: 4,
    categoryId: 3,
    content: 'Maintain sufficient daily water intake',
    time: '2023-10-04',
  },
];

export default noteList;
