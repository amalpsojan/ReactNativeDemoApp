import {useColorScheme} from 'react-native';
import Colors from '@appConfigs/colors';

type Theme = {
  colorScheme?: 'light' | 'dark';
};

const useTheme = (props: Theme = {}) => {
  //system Default
  const defaultColorScheme = useColorScheme();

  const selectedColorScheme = defaultColorScheme || 'light';

  const {colorScheme = selectedColorScheme} = props;

  return {colors: Colors[colorScheme]};
};

export default useTheme;
