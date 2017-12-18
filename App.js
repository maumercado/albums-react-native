import React, { Component } from "react";
import { AppRegistry, Text } from "react-native";
import Header from "./src/components/header";

export default class App extends Component {
    render() {
        return <Header headerText={"Albums"} />;
    }
}

AppRegistry.registerComponent("albums", () => App);
