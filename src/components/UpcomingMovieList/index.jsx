import React from 'react';
import { View, Text, Image, Flatlist, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './style';


const UpcomingMovieList = (props) => {
  console.log(props.upcomingMovies);
  var temp = [];
  for(x = 0; x < props.upcomingMovies.length; x+=1 ) {
    temp.push(
      <View key = {x} style={{flexDirection: 'row'}}>
        <View style={{alignItem:'center'}}>
          <Image
            style={{ resizeMode:'stretch', width:100, height: 150 }}
            source={{ uri: props.upcomingMovies[x].poster }}
          />
        </View>
        <Text>{props.upcomingMovies[x].title}</Text>
        <Text> ({props.upcomingMovies[x].releaseDate})</Text>
      </View>
    )
  }
  return (
    <View>
      {temp}
    </View>
  );
};

const mapStateToProps = ({ upcomingMovies }) => ({ upcomingMovies });
export default connect(mapStateToProps)(UpcomingMovieList);
