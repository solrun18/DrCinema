import { StyleSheet } from 'react-native';
import { lighterBlue } from '../../styles/colors';

export default StyleSheet.create({
  detailContainer: {
    position: 'relative',
  },
  upperViewContainer: {
    flexDirection: 'row',
    backgroundColor: 'green',
  },
  infoContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: 70,
    paddingRight: 50,
  },
  header: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  movieTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  movieYear: {
    fontSize: 25,
    marginLeft: 8,
    color: '#ffffff',
  },
  movieGenres: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#ffffff',
    maxWidth: 140,
  },
  icon: {
  },
  iconContainer:{

  },
  movieDuration: {
    fontSize: 20,
    color: '#ffffff',
  },
  durationContainer: {
    flexDirection: 'row',
  },
  plot: {
    fontSize: 20,
    color: '#ffffff',
    paddingLeft: 10,
  },
  moviePlot: {
    fontSize: 17,
    borderWidth: 1,
    marginHorizontal: 10,
    color: '#ffffff',
    backgroundColor:'#3b3b3b',
  },
  moviePoster: {
    width: 150,
    height: 210,
    marginLeft: 20,
    marginTop:20,
    marginBottom: 20,
  },
});
