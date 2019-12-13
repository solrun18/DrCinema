
import { StyleSheet } from 'react-native';
import {
  grayish, lighterBlue, darkerBlue
} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 70,
    paddingRight: 70,
    borderRadius: 10,
    backgroundColor: 'red',

  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  logo: {
    width: 350,
    height: 300,
    alignItems: 'center',
  },
  slogan: {
    width: 120,
    height: 30,
    alignItems: 'center',
  },
});
