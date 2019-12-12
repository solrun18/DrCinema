import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: '#3b3b3b',
    marginTop: 60,
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#ffffff',
    paddingTop: 10,
  },
  description: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#ffffff',
    paddingTop: 10,
  },
  list: {
    borderRadius: 2,
    borderColor: 'red',
    borderWidth: 0.5,
  },
  movieContainer: {
    flex: 1,
    alignSelf: 'center',
    borderRadius: 2,
    borderColor: 'blue',
    borderWidth: 0.5,
  },
  image: {
    alignItems: 'center',
    width: 100,
    height: 150,
  },
});
