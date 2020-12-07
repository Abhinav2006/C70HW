import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <Text style = {styles.soon}>
                Coming Soon!
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    soon: {
      alignItems: 'center',
      alignContent: 'center',
      marginLeft: 90,
      marginTop: 200,
      fontWeight: 'bold',
      fontSize: 30
    },
  });