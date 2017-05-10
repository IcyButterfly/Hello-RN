import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export class TextCell extends React.Component {  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.text}</Text>
        <Text>></Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    text: {
        color: 'gray',
        flex: 1, 
        paddingRight: 10
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 12,
    }
});