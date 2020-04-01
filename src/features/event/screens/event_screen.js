// @flow

import React from 'react';
import styled from 'styled-components';

import EventItem from '../components/event_component_item';
import event from '../../../dummy/event.json';

const Container = styled.ScrollView`
  flex: 1;
  background: ${props => props.theme.background};
  padding: 16px 8px;
`;

const WrapperFeature = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 16px;
`;

export default () => {
  return (
    <Container>
      <WrapperFeature>
        {event.list.map((item, i) => (
          <EventItem key={i} item={item} />
        ))}
      </WrapperFeature>
    </Container>
  );
};
