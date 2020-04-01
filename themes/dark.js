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

const dark: Theme = {
  theme: {
    background: COLORS.VERY_DARK_GRAY_MOSTLY_BLACK,
    backgroundCard: COLORS.BLACK,
    backgroundImage: COLORS.VERY_DARK_GRAY,
    secondary: COLORS.PURE_CYAN,
    third: COLORS.PURE_LIME_GREEN,
    border: '#575c66',
    backgroundAlt: '#575c66',
    borderAlt: '#2E3440',
    text: COLORS.WHITE
  }
};

export default dark;
