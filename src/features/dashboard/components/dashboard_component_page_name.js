// @flow

import {Paragraph} from 'react-native-paper';
import styled from 'styled-components';

export const PageName = styled(Paragraph)`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: ${props => props.color};
`;
