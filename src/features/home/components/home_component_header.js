// @flow

import React from 'react';
import styled from 'styled-components';

import {WIDTH} from '../../../utils/helpers';
import {COLORS} from '../../../utils/colors';
import {IMAGES} from '../../../utils/images';

const Header = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.width - 32}px;
`;

const LogoHeader = styled.Image`
  width: 98px;
  height: 48px;
  margin: 51px 16px;
`;

const LeftHeader = styled.View`
  flex-direction: row;
`;

const RightHeader = styled.View`
  flex-direction: row;
`;

const IconHeader = styled.View`
  width: 24px;
  height: 24px;
  margin: 10px;
  border-radius: 8px;
  background-color: ${props => props.backgroundColor};
`;

const HomeHeader = () => {
  return (
    <Header width={WIDTH}>
      <LeftHeader>
        <IconHeader backgroundColor={COLORS.WHITE} />
        <IconHeader backgroundColor={COLORS.WHITE} />
      </LeftHeader>
      <LogoHeader source={IMAGES.LOGO_METEOR} />
      <RightHeader>
        <IconHeader backgroundColor={COLORS.WHITE} />
        <IconHeader backgroundColor={COLORS.WHITE} />
      </RightHeader>
    </Header>
  );
};

export {HomeHeader};
