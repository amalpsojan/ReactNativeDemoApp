import {Dimensions, Platform, StatusBar} from 'react-native';

const isIOS = Platform.OS === 'ios';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const STATUS_BAR_HEIGHT = isIOS ? 20 : StatusBar.currentHeight;

const SCREEN_WIDTH = WINDOW_WIDTH;
const SCREEN_HEIGHT = WINDOW_HEIGHT - (STATUS_BAR_HEIGHT ?? 0);

const Layout = {
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
  SCREEN_WIDTH: SCREEN_WIDTH < SCREEN_HEIGHT ? SCREEN_WIDTH : SCREEN_HEIGHT,
  SCREEN_HEIGHT: SCREEN_HEIGHT > SCREEN_WIDTH ? SCREEN_HEIGHT : SCREEN_WIDTH,
  STATUS_BAR_HEIGHT,
  SCREEN_WIDTH_ONE_PERCENTAGE: SCREEN_WIDTH * 0.01,
  SCREEN_HEIGHT_ONE_PERCENTAGE: SCREEN_HEIGHT * 0.01,
};

export default Layout;
