// @flow

import React, {useContext} from 'react';
import {TouchableRipple, Switch} from 'react-native-paper';
import {ThemeContext} from 'styled-components';

import {
  Container,
  HeaderScreen,
  IconProfile,
  ContainerSuperCard,
  ContainerList
} from './profile_screen_styles';
import {WIDTH} from '../../../utils/helpers';
import {COLORS} from '../../../utils/colors';
import {ASSETS_ICON} from '../../../utils/icons';
import {BackgroundProfile} from '../components/profile_component_background';
import {Body1} from '../../../components/typography/component_typography_bodies';
import {SuperCardFullWidthListing_1_2_Article_1} from '../../../components/super_card/card-based_full-width-listing-1-2/card-based_full-width-listing-1-2_article';
import ThemeManager, { useTheme } from '../../../../contexts/ManageThemeContext';

type Screen = {
  signOut: Function
};

const Article_1 = () => {
  return (
    <ContainerSuperCard>
      <SuperCardFullWidthListing_1_2_Article_1
        elevation={3}
        borderRadius={8}
        source={ASSETS_ICON.ICON_USER}
        title="Username"
        description="user.email@mail.me"
      />
    </ContainerSuperCard>
  );
};

export default (props: Screen) => {
  const {signOut} = props;
  const signingOut = () => signOut();
  // Helper function => useContext(ManageThemeContext)
  const theme = useTheme();
  const themeContext = useContext(ThemeContext);

  const mode = theme.mode === 'dark' ? 'Dark Mode' : 'Light Mode';

  return (
    <Container>
      <BackgroundProfile width={WIDTH} />
      <HeaderScreen>
        <IconProfile source={ASSETS_ICON.ICON_USER} />
        <Body1 style={{color: COLORS.VERY_DARK_GRAY}}>My Profile</Body1>
      </HeaderScreen>
      <Article_1 />
      <TouchableRipple>
        <ContainerList>
          <Body1 style={{color: themeContext.text}}>{mode}</Body1>
          <Switch
            value={theme.mode === 'dark'}
            onValueChange={value => theme.setMode(value ? 'dark' : 'light')}
            color={themeContext.secondary}
          />
        </ContainerList>
      </TouchableRipple>
      <TouchableRipple onPress={signingOut}>
        <ContainerList>
          <Body1 style={{color: themeContext.text}}>Sign Out</Body1>
        </ContainerList>
      </TouchableRipple>
    </Container>
  );
};
