import React, {memo} from 'react';
import ProfileViewController from './ViewController';
import useViewModel from './ViewModel';

const Profile = () => {
  const viewModel = useViewModel();

  return <ProfileViewController viewModel={viewModel} />;
};

export default memo(Profile);
