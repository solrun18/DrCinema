import React from 'react';
import { ScrollView, Text, Image, FlatList, View, TouchableOpacity } from 'react-native';
import styles from './style';
import { invisible } from '../../styles/colors';
import TrailerModal from '../TrailerModal';

class UpcomingMovieList extends React.Component {
  state = {
    isTrailerModalOpen: false,
  };

  isTrailerAvailable(trailers) {
    console.log('TRAILERS!!!!!', trailers);
    if(trailers.length <= 0) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    const { isTrailerModalOpen } = this.state;
    return (
      <ScrollView>
        <FlatList
          data={this.props.upcomingMovies.sort((b, a) => a.releaseDate.localeCompare(b.releaseDate))}
          extraData={this.props.upcomingMovies}
          style={styles.container}
          renderItem={({ item: { title, poster, releaseDate, trailers } }) => {
            return (
              <View style={styles.movieContainer}>
                <View>
                  <Image style={styles.image} source={{ uri: poster }} />
                </View>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text}>{releaseDate}</Text>
                <View>
                  <TouchableOpacity
                    onPress={() => this.setState({
                      isTrailerModalOpen: true,
                    })}
                    disabled={!this.isTrailerAvailable(trailers)}
                    style={[styles.button, this.isTrailerAvailable(trailers) ? {} : { backgroundColor: invisible }]}>
                    <Text style={[styles.text, this.isTrailerAvailable(trailers) ? {} : { color: invisible }]}>
                      Horfa á stiklu!
                    </Text>
                  </TouchableOpacity>
                  <TrailerModal
                    trailerList={trailers}
                    isOpen={true}
                    closeModal={() =>
                      this.setState({ isTrailerModalOpen: false })}
                  />
                </View>
              </View>
            );
          }}
          keyExtractor={(upcomingMovie) => upcomingMovie.id}
        />
      </ScrollView>
    );
  }
};

export default UpcomingMovieList;
