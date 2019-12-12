import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Main from '../views/Main';
import Cinemas from '../views/Cinemas';
import CinemaDetail from '../views/CinemaDetail';
import UpcomingMovies from '../views/UpcomingMovies';

const CinemaStackNavigator = createStackNavigator({
  Main,
  Cinemas,
  CinemaDetail,
});

const UpcomingMoviesStackNavigator = createStackNavigator({
  Main,
  UpcomingMovies,
});

const DrawerNavigator = createDrawerNavigator({
  Cinemas: CinemaStackNavigator,
  UpcomingMovies: UpcomingMoviesStackNavigator,
});

export default createAppContainer(DrawerNavigator);
