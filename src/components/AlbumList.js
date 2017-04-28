import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// HTTP Request
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// functional component
/*
const AlbumList = () => {
    return(
      <View>
        <Text>Album List</Text>
      </View>
    );
};
*/

// class component
class AlbumList extends Component{
  // when we want to fetch data from API OR do some complex things it's better to use class based component
  // initialize empty state
  state = {
    albums: []
  };

  componentWillMount(){
    // this called lifecycle method
    // this will called automatically when ever component is about to Render
    console.log("componentWillMount in Album List")
    // debugger;
    //TODO: call the API
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums:response.data }));
      // whenever we want to update component state do not use this.state
      // always use this.setState
      /*
      props : use for parent to child component communication
      state : component internal record keeping (pass data from parent to child)
      use state only with class based component
      */

  }

  renderAlbums(){
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={ album }/>
    );
  }

  render(){
     console.log(" STATE=> ", this.state);
      return(
        <ScrollView>
          { this.renderAlbums() }
        </ScrollView>
      );
  }
}

export default AlbumList;
