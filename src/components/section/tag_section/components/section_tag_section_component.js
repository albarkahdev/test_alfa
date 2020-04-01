// @flow

import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import {Theme} from 'react-native-paper';

import {COLORS} from '../../../../utils/colors';
import {rh, rw} from '../../../../utils/responsive';
import {Body2} from '../../../typography/component_typography_bodies';

/**
 * Tag Section Container
 */

const TagSectionContainer = styled(View)`
  flex-direction: row;
  padding-top: ${rh(14)}px;
`;

/**
 * Tag Attribute Component
 */

const TagAttributeComponent = styled(View)`
  background: ${props => props.theme.backgroundImage};
  height: ${rh(27)}px;
  padding: ${rh(4)}px ${rw(12)}px;
  margin-right: ${rw(8)}px;
`;

/**
 * Tag Attribute
 * @param {Object} fonts - fonts theme (required)
 * @param {String} name - name tag (required)
 */

type TagAttributeType = {
  fonts: Theme,
  name: string
};

const TagAttribute = ({fonts, name}: TagAttributeType) => {
  return (
    <TagAttributeComponent>
      <Body2 style={{color: COLORS.DARK_GRAY}}>{name}</Body2>
    </TagAttributeComponent>
  );
};

export {TagSectionContainer, TagAttribute};
