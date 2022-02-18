import React, {memo} from 'react';
import HomeUI from './UI';

const Home = () => {
  return (
    <HomeUI profile={{id: 1, username: 'tst@gfdfsf', name: 'fwefewfwef'}} />
  );
};

export default memo(Home);
