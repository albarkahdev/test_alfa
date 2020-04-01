// @flow

import {Dimensions} from 'react-native';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const styleNumber = (val: any, defaultVal: number) => {
  if (typeof val === 'number') {
    return val;
  }
  return defaultVal;
};

export {WIDTH, HEIGHT, styleNumber};
