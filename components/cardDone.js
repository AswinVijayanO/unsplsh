
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet,Image,ImageBackground,Dimensions,Text,View} from 'react-native';


class  CardDone extends Component {

    constructor(props) {
        super(props)

    }
 
    invertColor(hex) {
      if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
      return '#' +this.padZero(r)+this.padZero(g)+this.padZero(b);
  }
  padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

    render() {
        var color = this.props.content.color
        var textColor= this.invertColor(color);
        return(
            <LinearGradient 
              start={{x: 1, y: 0}} 
              colors={['#444','#444']}
              style = {styles.listElementGradient} 
            > 
              <ImageBackground source={{uri: this.props.content.urls.regular}} style={{width: Dimensions.get('window').width-50, height:400,borderRadius:50}}>
              <View style={styles.titlebar}>
              <Image  source={{uri: this.props.content.user.profile_image.small}} style={{width:30,height:30,borderRadius:20 ,}}/>
              <Text  style = {{color:'#eee',fontSize: 20,fontFamily:defaultFont}} >
              {this.props.content.user.name}                        
                </Text>
                <Text style = {[styles.download,{backgroundColor:color,color:textColor}]}>Download</Text>
              </View>    
              </ImageBackground>
            
             
            </LinearGradient>
        );
    }
}
export default CardDone;
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
        margin:20,
        marginRight:10,
        marginTop:10,
        justifyContent:'space-between',
        alignItems:'flex-start',
        padding:10,
        paddingBottom:10,
        minWidth:400,
        maxWidth:800,
        overflow:'scroll',
        elevation: 5,
        borderRadius: 10
       
      },  
      Date: {
        fontSize: 32,
        margin:20,
        padding:10,
        color:'rgba(235,235,235,0.8)',
        backgroundColor:'#000',
        borderRadius:20,
        fontFamily:defaultFont
      },
      month: {
        fontSize: 16,
        padding:30,
        color:'rgba(35,35,35,0.5)',
        fontFamily:defaultFont
      },
      time: {
        fontSize: 20,
        padding:30,
        color:'rgba(35,35,35,0.8)',
        fontFamily:defaultFont
      },
      download:{
        maxWidth:110,
        borderRadius:60,
        padding:10,
        fontFamily:defaultFont,
        fontSize:14
      },
      titlebar:{
        flex:1,
        width:'100%',
        maxHeight:50,
        margin:0,
        padding:8,
        flexDirection:'row',
        backgroundColor:'rgba(50,50,50,0.9)',
        justifyContent:'space-between'
      }

});
