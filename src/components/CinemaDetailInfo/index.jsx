
import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import * as Animatable from 'react-native-animatable';
import styles from './style';
import { getCinemaDetails  } from '../../actions/cinemaAction'

class CinemaDetail extends React.Component {
  componentDidMount() {
    // tryng to add current cinema to be able to find cinema deitails by id
    console.log(this.props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'white'}}>Cinema Detailss</Text>
        <CinemaDetailInfo />
      </View>
    )
  }
}

const mapStateToProps = ({
  name,
  description,
  address,
  phone,
  website }) => ({
  name,
  description,
  address,
  phone,
  website });

export default connect(mapStateToProps)(CinemaDetailInfo);
