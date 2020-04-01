// @flow

import {StyleSheet} from 'react-native';

import {COLORS} from '../../../utils/colors';

export const styles = StyleSheet.create({
  pagination_dot: {
    bottom: 0
  },
  active_dot: {
    width: 6,
    height: 6,
    backgroundColor: COLORS.BLACK
  },
  inactive_dot: {
    width: 6,
    height: 6,
    backgroundColor: COLORS.LIGHT_GRAY
  }
});
