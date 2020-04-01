// @flow

import React from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import events from '../../../dummy/event.json';
import {ROUTE_NAME} from '../../../routes/route';
import EventItem from './event_component_item';
import HeaderList from '../../../components/header_list/component_header_list';

export default () => {
  const navigation = useNavigation();
  const jumpTab = () => navigation.jumpTo(ROUTE_NAME.EVENT);

  return (
    <View>
      <HeaderList title="Event" onShowAll={jumpTab} />
      <FlatList
        data={events.list}
        renderItem={({item}) => <EventItem islist />}
        keyExtractor={(_, i) => i.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};
