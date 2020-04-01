//@flow

import styled from 'styled-components';
import {Button} from 'react-native-paper';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.background};
`;

const ButtonSignIn = styled(Button)`
  background: ${props => props.theme.secondary};
  color: ${props => props.theme.text};
`;

export {Container, ButtonSignIn};
