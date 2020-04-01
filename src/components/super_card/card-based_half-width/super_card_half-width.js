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

const width = 156;
const height = 156;

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
    progressDonation,
    attributeLeftDonation,
    valueLeftDonation,
    tags,
    iconAction1,
    action1
  } = props;
  if (isBannerService) {
    return null;
  }
  return (
    <CardContent>
      <TitleSection numberOfLines={1} paddingTop={12} text={title} />
      <DescriptionSection numberOfLines={1} text={description} />
      <AdditionalAttributeSection text1={leftDescription} />
      <TagSection tags={tags} />
      <ClickToActionSection icon1={iconAction1} action1={action1} />
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
  progressDonation?: number,
  attributeLeftDonation?: string,
  valueLeftDonation?: string,
  tags?: Array<Tag>,
  iconAction1?: React$Node,
  action1?: string
};

const SuperCardHalfWidth = (props: Props) => {
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
    progressDonation,
    attributeLeftDonation,
    valueLeftDonation,
    tags,
    iconAction1,
    action1
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
        progressDonation={progressDonation}
        attributeLeftDonation={attributeLeftDonation}
        valueLeftDonation={valueLeftDonation}
        tags={tags}
        iconAction1={iconAction1}
        action1={action1}
      />
    </CardContainer>
  );
};

export default SuperCardHalfWidth;
