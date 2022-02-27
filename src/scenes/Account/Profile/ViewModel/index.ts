import ProfilenModel from '../Model';
import {useProfile} from '@appHooks';

const ProfileViewModel = () => {
  const model = new ProfilenModel();

  const {profile} = useProfile();

  const logout = (): void => {
    model.logout();
  };

  return {logout, profile};
};

export default ProfileViewModel;
