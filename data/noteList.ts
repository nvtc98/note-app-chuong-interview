export type Note = {
  categoryId: number;
  content: string;
  time: number;
};

const noteList: Note[] = [
  {
    categoryId: 1,
    content: 'Overview of basic computer networking knowledge',
    time: 1746882140471,
  },
  {
    categoryId: 1,
    content:
      'How to calculate float multiplication and division in JavaScript?',
    time: 1746882138828,
  },
  {
    categoryId: 2,
    content: 'Pan-fried chicken breast with vegetable salad',
    time: 1746882155640,
  },
  {
    categoryId: 3,
    content: 'Maintain sufficient daily water intake',
    time: 1746882155640,
  },
];

export default noteList;
