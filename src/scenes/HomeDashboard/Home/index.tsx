import React, {memo} from 'react';
import HomeUI from './UI';

const Home = () => {
  return (
    <HomeUI advertisement={{visible: true, title: {visible: true, text: ''}}} />
  );
};

export default memo(Home);
