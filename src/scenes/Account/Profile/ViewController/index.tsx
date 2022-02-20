import React, {memo} from 'react';
import ProfileView from '../View';

type ProfileViewControllerType = {
  viewModel: {
    getUser: () => string;
  };
};

const ProfileViewController = ({
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  viewModel,
}: ProfileViewControllerType) => {
  return <ProfileView />;
};

export default memo(ProfileViewController);
