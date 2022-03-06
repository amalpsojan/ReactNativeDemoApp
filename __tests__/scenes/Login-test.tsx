/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Login} from '@appScenes';

it('Login Scene renders correctly', () => {
  renderer.create(<Login />);
});
