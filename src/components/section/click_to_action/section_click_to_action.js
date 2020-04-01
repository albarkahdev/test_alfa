// @flow

import React from 'react';
import {StyleProp} from 'react-native';

import {COLORS} from '../../../utils/colors';
import {
  Container,
  ContainerActionIcon,
  ContainerActionText,
  IconSmall,
  ActionTextComponent
} from './components/section_click_to_action_component';

type ClickToActionType = {
  paddingTop?: number,
  icon1?: React$Node,
  icon2?: React$Node,
  action1?: string,
  action2?: string,
  style?: StyleProp
};

const ClickToActionSection = (props: ClickToActionType) => {
  const {icon1, icon2, action1, action2, paddingTop = 16, style} = props;
  const nothingPassed =
    icon1 === undefined &&
    icon2 === undefined &&
    action1 === undefined &&
    action2 === undefined;
  if (nothingPassed) {
    return null;
  }
  return (
    <Container paddingTop={paddingTop} style={style}>
      <ContainerActionIcon>
        <IconSmall marginRight>{icon1}</IconSmall>
        <IconSmall>{icon2}</IconSmall>
      </ContainerActionIcon>
      <ContainerActionText>
        <ActionTextComponent text={action1} />
        <ActionTextComponent marginLeft text={action2} />
      </ContainerActionText>
    </Container>
  );
};

export {ClickToActionSection};
