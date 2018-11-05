import React, { Component } from 'react';
import {
  Alert,
  Image,
  View,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import SelectedPhoto from './SelectedPhoto';

class ViewPhotos extends Component {
  state = {
    ds: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    }),
    showSelectedPhoto: false,
    uri: ''
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

  renderRow(rowData) {
    const { uri } = rowData.node.image;
    return (
      <TouchableHighlight
        onPress={() => this.setState({ showSelectedPhoto: true, uri: uri })}>
        <Image
          source={{ uri: rowData.node.image.uri }}
          style={styles.image} />
      </TouchableHighlight>
    )
  }

  render() {
    const { showSelectedPhoto, uri } = this.state;

    if (showSelectedPhoto) {
      return (
        <SelectedPhoto
          uri={uri}
          photoArray={this.props.photoArray} />
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
              onPress={() => this._onAddPress() }
            />
          </View>
        </View>
        <View style={{flex: 10, backgroundColor: 'off-white'}}>
          <View style={{ flex: 1, paddingLeft: 25}}>
            <ListView
              contentContainerStyle={styles.list}
              dataSource={this.state.ds.cloneWithRows(this.props.photoArray)}
              renderRow={(rowData) => this.renderRow(rowData)}
              enableEmptySections={true} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  image: {
    width: 110,
    height: 120,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#979797'
  },
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
})

export default ViewPhotos;
