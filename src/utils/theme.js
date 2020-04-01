// @flow

import {DefaultTheme, Theme, configureFonts} from 'react-native-paper';
import {COLORS} from './colors';
import {FONTS} from './fonts';

const fontConfig = {
  default: {
    regular: {
      fontFamily: FONTS.REGULAR,
      fontWeight: 'normal'
    },
    medium: {
      fontFamily: FONTS.BOLD,
      fontWeight: 'normal'
    },
    light: {
      fontFamily: FONTS.LIGHT,
      fontWeight: 'normal'
    },
    thin: {
      fontFamily: FONTS.SEMI_BOLD,
      fontWeight: 'normal'
    }
  }
};

export const THEME: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.WHITE,
    accent: COLORS.BLACK,
    background: COLORS.WHITE
  },
  fonts: configureFonts(fontConfig)
};
