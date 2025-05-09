import {colors} from '@/constants/colors';
import {ImageSourcePropType} from 'react-native';

type TabConfig = {
  name: string;
  title?: string;
  iconActive: ImageSourcePropType;
  iconInactive: ImageSourcePropType;
  headerRightIcon?: ImageSourcePropType;
  headerShown?: boolean;
  tabBarActiveBackgroundColor?: string;
  destination?: string;
};

const tabData: TabConfig[] = [
  {
    name: 'index',
    title: 'Home',
    iconActive: require('@/assets/images/tabs/home-active.png'),
    iconInactive: require('@/assets/images/tabs/home-inactive.png'),
    headerRightIcon: require('@/assets/images/hexagon.png'),
  },
  {
    name: 'addDummy',
    destination: 'add', // Used to navigate to the Add screen on Stack for better animation
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
