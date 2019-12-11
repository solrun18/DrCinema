import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';

class UpcomingMovieThumbnail extends React.Component {
  state = {
    name: '',
    releaseDate: '',
    image: '',
  };
  render() {
    const { name, releaseDate, image } = this.state;
    return (
      <View style={styles.movieContainer}>
        <Text style={styles.movieTitle}>{name}</Text>
        <Text style={styles.releaseDate}>{releaseDate}</Text>
        <Image source={{ uri: image }} style={styles.thumbnailPhoto} />
      </View>
    );
  }
}
export default UpcomingMovieThumbnail;
