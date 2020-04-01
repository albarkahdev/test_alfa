/**
 * Section
 * @param {String} text - text section (required)
 * @param {Number} padding - padding section (optional)
 * @param {Number} paddingTop - padding top section (optional)
 * @param {Number} paddingRight - padding right section (optional)
 * @param {Number} paddingBottom - padding bottom section (optional)
 * @param {Number} paddingLeft - padding left section (optional)
 * @param {Number} borderTopRadius - border top radius section (optional)
 * @param {StyleProp} style - custom style container (optional)
 *
 * @format
 * @flow
 */

import React, {useContext} from 'react';
import {View} from 'react-native';
import {StyleProp} from 'react-native';
import styled, {ThemeContext} from 'styled-components';

import {rh, rw, rbr} from '../../utils/responsive';
import {COLORS} from '../../utils/colors';
import {Body2} from '../typography/component_typography_bodies';
import {Subtitle1} from '../typography/component_typography_subtitles';
import {Caption1} from '../typography/component_typography_captions';
import {ServiceAttribute} from './service_attribute/section_service_attribute';
import {TagSection} from './tag_section/section_tag_section';
import {TimeIndicator} from './time_video/section_time_video';
import {BannerSuperCard} from './cover_box/section_cover_box';
import {ClickToActionSection} from './click_to_action/section_click_to_action';

const Container = styled(View)`
  background: ${props => props.theme.backgroundCard};
  border-top-left-radius: ${props =>
    rbr(props.borderRadius || props.borderTopLeftRadius || 0)}px;
  border-top-right-radius: ${props =>
    rbr(props.borderRadius || props.borderTopRightRadius || 0)}px;
  border-bottom-left-radius: ${props =>
    rbr(props.borderRadius || props.borderBottomLeftRadius || 0)}px;
  border-bottom-right-radius: ${props =>
    rbr(props.borderRadius || props.borderBottomRightRadius || 0)}px;
  /* background-color: ${props => props.backgroundColor}; */
  padding-top: ${props => rh(props.padding || props.paddingTop || 0)}px;
  padding-right: ${props => rw(props.padding || props.paddingRight || 0)}px;
  padding-bottom: ${props => rh(props.padding || props.paddingBottom || 0)}px;
  padding-left: ${props => rw(props.padding || props.paddingLeft || 0)}px;
`;

const ContainerAdditionalAttribute = styled(Container)`
  flex-direction: row;
  justify-content: space-between;
`;

type ComponentType = {
  numberOfLines?: number,
  padding?: number,
  paddingTop?: number,
  paddingRight?: number,
  paddingBottom?: number,
  paddingLeft?: number,
  borderTopRadius?: number,
  style?: StyleProp
};
type OneComponentType = ComponentType & {
  text?: string
};

type TwoComponentType = ComponentType & {
  text1?: string,
  text2?: string
};

const CategoryTag = (props: OneComponentType) => {
  const {text, borderTopRadius, paddingTop, style} = props;
  const padding = paddingTop !== undefined ? null : 8;
  const theme = useContext(ThemeContext);

  if (!text) {
    return null;
  }
  return (
    <Container
      borderTopLeftRadius={borderTopRadius}
      borderTopRightRadius={borderTopRadius}
      padding={padding}
      paddingTop={paddingTop}
      backgroundColor={COLORS.WHITE}
      style={style}>
      <Caption1 style={{color: theme.text}} {...props}>
        {text.toUpperCase()}
      </Caption1>
    </Container>
  );
};

const TitleSection = (props: OneComponentType) => {
  const {text, paddingTop = 8, style} = props;
  const theme = useContext(ThemeContext);

  if (!text) {
    return null;
  }
  return (
    <Container
      paddingTop={paddingTop}
      style={style}
      backgroundColor={COLORS.WHITE}>
      <Subtitle1 style={{color: theme.text}} {...props}>
        {text}
      </Subtitle1>
    </Container>
  );
};

const DescriptionSection = (props: OneComponentType) => {
  const {text, paddingTop = 8, style} = props;
  const theme = useContext(ThemeContext);

  if (!text) {
    return null;
  }
  return (
    <Container
      paddingTop={paddingTop}
      style={style}
      backgroundColor={COLORS.WHITE}>
      <Body2 style={{color: theme.text}} {...props}>
        {text}
      </Body2>
    </Container>
  );
};

const AdditionalAttributeSection = (props: TwoComponentType) => {
  const {text1, text2, style} = props;
  if (!text1 && !text2) {
    return null;
  }
  return (
    <ContainerAdditionalAttribute
      paddingTop={8}
      style={style}
      backgroundColor={COLORS.WHITE}>
      {text1 && (
        <Caption1 style={{color: COLORS.DARK_GRAY}} {...props}>
          {text1}
        </Caption1>
      )}
      {text2 && (
        <Caption1 style={{color: COLORS.DARK_GRAY}} {...props}>
          {text2}
        </Caption1>
      )}
    </ContainerAdditionalAttribute>
  );
};

export {
  CategoryTag,
  TitleSection,
  DescriptionSection,
  ServiceAttribute,
  TagSection,
  TimeIndicator,
  BannerSuperCard,
  AdditionalAttributeSection,
  ClickToActionSection
};
