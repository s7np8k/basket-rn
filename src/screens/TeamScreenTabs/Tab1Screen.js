import React from "react";
import { View, Text } from "react-native";
import Api from "../../services/Api"

export default class Tab1Screen extends React.Component {
  constructor(props) {
    super(props)

    console.log(props)
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>TAB 1</Text>
      </View>
    );
  }
}