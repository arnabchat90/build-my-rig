import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Avatar,
  Icon,
  MenuItem,
  OverflowMenu,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

const MenuIcon = props => <Icon {...props} name="more-vertical" />;

const InfoIcon = props => <Icon {...props} name="info" />;

const LogoutIcon = props => <Icon {...props} name="log-out" />;

export const TopNavigationWithLogo = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const renderOverflowMenuAction = () => (
    <React.Fragment>
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}>
        <MenuItem accessoryLeft={InfoIcon} title="About" />
        <MenuItem accessoryLeft={LogoutIcon} title="Logout" />
      </OverflowMenu>
    </React.Fragment>
  );

  const renderTitle = props => (
    <View style={styles.titleContainer}>
      <Avatar
        style={styles.logo}
        source={require('../assets/logos/logo.jpg')}
      />
      <Text {...props}>Build My Rig</Text>
    </View>
  );

  return (
    <TopNavigation
      title={renderTitle}
      accessoryRight={renderOverflowMenuAction}
    />
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginHorizontal: 16,
  },
});

export default TopNavigationWithLogo
