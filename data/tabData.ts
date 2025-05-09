import {ImageSourcePropType} from 'react-native';

type TabConfig = {
  name: string;
  title?: string;
  iconActive: ImageSourcePropType;
  iconInactive: ImageSourcePropType;
  headerShown?: boolean;
};

const tabData: TabConfig[] = [
  {
    name: 'index',
    title: 'Home',
    iconActive: require('@/assets/images/tabs/home-active.png'),
    iconInactive: require('@/assets/images/tabs/home-inactive.png'),
  },
  {
    name: 'add',
    iconActive: require('@/assets/images/tabs/add.png'),
    iconInactive: require('@/assets/images/tabs/add.png'),
  },
  {
    name: 'summary',
    title: 'Summary',
    iconActive: require('@/assets/images/tabs/summary-active.png'),
    iconInactive: require('@/assets/images/tabs/summary-inactive.png'),
    headerShown: false,
  },
];

export default tabData;
