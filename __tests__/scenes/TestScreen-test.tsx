/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {TestScreen} from '@appScenes';

it('TestScreen Scene renders correctly', () => {
  renderer.create(<TestScreen />);
});
