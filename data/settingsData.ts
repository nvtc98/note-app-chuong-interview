export type Settings = {
  id: number;
  title: string;
  icon: number;
};

export default [
  {
    id: 1,
    title: 'Online Customer',
    icon: require('@/assets/images/onlinecustomer.png'),
  },
  {
    id: 2,
    title: 'User Agreement',
    icon: require('@/assets/images/useragreement.png'),
  },
  {
    id: 3,
    title: 'Privacy Policy',
    icon: require('@/assets/images/privacypolicy.png'),
  },
  {
    id: 4,
    title: 'About Us',
    icon: require('@/assets/images/aboutus.png'),
  },
] as Settings[];
