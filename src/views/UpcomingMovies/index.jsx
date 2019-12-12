import React from 'react';
import { ScrollView, Text, Flatlist } from 'react-native';
import { connect } from 'react-redux';
import { getUpcomingMovies } from '../../actions/upcomingAction';
import UpcomingMovieList from '../../components/UpcomingMovieList'
import styles from './style';

class UpcomingMovies extends React.Component {
  async componentDidMount() {
    await this.props.getUpcomingMovies();
  }

  render() {
    return (
      <ScrollView>
        <UpcomingMovieList
          props={this.props}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ upcomingMovies }) => ({ upcomingMovies });

export default connect(mapStateToProps, { getUpcomingMovies })(UpcomingMovies);
