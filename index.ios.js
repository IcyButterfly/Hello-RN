/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ListView,
  FlatList,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import { TextCell } from './Element/TextCell';
import { SectionHeader } from './Element/SectionHeader';
import { Seperator } from './Element/Seperator';

export default class Hello extends Component {

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {dataSource: ds.cloneWithRows(["ListView", 'FlatList', 'SectionList',
    "ListView", 'FlatList', 'SectionList',
    "ListView", 'FlatList', 'SectionList',
    "ListView", 'FlatList', 'SectionList',
    "ListView", 'FlatList', 'SectionList',])};
  }

  press(listType) {
    console.log("😄" + listType);
    switch (listType) {
      case "ListView":
        break;
      case "":
        break;
      case "SectionList":
        this.props.navigation.navigate('Section')
      default:
        break
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <ListView 
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
            <TouchableOpacity onPress={this.press.bind(this, rowData)}>
              <TextCell text={rowData}/>
            </TouchableOpacity>
          }
          renderHeader={ () =>
            <View style={{height: 200, backgroundColor: 'orange'}}>
              <Text>header</Text>
            </View>
          }
          renderSectionHeader={(section, id) => 
            <SectionHeader text="section header"/>
          }
          renderSeparator={() => 
            <Seperator />
          }
          se
        />
      </View>
    );
  }
}

class SectionListScene extends Component {
  render() {
    return (
      <Modal animationType="slide" >
      <View style={[{backgroundColor: "green",alignItems: 'center', justifyContent: 'center', flex: 1}]}>
       
          <Text style={{backgroundColor: 'orange'}}>section list</Text>
       
      </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(222,223,200)',
    flex: 1,
    justifyContent: 'center',
  },
});


const App = StackNavigator({
  Main: {screen: Hello},
  Section: {screen: SectionListScene},
  Fast: { screen: Hello}
});

AppRegistry.registerComponent('Hello', () => App);
