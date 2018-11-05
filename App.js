import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  CameraRoll,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View }
from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import CameraScreen from './component/CameraScreen';

export default class MyFoodDiary extends Component {
  render() {
    return (
      <CameraScreen/>
    );
  }
}

AppRegistry.registerComponent('MyFoodDiary', () => MyFoodDiary);
