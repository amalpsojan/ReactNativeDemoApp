import React from 'react';

import {Login, Profile} from '@appScenes';
import {useAuth} from '@appHooks';

const Root = () => {
  const {user} = useAuth();
  return user ? <Profile /> : <Login />;
};

export default Root;
