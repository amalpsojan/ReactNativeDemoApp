import Layout from './layout';

const ELEMENT_VIEW_WIDTH = Layout.SCREEN_WIDTH_ONE_PERCENTAGE * 80;
const ELEMENT_VIEW_HEIGHT = ELEMENT_VIEW_WIDTH * 0.01 * 16;

const Styles = {
  safeAreaStyle: {
    flex: 1,
    paddingTop: Layout.STATUS_BAR_HEIGHT,
  },
  elementView: {
    width: ELEMENT_VIEW_WIDTH,
    height: ELEMENT_VIEW_HEIGHT,
  },
};

export default Styles;
