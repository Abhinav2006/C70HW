import React from 'react';
import { Text, View, Header, TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native';

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View>
                <Text style = {{marginLeft: 30, marginTop:30}}>Write a story!</Text>
                <KeyboardAvoidingView>
                <TextInput style = {{borderWidth: 1.5, width: 300, height: 30, marginLeft: 30, marginTop: 10}}
                placeholder = {"Story's Title"}/>
                <TextInput style = {{borderWidth: 1.5, width: 300, height: 400, marginLeft: 30, marginTop: 5}}
                multiline
                placeholder = {"Story"}/>
                </KeyboardAvoidingView>
            </View>
        )
    }
}