import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import axios from 'axios'
import Item from '../components/ItemComponent'
export default class HomeScreen extends Component {
 
  render() {
    return (
      <ScrollView>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Home', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          backgroundColor= 'orange'
        />
        <Item/>
      </ScrollView>
    );
  }
};