
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from '../views/Main';

const StackNavigator = createStackNavigator({
  Main
});

export default createAppContainer(StackNavigator);
