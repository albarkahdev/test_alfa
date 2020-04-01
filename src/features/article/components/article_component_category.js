// @flow

import {TouchableOpacity, View, Text} from 'react-native';
import styled from 'styled-components';

const CategoryButton = styled(TouchableOpacity)``;

const CategoryItem = styled(View)`
  flex-direction: row;
  margin: 28px 12px;
  margin-left: ${props => (props.isFirstItem ? 72 : 12)}px;
`;

const CategoryText = styled(Text)`
  font-family: ${props => props.fontFamily};
  font-style: normal;
  font-size: ${props => (props.IsSelected ? 20 : 16)}px;
  line-height: 24px;
  text-align: center;
  color: ${props => props.color};
`;

export {CategoryButton, CategoryItem, CategoryText};
