// @flow

import React from 'react';

import {COLORS} from '../../../utils/colors';
import {
  ServiceAttributeContainer,
  ServiceAttributeDescription,
  DotDivider
} from './components/section_service_attribute_component';

/**
 * Service Attribute
 * @param {String} label1 - label left side (required)
 * @param {String} label2 - label right side (required)
 * @param {Number} marginTop - customization margin-top (optional)
 */

type ServiceComponent = {
  label1: string,
  label2: string,
  marginTop?: number,
  hideDot?: boolean
};

const ServiceAttribute = (props: ServiceComponent) => {
  const {label1, label2, marginTop, hideDot = false} = props;
  return (
    <ServiceAttributeContainer marginTop={marginTop}>
      <ServiceAttributeDescription color={COLORS.DARK_GRAY}>
        {label1}
      </ServiceAttributeDescription>
      {!hideDot && <DotDivider color={COLORS.DARK_GRAY} />}
      <ServiceAttributeDescription color={COLORS.DARK_GRAY}>
        {label2}
      </ServiceAttributeDescription>
    </ServiceAttributeContainer>
  );
};

export {ServiceAttribute};
