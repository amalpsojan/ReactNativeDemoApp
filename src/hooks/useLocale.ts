type Locale = {
  language?: 'en' | 'mal';
};

type Text = string;

const useLocale = (props: Locale = {}) => {
  const {language: selectedLanguage = 'en'} = props;

  const language = (text: Text) => {
    const _language = languages[selectedLanguage];

    // @ts-ignore: Unreachable code error
    return _language[text] || text;
  };

  return {language};
};

const languages = {
  en: {
    appName: 'Hey APP',
    Email: 'Email',
    Password: 'Password',
    'Forgot Password?': 'Forgot Password?',
    LOGIN: 'LOGIN',
    Signup: 'Signup',
    Logout: 'Logout',
  },
  mal: {
    appName: 'ഹേ ആപ്പ്',
    Email: 'ഇമെയിൽ',
    Password: 'പാസ്വേഡ്',
    'Forgot Password?': 'പാസ്വേഡ് മറന്നോ?',
    LOGIN: 'ലോഗിൻ',
    Signup: 'രജിസ്റ്റർ ചെയ്യുക',
    Logout: 'പുറത്തുകടക്കുക',
  },
};

export default useLocale;
