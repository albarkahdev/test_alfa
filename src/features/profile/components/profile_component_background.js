// @flow

import styled from 'styled-components';

export const BackgroundProfile = styled.View`
  position: absolute;
  width: ${props => props.width}px;
  height: 128px;
  background: ${props => props.theme.secondary};
  z-index: 0;
`;
