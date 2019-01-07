import React from "react";
import { View, Text, Image, ScrollView, Dimensions } from "react-native";
import PropTypes from 'prop-types';
import Teams from "../Teams"
import LinearGradient from "react-native-linear-gradient"
import Scores from "../components/Scores"
import Api from "../services/Api"

const { height, width } = Dimensions.get('window');

export default class TeamScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    // Api.getGameScores()
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('teamName', 'Team name'),
  });

  render() {
    const { navigation } = this.props
    const teamKey = navigation.getParam('teamKey', 0)
    const teamId = navigation.getParam('teamId', 0)

    return (
      <ScrollView>
        <LinearGradient
          colors={['#244289', '#7487b4']}
          start={{ x: 1.0, y: 0 }} end={{ x: 0.0, y: 0 }}
          style={{ alignItems: 'center', justifyContent: 'center', width: width, height: height / 4 }} >
          <Image source={Teams[teamId].logo} style={{ width: height / 4, height: height / 4 }} />
        </LinearGradient>
        <View>
          <Scores team1={teamId} team2={teamId}/>
        </View>
      </ScrollView>
    );
  }
}