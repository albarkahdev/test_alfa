// @flow

import {combineReducers} from 'redux';

import {article_store} from '../features/article/article_reducer';
import {auth_store} from '../features/auth/auth_reducer';
import {banner_store} from '../features/banner/banner_reducer';
import {dashboard_store} from '../features/dashboard/dashboard_reducer';
import {event_store} from '../features/event/event_reducer';
import {home_store} from '../features/home/home_reducer';
import {profile_store} from '../features/profile/profile_reducer';

export default combineReducers({
  article_store,
  auth_store,
  banner_store,
  dashboard_store,
  event_store,
  home_store,
  profile_store
});
