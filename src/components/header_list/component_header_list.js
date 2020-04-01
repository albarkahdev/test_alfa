/**
 * Header List
 * @param {String} title - title list (required)
 * @param {Function} onShowAll - show all list (optional)
 *
 * @format
 * @flow
 */

import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {TouchableRipple} from 'react-native-paper';

import {COLORS} from '../../utils/colors';
import {Header6} from '../typography/component_typography_headers';
import {Subtitle2} from '../typography/component_typography_subtitles';
import {Container} from './component/header_list_component_container';

type Component = {
  title: string,
  onShowAll?: Function
};

const HeaderList = ({title, onShowAll}: Component) => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <Header6 style={{color: theme?.secondary}}>{title}</Header6>
      <TouchableRipple onPress={onShowAll}>
        <Subtitle2 style={{color: theme?.third}}>See all</Subtitle2>
      </TouchableRipple>
    </Container>
  );
};

export default HeaderList;
