#!/usr/bin/env node

/**
 * OnboardingScreen/OnboardingScreen.js
 * @author [Jose Ramon Aleman](https://github.com/jraleman)
 */

// ~~ Dependencies ~~
import React from 'react';
import {
  ImageBackground,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import {
  Container,
  Content,
  H2,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  View
} from 'native-base';
// ~~ Local Dependencies ~~
import styles from './styles';
import { Images } from '../../Themes';

// ~~ Constants ~~
const BACKGROUND_OPACITY = 0.35;
const BACKGROUND_BLUR = 0.75;
const BACKGROUND_OVERLAY = '#121212';

/**
 * Container to render when DrawerNavigation is called.
 * @class DrawerNavigationContainer
 * @extends {React.Component}
 */
class DrawerNavigationContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      avatar: null,
      iconName: null,
      routeName: null
    };
    return;
  }
  /**
   * Renders the component.
   * @return {string} - RN markup for the component
   */
  render () {
    return (
      <React.Fragment>
        <StatusBar barStyle={ 'dark-content' } />
        <Container style={ { bottom: 0 } }>
          <Content
            bounces={ false }
            style={ styles.content }
          >
            <DrawerNavigationHeader
              avatarImg={ Images.drawerNavigationAvatar }
              backgroundImg={ Images.drawerNavigationCover }
              headerText={ 'Joe Doe' }
              onPress={ () => window.alert('Hello') }
            />
            <List
              style={{ height: 550 }}
              dataArray={ this.props.items }
              renderRow={ (item) =>
                <DrawerNavigationRow
                  item={ item }
                  nav={ this.props.navigation }
                />
              }
            />
            <DrawerNavigationFooter />
          </Content>
        </Container>
      </React.Fragment>
    );
  }
};

/**
 * SubContainer to render the drawer navigation header.
 * @const DrawerNavigationHeader
 */
const DrawerNavigationHeader = props => {
  return (
    <React.Fragment>
      <View style={ styles.container }>
        <ImageBackground
          blurRadius={ BACKGROUND_BLUR }
          resizeMode={ 'cover' }
          source={ props.backgroundImg }
          style={ styles.wallpaper }
        >
          <View style={ [
            styles.overlay, {
              backgroundColor: BACKGROUND_OVERLAY,
              opacity: BACKGROUND_OPACITY
            }] }
          />
          <TouchableOpacity
            onPress={ props.onPress }
            style={ styles.drawer }
          >
            <Thumbnail
              size={ 80 }
              source={ props.avatarImg }
              square={ true }
              style={ styles.avatarImg }
            />
            <H2 style={ styles.headerText }>{ props.headerText }</H2>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </React.Fragment>
  );
};

/**
 * SubContainer to render the drawer navigation row.
 * @const DrawerNavigationRow
 */
const DrawerNavigationRow = props => {
  return (
    <React.Fragment>
      <ListItem onPress={ () => props.nav.navigate(props.item.routeName) }>
        <Icon
          active={ true }
          name={ props.item.iconName }
          style={{ color: '#777', fontSize: 26, width: 30 }}
        />
        <Text>{ props.item.routeName }</Text>
      </ListItem>
    </React.Fragment>
  );
};

/**
 * SubContainer to render the drawer navigation footer.
 * @const DrawerNavigationFooter
 */
const DrawerNavigationFooter = props => {
  return (
    <React.Fragment>
      <View style={ styles.footer }>
        <Text>{ 'NavigationFooter' }</Text>
      </View>
    </React.Fragment>
  );
};

export default DrawerNavigationContainer;
