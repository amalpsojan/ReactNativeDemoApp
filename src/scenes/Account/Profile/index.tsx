import React, {memo} from 'react';
import ProfileViewController from './ViewController';
import ProfileViewModel from './ViewModel';

const Profile = () => {
  const viewModel = new ProfileViewModel();

  return <ProfileViewController viewModel={viewModel} />;
};

export default memo(Profile);
