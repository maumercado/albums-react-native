import React, { Component } from "react";
import { AppRegistry, Text } from "react-native";

export default class App extends Component {
    render() {
        return <Text>Some Text</Text>;
    }
}

AppRegistry.registerComponent("albums", () => App);
