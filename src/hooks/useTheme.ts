import {useColorScheme} from 'react-native';

const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return isDarkMode ? styles.dark : styles.light;
};

export default useTheme;

const styles = {
  dark: {
    colors: {
      primaryColor: '#fb5b5a',
      secondaryColor: '',

      primaryTextColor: '#ffffff',
      secondaryTextColor: '',

      placeholderTextColor: '#f5f5f5',

      inputBackgroundColor: '#465881',

      backgroundColor: '#003f5c',
    },
  },
  light: {
    colors: {
      primaryColor: '#fb5b5a',
      secondaryColor: '',

      secondaryTextColor: '',
      primaryTextColor: '#000000',

      placeholderTextColor: '#003f5c',

      inputBackgroundColor: '#dbdbdb',

      backgroundColor: '#f5f5f5',
    },
  },
};
