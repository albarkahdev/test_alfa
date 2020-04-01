// @flow

import {StyleSheet} from 'react-native';

import {COLORS} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 250,
    marginLeft: 3,
    backgroundColor: COLORS.ALIZARIN,
    justifyContent: 'center',
    alignItems: 'center'
  },
  styleCover: {height: 156},
  styleContent: {paddingLeft: 12, paddingRight: 0}
});
