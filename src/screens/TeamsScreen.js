import React from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import Teams from "../Teams.json"

export default class TeamsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static navigationOptions = {
    title: 'Teams',
  };

  render() {
    return (
      <ScrollView>
        {
          Teams.map((item, i) => (
            <ListItem
              key={i}
              title={item.teamName}
            />
          ))
        }
      </ScrollView>
    );
  }
}