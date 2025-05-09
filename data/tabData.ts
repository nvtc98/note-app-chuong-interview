import {colors} from '@/constants/colors';
import {ImageSourcePropType} from 'react-native';

type TabConfig = {
  name: string;
  title?: string;
  iconActive: ImageSourcePropType;
  iconInactive: ImageSourcePropType;
  headerShown?: boolean;
  tabBarActiveBackgroundColor?: string;
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
    tabBarActiveBackgroundColor: colors.box, // Special handling for the Summary screen because its screen content overlaps with colors.box
  },
];

export default tabData;
