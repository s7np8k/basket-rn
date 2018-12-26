import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { Button } from "react-native-elements";
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

export default class LaunchScreen extends React.Component {
    static navigationOptions = {
        header: null,
        title: 'Launch',
      };

      _onGoPress = () => {
          this.props.navigation.navigate('Teams')
      }
      
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image 
            source={require('../../images/nba_logo.png')} 
            style={{ height: imageHeight, width: imageWidth }}
        />
          <Button title={'Let\'s go!'} 
          onPress={() => this._onGoPress()}
          />
        </View>
      );
    }
  }