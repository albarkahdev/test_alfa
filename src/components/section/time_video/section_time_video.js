// @flow

import React from 'react';

import {COLORS} from '../../../utils/colors';
import {TimeContainer} from './components/section_time_video_component';
import {Caption1} from '../../typography/component_typography_captions';

/**
 * Time Indicator
 * @param {String} time - text time (required)
 */

const TimeIndicator = ({time}: {time: string}) => {
  return (
    <TimeContainer backgroundColor={COLORS.VERY_DARK_GRAY}>
      <Caption1 style={{color: COLORS.WHITE}}>{time}</Caption1>
    </TimeContainer>
  );
};

export {TimeIndicator};
