import React, {memo} from 'react';
import ProfileView from '../View';

type ProfileViewControllerType = {
  viewModel: {
    getUser: () => string;
    logout: () => void;
  };
};

const ProfileViewController = ({viewModel}: ProfileViewControllerType) => {
  const onLogout = () => {
    viewModel.logout();
  };

  return <ProfileView onLogout={onLogout} />;
};

export default memo(ProfileViewController);
