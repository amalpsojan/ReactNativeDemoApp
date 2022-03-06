import {useProfile, useAuth} from '@appHooks';

const ProfileViewModel = () => {
  const {profile} = useProfile();
  const {logout} = useAuth();

  return {logout, profile};
};

export default ProfileViewModel;
