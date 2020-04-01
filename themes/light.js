// @flow

import {COLORS} from '../src/utils/colors';

export interface Theme {
  theme: {
    background: string,
    border: string,
    backgroundAlt: string,
    borderAlt: string,
    text: string
  };
}

const light: Theme = {
  theme: {
    background: COLORS.WHITE,
    backgroundImage: COLORS.VERY_LIGHT_GRAY,
    backgroundCard: COLORS.WHITE,
    secondary: COLORS.VIVID_ORANGE,
    third: COLORS.VIVID_MAGENTA,
    border: '#bdbdbd',
    backgroundAlt: '#eaeaeb',
    borderAlt: '#bdbdbd',
    text: COLORS.BLACK
  }
};

export default light;
