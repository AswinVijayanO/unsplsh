import {TextInput,StyleSheet}  from 'react-native';
import React, { Component } from 'react';
class  MattTextBox extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        
        return(
            <TextInput style = {styles.textinput}
                ref={input => { this.textInput = input }}
                placeholderStyle={{fontFamily: defaultFont }}
                value = {this.props.text}
                onChangeText={(text) => this.props.onChangeText(text)}
                onSubmitEditing ={(text) => {this.props.onSubmitEditing(text);this.textInput.clear();}}
                placeholder={this.props.placeholder}
            />
        );
    }
}
export default MattTextBox;
const defaultFont = 'CircularStd-Book'
const styles = StyleSheet.create({
    textinput: {
        margin:10,
        fontSize: 18,
        padding:5,
        paddingLeft:10,
        color:'rgba(23,23,23,0.8)',
        backgroundColor:'rgba(215,215,215,0.6)',
        borderRadius:8,
        fontFamily:defaultFont
      }
});
