import { StyleSheet } from 'react-native';
import {
  sunny, sunnyLight, greyLight, darkSeaGreen
} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: darkSeaGreen,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 100,
    paddingRight: 100,
    backgroundColor: sunnyLight,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: greyLight,
    textAlign: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    alignItems: 'center',
  },
  logoText: {
    marginTop: 20,
    textAlign: 'center',
    color: sunny,
    fontWeight: 'bold',
    fontSize: 150,
  },
});
