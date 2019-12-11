
import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import * as Animatable from 'react-native-animatable';
import styles from './style';
import CinemaDetailInfo from '../../components/CinemaDetailInfo';

class CinemaDetail extends React.Component {
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

export default connect(mapStateToProps)(CinemaDetail);
