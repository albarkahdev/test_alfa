// @flow

import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';

import {COLORS} from '../../../utils/colors';
import {rw, rh} from '../../../utils/responsive';
import {MATERIALCOMMUNITY_ICONS} from '../../../utils/icons';
import IconButton from '../../../components/icon_button/component_icon_button';
import SuperCardHalfWidthMultiMedia from '../../../components/super_card/card-based_half-width/super_card_half-width_multimedia';

const tagsSample = [{name: 'tag-one'}];
const imgMultimedia =
  'https://image.freepik.com/free-photo/live-concert-popular-russian-rap-singer-basta_118086-1412.jpg';

const ContainerSuperCard = styled.View`
  padding-left: ${props => rw(props.paddingLeft)}px;
  padding-right: ${props => rw(props.paddingRight)}px;
  padding-bottom: ${rh(12)}px;
`;

const EventItem = ({islist}: {islist?: boolean}) => {
  const paddingLeft = islist ? 14 : 8;
  const paddingRight = islist ? 2 : 8;
  const theme = useContext(ThemeContext);

  return (
    <ContainerSuperCard paddingLeft={paddingLeft} paddingRight={paddingRight}>
      <SuperCardHalfWidthMultiMedia
        elevation={3}
        borderRadius={8}
        source={{uri: imgMultimedia}}
        centerBanner={
          <IconButton
            length={64}
            iconName={MATERIALCOMMUNITY_ICONS.PLAY_CIRCLE}
            backgroundColor={COLORS.TRANSPARENT_BLACK}
            colorIcon={COLORS.WHITE}
            sizeIcon={56}
            borderRadius={28}
          />
        }
        title="Type the Title Here"
        description="Type the description here. Height adjustable"
        leftDescription="Attribute 1"
        tags={tagsSample}
        iconAction1={
          <IconButton
            length={24}
            iconName={MATERIALCOMMUNITY_ICONS.HEART}
            backgroundColor={COLORS.TRANSPARENT_BLACK}
            colorIcon={theme.secondary}
            sizeIcon={24}
            borderRadius={0}
          />
        }
        action1="Action 5"
      />
    </ContainerSuperCard>
  );
};

export default EventItem;
