import { createAppContainer, NavigationScreenProp } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LandingScreen from '../modules/landing';

export interface BaseNavigationProps{
  navigation: NavigationScreenProp<any, any>
}

const RootNavigator = createStackNavigator({
  Landing: { screen: LandingScreen },
}, {headerMode: 'none', initialRouteName: 'Landing'});

const AppNavigator = createAppContainer(RootNavigator);

export { RootNavigator, AppNavigator };