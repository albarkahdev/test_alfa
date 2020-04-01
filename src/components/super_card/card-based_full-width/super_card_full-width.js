// @flow

import React from 'react';

import {
  BannerSuperCard,
  TitleSection,
  CategoryTag,
  DescriptionSection,
  AdditionalAttributeSection,
  TagSection,
  ClickToActionSection
} from '../../section/component_section';
import {
  CardContainer,
  CardCover,
  TopRight,
  CenterCenter,
  BottomLeft,
  CardContent,
  IconBanner
} from '../components/super_card_component';

const width = 328;
const height = 185;

type Source = {
  uri: string
};

type Tag = {
  name: string
};

const Cover = props => {
  const {
    isBannerService,
    borderRadius,
    isVideoBanner,
    source,
    iconBanner1,
    iconBanner2,
    centerBanner,
    category
  } = props;
  const isBannerMaskedGradient =
    iconBanner1 !== undefined || iconBanner2 !== undefined ? true : false;
  if (source === undefined) {
    return null;
  }
  return (
    <CardCover height={height}>
      <BannerSuperCard
        isBannerService={isBannerService}
        isVideoBanner={isVideoBanner}
        maskedGradient={isBannerMaskedGradient}
        borderTopRadius={borderRadius}
        source={source}
        topRight={
          <TopRight>
            <IconBanner marginRight>{iconBanner1}</IconBanner>
            <IconBanner>{iconBanner2}</IconBanner>
          </TopRight>
        }
        centerCenter={<CenterCenter>{centerBanner}</CenterCenter>}
        bottomLeft={
          <BottomLeft minWidth={width - 12}>
            <CategoryTag text={category} />
          </BottomLeft>
        }
      />
    </CardCover>
  );
};

const Content = props => {
  const {
    isBannerService,
    title,
    description,
    leftDescription,
    rightDescription,
    progressDonation,
    attributeLeftDonation,
    attributeRightDonation,
    valueLeftDonation,
    valueRightDonation,
    tags,
    iconAction1,
    iconAction2,
    action1,
    action2
  } = props;
  if (isBannerService) {
    return null;
  }
  return (
    <CardContent>
      <TitleSection numberOfLines={1} paddingTop={12} text={title} />
      <DescriptionSection numberOfLines={1} text={description} />
      <AdditionalAttributeSection
        text1={leftDescription}
        text2={rightDescription}
      />
      <TagSection tags={tags} />
      <ClickToActionSection
        icon1={iconAction1}
        icon2={iconAction2}
        action1={action1}
        action2={action2}
      />
    </CardContent>
  );
};

type Props = {
  isBannerService?: boolean,
  elevation?: number,
  borderRadius?: number,
  isVideoBanner?: boolean,
  source?: Source | string,
  iconBanner1?: React$Node,
  iconBanner2?: React$Node,
  centerBanner?: React$Node,
  category?: string,
  title?: string,
  description?: string,
  leftDescription?: string,
  rightDescription?: string,
  progressDonation?: number,
  attributeLeftDonation?: string,
  attributeRightDonation?: string,
  valueLeftDonation?: string,
  valueRightDonation?: string,
  tags?: Array<Tag>,
  iconAction1?: React$Node,
  iconAction2?: React$Node,
  action1?: string,
  action2?: string
};

const SuperCardFullWidth = (props: Props) => {
  const {
    isBannerService = false,
    elevation = 3,
    borderRadius = 8,
    isVideoBanner,
    source,
    iconBanner1,
    iconBanner2,
    centerBanner,
    category,
    title,
    description,
    leftDescription,
    rightDescription,
    progressDonation,
    attributeLeftDonation,
    attributeRightDonation,
    valueLeftDonation,
    valueRightDonation,
    tags,
    iconAction1,
    iconAction2,
    action1,
    action2
  } = props;
  return (
    <CardContainer
      width={width}
      elevation={elevation}
      borderRadius={borderRadius}>
      <Cover
        isBannerService={isBannerService}
        borderRadius={borderRadius}
        isVideoBanner={isVideoBanner}
        source={source}
        iconBanner1={iconBanner1}
        iconBanner2={iconBanner2}
        centerBanner={centerBanner}
        category={category}
      />
      <Content
        isBannerService={isBannerService}
        title={title}
        description={description}
        leftDescription={leftDescription}
        rightDescription={rightDescription}
        progressDonation={progressDonation}
        attributeLeftDonation={attributeLeftDonation}
        attributeRightDonation={attributeRightDonation}
        valueLeftDonation={valueLeftDonation}
        valueRightDonation={valueRightDonation}
        tags={tags}
        iconAction1={iconAction1}
        iconAction2={iconAction2}
        action1={action1}
        action2={action2}
      />
    </CardContainer>
  );
};

export default SuperCardFullWidth;
