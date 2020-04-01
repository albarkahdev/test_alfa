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
  TopLeft,
  CenterCenter,
  CardContent,
  Row,
  AttributeCard
} from '../components/super_card_component_listing';

const width = 328;
const widthCover = 110;
const height = 110;

type Source = {
  uri: string
};

type Tag = {
  name: string
};

type Props = {
  isBannerService?: boolean,
  isDonationService?: boolean,
  elevation?: number,
  borderRadius?: number,
  isVideoBanner?: boolean,
  source?: Source | string,
  iconBanner1?: React$Node,
  centerBanner?: React$Node,
  category?: string,
  title?: string,
  description?: string,
  leftDescription?: string,
  rightDescription?: string,
  progressDonation?: number,
  attributeLeftDonation?: string,
  valueRightDonation?: string,
  tags?: Array<Tag>,
  iconAction1?: React$Node,
  iconAction2?: React$Node,
  action1?: string,
  action2?: string,
  paddingBottom: number
};

const Cover = props => {
  const {
    isBannerService,
    borderRadius,
    isVideoBanner,
    source,
    iconBanner1,
    centerBanner,
    category
  } = props;
  const isBannerMaskedGradient =
    iconBanner1 !== undefined || category !== undefined ? true : false;
  const borderRightRadius = isBannerService === true ? borderRadius : 0;
  if (source === undefined) {
    return null;
  }
  return (
    <CardCover width={widthCover} height={height}>
      <BannerSuperCard
        isVideoBanner={isVideoBanner}
        maskedGradient={isBannerMaskedGradient}
        borderLeftRadius={borderRadius}
        borderRightRadius={borderRightRadius}
        source={source}
        centerCenter={<CenterCenter>{centerBanner}</CenterCenter>}
        topLeft={
          <TopLeft minWidth={width - 12}>
            {category && <CategoryTag text={category} />}
            {iconBanner1}
          </TopLeft>
        }
      />
    </CardCover>
  );
};

const Content = props => {
  const {
    isDonationService,
    isBannerService,
    title,
    description,
    leftDescription,
    rightDescription,
    progressDonation,
    attributeLeftDonation,
    valueRightDonation,
    tags,
    iconAction1,
    iconAction2,
    action1,
    action2,
    paddingBottom
  } = props;
  const paddingTopTitle = isDonationService ? 10 : 12;
  const paddingTopDescription = isDonationService ? 3 : 4;
  const paddingTopDonation = isDonationService ? 11 : 14;
  if (isBannerService) {
    return null;
  }
  return (
    <CardContent width={width - widthCover} paddingBottom={paddingBottom}>
      <AttributeCard>
        <TitleSection
          numberOfLines={1}
          paddingTop={paddingTopTitle}
          text={title}
        />
        <DescriptionSection
          paddingTop={paddingTopDescription}
          numberOfLines={1}
          text={description}
        />
        {isDonationService && (
          <AdditionalAttributeSection
            text1={leftDescription}
            text2={rightDescription}
          />
        )}
      </AttributeCard>
      <AttributeCard>
        {!isDonationService && (
          <AdditionalAttributeSection
            text1={leftDescription}
            text2={rightDescription}
          />
        )}
        <TagSection tags={tags} />
        <ClickToActionSection
          icon1={iconAction1}
          icon2={iconAction2}
          action1={action1}
          action2={action2}
        />
      </AttributeCard>
    </CardContent>
  );
};

const SuperCardFullWidthListing_1_2 = (props: Props) => {
  const {
    isDonationService = false,
    isBannerService = false,
    elevation = 3,
    borderRadius = 8,
    isVideoBanner,
    source,
    iconBanner1,
    centerBanner,
    category,
    title,
    description,
    leftDescription,
    rightDescription,
    progressDonation,
    attributeLeftDonation,
    valueRightDonation,
    tags,
    iconAction1,
    iconAction2,
    action1,
    action2,
    paddingBottom
  } = props;
  const widthCard = isBannerService ? widthCover : width;
  return (
    <CardContainer
      width={widthCard}
      elevation={elevation}
      borderRadius={borderRadius}>
      <Row>
        <Cover
          isBannerService={isBannerService}
          borderRadius={borderRadius}
          isVideoBanner={isVideoBanner}
          source={source}
          iconBanner1={iconBanner1}
          centerBanner={centerBanner}
          category={category}
        />
        <Content
          isDonationService={isDonationService}
          isBannerService={isBannerService}
          title={title}
          description={description}
          leftDescription={leftDescription}
          rightDescription={rightDescription}
          progressDonation={progressDonation}
          attributeLeftDonation={attributeLeftDonation}
          valueRightDonation={valueRightDonation}
          tags={tags}
          iconAction1={iconAction1}
          iconAction2={iconAction2}
          action1={action1}
          action2={action2}
          paddingBottom={paddingBottom}
        />
      </Row>
    </CardContainer>
  );
};

export default SuperCardFullWidthListing_1_2;
