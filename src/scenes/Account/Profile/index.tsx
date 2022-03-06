import React, {memo} from 'react';
import ProfileView from './View';
import useViewModel from './ViewModel';

const Profile = () => {
  const viewModel = useViewModel();

  return <ProfileView viewModel={viewModel} />;
};

export default memo(Profile);
