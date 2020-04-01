// @flow

import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../../utils/colors';
import {WIDTH} from '../../../utils/helpers';
import {
  ServiceAttribute,
  TitleSection
} from '../../../components/section/component_section';
import {MATERIALCOMMUNITY_ICONS} from '../../../utils/icons';
import IconButton from '../../../components/icon_button/component_icon_button';

const BookmarkItemContainer = styled.View`
  flex-direction: row;
  width: ${props => props.width - 32}px;
  height: 80px;
  margin: 12px 16px;
  margin-bottom: ${props => (props.isLast ? 30 : 12)}px;
`;

const Thumbnail = styled.Image`
  background-color: ${props => props.backgroundColor};
  resize-mode: cover;
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

const BookmarkAttribute = styled.View`
  flex: 1;
  justify-content: space-between;
  padding-left: 16px;
  padding-bottom: 8px;
`;

const ContainerOption = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
`;

type ItemList = {
  title: string,
  date: string,
  likes: string
};

type ScreenComponent = {
  item: ItemList,
  isLast: boolean
};

const BookmarkItem = ({item, isLast}: ScreenComponent) => {
  const {title, date, likes} = item;
  return (
    <BookmarkItemContainer width={WIDTH} isLast={isLast}>
      <Thumbnail backgroundColor={COLORS.VERY_LIGHT_GRAY} />
      <BookmarkAttribute>
        <ContainerOption>
          <IconButton
            length={28}
            iconName={MATERIALCOMMUNITY_ICONS.DOTS_HORIZONTAL}
            backgroundColor={COLORS.WHITE}
            colorIcon={COLORS.BLACK}
            sizeIcon={20}
            borderRadius={0}
          />
        </ContainerOption>
        <ServiceAttribute marginTop={6} label1={date} label2={likes} />
        <TitleSection text={title} numberOfLines={2} />
      </BookmarkAttribute>
    </BookmarkItemContainer>
  );
};

export default BookmarkItem;
