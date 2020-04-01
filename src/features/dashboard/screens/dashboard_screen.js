// @flow

import React, {useContext} from 'react';
import {View, Image} from 'react-native';
import {ThemeContext} from 'styled-components';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './dashboard_screen_styles';
import {COLORS} from '../../../utils/colors';
import {ROUTE_NAME} from '../../../routes/route';
import {MATERIALCOMMUNITY_ICONS, ASSETS_ICON} from '../../../utils/icons';
import {HomeHeader} from '../../home/components/home_component_header';
import {Header6} from '../../../components/typography/component_typography_headers';
import {Caption4} from '../../../components/typography/component_typography_captions';
import IconButton from '../../../components/icon_button/component_icon_button';
import HomeScreen from '../../home/screens/home_screen_container';
import EventScreen from '../../event/screens/event_screen';
import ArticleScreen from '../../article/screens/article_screen_container';
import ProfileScreen from '../../profile/screens/profile_container';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ListDashboardTabStack = {
  HOME: () => {
    const theme = useContext(ThemeContext);

    return (
      <Stack.Navigator headerMode="screen">
        <Stack.Screen
          name={ROUTE_NAME.HOME}
          component={HomeScreen}
          options={{
            headerTitle: props => <HomeHeader {...props} />,
            headerStyle: {
              backgroundColor: theme.secondary,
              height: 80
            }
          }}
        />
      </Stack.Navigator>
    );
  },
  ARTICLE: () => {
    const theme = useContext(ThemeContext);

    return (
      <Stack.Navigator headerMode="screen">
        <Stack.Screen
          name={ROUTE_NAME.ARTICLE}
          component={ArticleScreen}
          options={{
            headerTitle: props => (
              <Header6 style={{color: theme.backgroundImage}} {...props} />
            ),
            headerRight: () => (
              <IconButton
                length={44}
                iconName={MATERIALCOMMUNITY_ICONS.BOOKMARK_MULTIPLE}
                backgroundColor={theme.secondary}
                colorIcon={theme.backgroundImage}
                sizeIcon={20}
                borderRadius={0}
              />
            ),
            headerStyle: {
              backgroundColor: theme.secondary
            }
          }}
        />
      </Stack.Navigator>
    );
  },
  EVENT: () => {
    const theme = useContext(ThemeContext);

    return (
      <Stack.Navigator headerMode="screen">
        <Stack.Screen
          name={ROUTE_NAME.EVENT}
          component={EventScreen}
          options={{
            headerTitle: props => (
              <Header6 style={{color: theme.backgroundImage}} {...props} />
            ),
            headerRight: () => (
              <View style={styles.right_header}>
                <IconButton
                  length={44}
                  iconName={MATERIALCOMMUNITY_ICONS.MAGNIFY}
                  backgroundColor={theme.secondary}
                  colorIcon={theme.backgroundImage}
                  sizeIcon={20}
                  borderRadius={0}
                />
                <IconButton
                  length={44}
                  iconName={MATERIALCOMMUNITY_ICONS.HISTORY}
                  backgroundColor={theme.secondary}
                  colorIcon={theme.backgroundImage}
                  sizeIcon={20}
                  borderRadius={0}
                />
              </View>
            ),
            headerStyle: {
              backgroundColor: theme.secondary
            }
          }}
        />
      </Stack.Navigator>
    );
  },
  PROFILE: () => (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name={ROUTE_NAME.PROFILE}
        component={ProfileScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
};

const DashboardScreen = () => {
  const theme = useContext(ThemeContext);

  return (
    <Tab.Navigator
      initialRouteName={ROUTE_NAME.HOME}
      tabBarOptions={{
        activeTintColor: theme.secondary,
        inactiveTintColor: COLORS.GRAY,
        style: {backgroundColor: theme.backgroundCard}
      }}>
      <Tab.Screen
        name={ROUTE_NAME.HOME}
        component={ListDashboardTabStack.HOME}
        options={{
          tabBarLabel: ({color, size}) => (
            <Caption4 color={color}>{ROUTE_NAME.HOME}</Caption4>
          ),
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name={MATERIALCOMMUNITY_ICONS.HOME}
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name={ROUTE_NAME.ARTICLE}
        component={ListDashboardTabStack.ARTICLE}
        options={{
          tabBarLabel: ({color, size}) => (
            <Caption4 color={color}>{ROUTE_NAME.ARTICLE}</Caption4>
          ),
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name={MATERIALCOMMUNITY_ICONS.BOOK_OPEN}
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name={ROUTE_NAME.EVENT}
        component={ListDashboardTabStack.EVENT}
        options={{
          tabBarLabel: ({color, size}) => (
            <Caption4 color={color}>{ROUTE_NAME.EVENT}</Caption4>
          ),
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name={MATERIALCOMMUNITY_ICONS.CALENDER}
              color={color}
              size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name={ROUTE_NAME.PROFILE}
        component={ListDashboardTabStack.PROFILE}
        options={{
          tabBarLabel: ({color, size}) => (
            <Caption4 color={color}>{ROUTE_NAME.PROFILE}</Caption4>
          ),
          tabBarIcon: ({color, size}) => (
            <Image style={styles.icon_tab} source={ASSETS_ICON.ICON_USER} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardScreen;
