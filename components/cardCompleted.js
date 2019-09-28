
import React, { Component } from 'react';
import DoubleClick from 'react-native-double-tap';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableHighlight,StyleSheet, Text} from 'react-native';
import { format } from 'date-fns';

class  CardCompleted extends Component {

    constructor(props) {
        super(props)
    }

    render() {
      this.props.content.time = new Date(this.props.content.time);
        return(
            <TouchableHighlight
            key={this.props.index}
            delayLongPress={50}
            onLongPress={this.props.taskDone(this.props.index)}
          >
           <DoubleClick
            doubleTap={this.props.taskDone(this.props.index)}
            delay={200}
          >
            <LinearGradient 
              start={{x: 0, y: 1}} 
              end={{x: 1, y: 2}} 
              colors={[ '#000','#111']} 
              style = {styles.listElementGradient} 
            >
              <Text style = {styles.listElementTodo}>
                
                <Text style = {styles.Date}>
                {'\n Done at '+format(this.props.content.time, 'hh:mm A')+'\n\n'}
                </Text> 
                
                {this.props.content.task+'\n\n'}
              </Text>
            </LinearGradient>
            </DoubleClick>
          </TouchableHighlight>
        );
    }
}
export default CardCompleted;
const defaultFont = 'CircularStd-Book';
const fontColor = '#fff';
const styles = StyleSheet.create({
    listElementTodo: {
        fontSize: 24,
        elevation: 5,
        color:fontColor,
        fontFamily:defaultFont,  
      },
      listElementGradient:{
        flex:1,
        width:'95%',
        margin:8,
        marginTop:4,
        marginBottom:15,
        justifyContent:'space-between',
        alignItems:'flex-start',
        padding:25,
        paddingTop:40,
        paddingBottom:100,
        elevation: 5,
        borderRadius:8,
      },  
      Date: {
        fontSize: 15,
        marginBottom:50,
        color:'rgba(235,235,235,0.8)',
        fontFamily:defaultFont
      }
});
