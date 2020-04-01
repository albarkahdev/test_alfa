// @flow

import React, {useContext} from 'react';
import {View} from 'react-native';
import styled, {ThemeContext} from 'styled-components';

import {COLORS} from '../../../utils/colors';
import {rw, rh} from '../../../utils/responsive';
import {MATERIALCOMMUNITY_ICONS} from '../../../utils/icons';
import IconButton from '../../../components/icon_button/component_icon_button';
import SuperCardFullWidthArticle from '../../../components/super_card/card-based_full-width/super_card_full-width_article';

const tagsSample = [{name: 'tag-one'}, {name: 'tag-two'}, {name: '+4 more'}];
const imgArticle =
  'https://image.freepik.com/free-vector/blogger-creative-writing_41910-289.jpg';

const ContainerSuperCard = styled(View)`
  padding: ${rh(6)}px ${rw(16)}px;
`;

const ArticleItem = ({item}) => {
  const theme = useContext(ThemeContext);
  const {title, description, category, cover, tags} = item;

  return (
    <ContainerSuperCard>
      <SuperCardFullWidthArticle
        elevation={3}
        borderRadius={8}
        source={{uri: cover}}
        iconBanner2={
          <IconButton
            length={24}
            iconName={MATERIALCOMMUNITY_ICONS.DOTS_HORIZONTAL}
            backgroundColor={COLORS.TRANSPARENT_BLACK}
            colorIcon={theme.secondary}
            sizeIcon={24}
            borderRadius={0}
          />
        }
        category={category}
        title={title}
        description={description}
        tags={tags}
      />
    </ContainerSuperCard>
  );
};

export default ArticleItem;
