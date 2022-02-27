import Basic from './basic';
import Facebook from './facebook';
import Google from './google';
import Twitter from './twitter';

type AuthenticationType = {
  type: 'Basic' | 'Facebook' | 'Google' | 'Twitter';
};

//TODO: finish this task before v1.5
//eslint-disable-next-line @typescript-eslint/no-unused-vars
const Authentication = ({type = 'Basic'}: AuthenticationType) => {
  switch (type) {
    case 'Basic':
      return Basic;
    case 'Facebook':
      return Facebook;
    case 'Google':
      return Google;
    case 'Twitter':
      return Twitter;
  }
};

export default {Basic, Facebook, Google, Twitter};
