import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/Pages/Home';
import Item from './src/Pages/Item';


const MainNavigator = createStackNavigator({
  Home: {screen: Home, navigationOptions: () => ({ header: null})},
  Item: {screen: Item, navigationOptions: () => ({ header: null})},
});

const Router = createAppContainer(MainNavigator);

export default Router;