import React, {memo} from 'react';
import ProfileView from '../View';
import {User} from '@appTypes/account/models';

type ProfileViewControllerType = {
  viewModel: {
    logout: () => void;
    profile: User;
  };
};

const ProfileViewController = ({viewModel}: ProfileViewControllerType) => {
  const onLogout = () => {
    viewModel.logout();
  };

  return <ProfileView onLogout={onLogout} profile={viewModel.profile} />;
};

export default memo(ProfileViewController);
