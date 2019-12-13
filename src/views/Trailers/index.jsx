import React from 'react';
import { ScrollView, View, Text, FlatList, WebView } from 'react-native';
import { connect } from 'react-redux';
import { getUpcomingMovies } from '../../actions/upcomingAction';
import UpcomingMovieList from '../../components/UpcomingMovieList';
import styles from './style';

class Trailers extends React.Component {

  render() {
    const { trailers } = this.props;
    return (
      <ScrollView>
        <FlatList
          data={trailers[0].results}
          extraData={trailers[0].results}
          renderItem={({ item: { name, url }}) => {
            return(
              <View style={{flex: 1}}>
                <WebView
                  startInLoadingState={true}
                  automaticallyAdjustContentInsets={false}
                  javaScriptEnabled={true}
                  style={styles.trailerContainer}
                  source={{ uri: url }}
                />
              </View>
            );
          }}
        />
      </ScrollView>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    trailers: ownProps.navigation.state.params.trailers
  };
};
export default connect(mapStateToProps)(Trailers);
