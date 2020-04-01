// @flow

import React, {useContext} from 'react';
import {View} from 'react-native';
import styled, {ThemeContext} from 'styled-components';
import {TouchableRipple} from 'react-native-paper';

import {rh, rw} from '../../../../utils/responsive';
import {Subtitle2} from '../../../typography/component_typography_subtitles';

const Container = styled(View)`
  background: ${props => props.theme.backgroundCard};
  padding-top: ${props => rh(props.paddingTop)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ContainerActionIcon = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`;

const ContainerActionText = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const IconSmall = styled(View)`
  margin-right: ${props => rw(props.marginRight ? 8 : 0)}px;
`;

const ActionText = styled(TouchableRipple)`
  min-width: ${rw(60)}px;
  margin-left: ${props => rw(props.marginLeft ? 16 : 0)}px;
`;

type ActionTextType = {
  text?: string,
  marginLeft?: boolean
};

const ActionTextComponent = (props: ActionTextType) => {
  const {text, marginLeft} = props;
  const theme = useContext(ThemeContext);

  if (!text) {
    return null;
  }
  return (
    <ActionText marginLeft={marginLeft} onPress={() => null}>
      <Subtitle2 style={{color: theme.secondary}}>
        {text.toUpperCase()}
      </Subtitle2>
    </ActionText>
  );
};

export {
  Container,
  ContainerActionIcon,
  ContainerActionText,
  IconSmall,
  ActionText,
  ActionTextComponent
};
