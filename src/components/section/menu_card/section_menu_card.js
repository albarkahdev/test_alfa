/**
 * Menu Card Follow and Report
 * @param {Function} onFollow - action follow (required)
 * @param {Function} onReport - action report (required)
 *
 * @format
 * @flow
 */

import React from 'react';

import {
  Container,
  ActionMenuCard,
  ActionNameCard
} from './components/section_menu_card_component';

type ScreenComponent = {
  onFollow: Function,
  onReport: Function
};

const MenuCard = (props: ScreenComponent) => {
  const {onFollow, onReport} = props;
  return (
    <Container>
      <ActionMenuCard onPress={onFollow}>
        <ActionNameCard>Follow topic</ActionNameCard>
      </ActionMenuCard>
      <ActionMenuCard onPress={onReport}>
        <ActionNameCard>Report</ActionNameCard>
      </ActionMenuCard>
    </Container>
  );
};

export {MenuCard};
