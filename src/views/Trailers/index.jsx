import React from 'react';
import { ScrollView, View, FlatList, WebView } from 'react-native';
import { connect } from 'react-redux';
import styles from './style';
import * as Animatable from 'react-native-animatable';

class Trailers extends React.Component {
  render() {
    const { trailers } = this.props;
    return (
      <ScrollView style={{backgroundColor: 'black'}}>
        <Animatable.Text
          style={styles.header}
          animation="slideInDown"
          iterationCount={1}
        >Stiklur</Animatable.Text>
        <FlatList
          data={trailers[0].results}
          extraData={trailers[0].results}
          renderItem={({ item: { name, url }}) => {
            return (
              <View style={{ flex: 1, alignSelf: 'center' }}>
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
