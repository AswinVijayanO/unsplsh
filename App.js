import React from 'react';
import {StatusBar,Vibration,ScrollView,TouchableHighlight,StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CardDone from './components/cardDone';
import Unsplash,{toJson} from 'unsplash-js/native';

const unsplash = new Unsplash({
  applicationId: APP_ID,
  secret: SECRETE
});
const defaultFont = 'Aemstel-Regular'
const boldFont = 'Aemstel-LineInside'
const bg = [ '#000', '#000', '#111', '#111' ]
const fontColor = '#fff'
const subFontColor='#aaa'



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '',
    todo:[],
    placeholder:'Add task'
    };
    unsplash.photos.listPhotos(1, 40, "latest")
    .then(toJson)
    .then(json => {
     this.state.todo = json;
     this.setState({todo:json})
    });
  } 
  
 
 
  render() {
    list1 = [];   
    if(this.state.todo){
      for(i=0;i<this.state.todo.length;i++){
        console.log(this.state.todo[i]);
        list1.push( 
          <CardDone
            key={i}        
            content={this.state.todo[i]}>
          </CardDone>
        );
      }
    }
  
     
    return (
     
      <View style  ={styles.container}>
       <StatusBar backgroundColor="black" barStyle="light-content" />
        <LinearGradient 
              colors={bg} 
          style = {{flex:1,borderRadius:25}}    
       >
          <Text style = {styles.title}>unsp.</Text>
            <View>
            <Text style = {[styles.subs,{}]}>
                Latest
            </Text>
            <ScrollView contentContainerStyle = {styles.list}  > 
            {list1}
            </ScrollView>
            </View>
          
        </LinearGradient>
        
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000',
    alignItems:'stretch',
  },
  title: {

    padding:20,
    paddingBottom:5,
    margin:0,
    fontSize: 60,
    color:fontColor,
    alignItems:'center',
    fontFamily:defaultFont
  },
  userBlock: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:0,
    paddingBottom:2,
    margin:10,
    backgroundColor:'#fff',
    borderRadius:8,
  },
  list: {
    flexDirection:'column',
  },
  subs: {
    fontFamily:boldFont,
    color:subFontColor,
    margin:20,
    fontSize:32
  }


});

