import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

export class Seperator extends React.Component {  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.line}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        height: 0.5,backgroundColor: 'white'
    },
    line: {
        height: 0.5,marginLeft: 15,backgroundColor: 'lightgray'
    }
});