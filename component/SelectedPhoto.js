import React, { Component } from 'react';
import {
  Alert,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';
import ViewPhotos from './ViewPhotos';
import Icon from 'react-native-vector-icons/Ionicons';

class SelectedPhoto extends Component {

  state = {
    goBackToViewPhoto: false
  }

  _onAddPress() {
    Alert.alert(
      'Do you want to add a new post?',
      '',
      [
        {text: 'Yes', onPress: () => console.log('Yes pressed')},
        {text: 'No', onPress: () => console.log('No pressed')},
      ],
      { cancelable: false }
    )

  }

  render() {
    if (this.state.goBackToViewPhoto) {
      return (
        <ViewPhotos
          photoArray={this.props.photoArray} />
      )
    }

    return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'skyblue'}}>
          <View style={styles.topBarContainer}>
            <Icon
              name= 'ios-arrow-back'
              color= '#272F49'
              size= {37}
              onPress={() => this.setState({goBackToViewPhoto: true})}
            />
            <Text style={styles.titleContainer}>My Food Diary!</Text>
            <Icon
              name= 'ios-add-circle-outline'
              color= '#272F49'
              size= {37}
              onPress={ () => this._onAddPress() }
            />
          </View>
        </View>
        <View style={{flex: 10, backgroundColor: 'off-white'}}>
          <View style={{ flex: 1, alignSelf: 'center'}}>
            <Image
              source={{uri: this.props.uri}}
              style={styles.image}/>
          </View>
        </View>
      </View>

    )
  }

}

/*
const SelectedPhoto = (props) => {
  const { uri } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{uri: uri}}
        style={styles.image}/>
    </View>
  );
};*/

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
  },
  image: {
    height: 300,
    width: 200,
    alignSelf: 'center',
  },
});

export default SelectedPhoto;
