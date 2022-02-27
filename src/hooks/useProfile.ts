import {User} from '@appTypes/account/models';
import {useSelector} from 'react-redux';
import {AccountSelector} from '@appState/selectors';

const useProfile = () => {
  const user: User = useSelector(AccountSelector.selectUser);

  return {
    profile: {
      id: user.id,
      name: user.name,
      username: user.username,
    },
  };
};

export default useProfile;
