/**
 * Icon Button Small
 * @param {String} iconName - icon name (required)
 * @param {Number} length - square side (required)
 * @param {Number} sizeIcon - icon size (required)
 * @param {String Color} backgroundColor - background color icon (required)
 * @param {String Color} colorIcon - icon color default black (optional)
 * @param {Number} borderRadius - border radius container (required)
 * @param {Function} onPress - on press function (optional)
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import {IconButton} from 'react-native-paper';
import styled from 'styled-components';

import {rw, rbr} from '../../utils/responsive';

const Container = styled(View)`
  width: ${props => rw(props.length)}px;
  height: ${props => rw(props.length)}px;
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => rbr(props.borderRadius)}px;
`;

const ContainerButton = styled(IconButton)`
  width: ${props => rw(props.length)}px;
  height: ${props => rw(props.length)}px;
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => rbr(props.borderRadius)}px;
  margin: 0px;
`;

type ScreenComponent = {
  iconName: string,
  length: number,
  sizeIcon: number,
  backgroundColor: string,
  colorIcon: string,
  borderRadius: number,
  onPress?: Function
};

const IconButtonComponent = ({
  iconName,
  length,
  sizeIcon,
  backgroundColor,
  colorIcon,
  borderRadius,
  onPress
}: ScreenComponent) => {
  const null_function = () => null;
  return (
    <Container
      length={length}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}>
      <ContainerButton
        length={length}
        backgroundColor={backgroundColor}
        color={colorIcon}
        icon={iconName}
        size={sizeIcon}
        borderRadius={borderRadius}
        onPress={onPress || null_function}
      />
    </Container>
  );
};

export default IconButtonComponent;
