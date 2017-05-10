import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export class SectionHeader extends React.Component {  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    text: {
        color: 'black',

        paddingRight: 10
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgb(180,180,180)',
        paddingHorizontal: 15,
        paddingVertical: 12,
    }
});