import React from "react";
import { Text, View, Image, Linking } from "react-native";

import Button from "./Button";
import Card from "./Card";
import CardSection from "./CardSection";

const AlbumDetail = ({ album }) => {
    const { thumbnail_image, title, artist, image, url } = album;
    const {
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        thumbnailStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>

                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)} />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around"
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        marginLeft: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
