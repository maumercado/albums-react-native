import React, { Component } from "react";
import { View } from "react-native";

import AlbumDetail from "./AlbumDetail";
import axios from "axios";

export default class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = { err: "", albums: [] };
    }

    async componentWillMount() {
        try {
            const response = await axios.get(
                "https://rallycoding.herokuapp.com/api/music_albums"
            );
            this.setState({
                albums: response.data
            });
        } catch (err) {
            this.setState({ err });
        }
    }

    renderAlbums() {
        return this.state.albums.map(album => (
            <AlbumDetail key={album.title} album={album} />
        ));
    }

    render() {
        return <View>{this.renderAlbums()}</View>;
    }
}
