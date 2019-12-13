import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  movieContainer: {
    flex: 1,
    alignItems: 'flex-start',
    borderWidth: 1,
    marginVertical: 10,
    backgroundColor: '#3b3b3b',
    paddingVertical: 10,
  },
  image: {
    alignItems: 'center',
    width: 100,
    height: 150,
    marginLeft: 10,
  },
  header: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  releaseYear: {
    fontSize: 20,
    color: '#ffffff',
    paddingLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  innerContainer: {
    flexDirection: 'row',
  },
  genres: {
    color: '#ffffff',
    paddingLeft: 10,
    marginTop: 20,
  },
});
