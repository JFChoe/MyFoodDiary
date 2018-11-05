import React, { Component } from 'react';
import {
  CameraRoll,
  Image,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';
import ViewPhotos from './ViewPhotos';
import Icon from 'react-native-vector-icons/Ionicons';

class CameraScreen extends Component {

  state = {
    showPhotoGallery: false,
    photoArray: []
  }

  getPhotosFromGallery() {
    CameraRoll.getPhotos({ first: 100 })
      .then(res => {
        let photoArray = res.edges;
        this.setState({ showPhotoGallery: true, photoArray: photoArray })
      })
  }

  render() {
    if (this.state.showPhotoGallery) {
      return (
        <ViewPhotos
          photoArray={this.state.photoArray} />
      )
    }
    return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'skyblue'}}>
          <View style={styles.topBarContainer}>
            <Icon
              name= 'ios-help-circle-outline'
              color= '#272F49'
              size= {37}
            />
            <Text style={styles.titleContainer}>My Food Diary!</Text>
            <Icon
              name= 'ios-add-circle-outline'
              color= '#272F49'
              size= {37}
              onPress={() => this.getPhotosFromGallery()}
            />
          </View>
        </View>
        <View style={{flex: 10, backgroundColor: 'off-white'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //App container
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  topBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 25,
    marginLeft: 15,
    marginRight: 15,
  },
  titleContainer: {
    fontSize: 30,
    fontWeight: '600',
  }
});

export default CameraScreen;
