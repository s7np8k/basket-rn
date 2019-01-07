import React from "react";
import { View, Text, ActivityIndicator, ScrollView, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient"
import { ListItem } from "react-native-elements";
import Teams from "../Teams"

export default class TeamsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static navigationOptions = {
    title: 'Teams'
  };

  render() {
    return (
      <ScrollView>
        {
          Object.values(Teams).map((item, i) => (
            <ListItem
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: ['#244289', '#7487b4'],
                start: { x: 1.0, y: 0 },
                end: { x: 0.1, y: 0 }
              }}
              key={i}
              title={item.teamName}
              titleStyle={{ color: 'white', fontWeight: 'bold' }}
              leftAvatar={
                <Image source={item.logo_small} style={{ width: 70, height: 70 }} />
              }
              onPress={() => this.props.navigation.navigate('Team', {
                teamKey: i,
                teamName: item.teamName,
                teamId: item.teamId
              })}
              chevronColor="white"
              chevron
            />
          ))
        }
      </ScrollView>
    );
  }
}