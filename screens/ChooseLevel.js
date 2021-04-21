import React, {Component} from 'react';
import { StyleSheet, View, Text, Image,Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FlatGrid } from 'react-native-super-grid';

const one = require('../assets/img/one.png');
const two = require('../assets/img/two.png');
const three = require('../assets/img/three.png');
const ler = require('../assets/img/ler.png')
const escr = require('../assets/img/escrever.png')
var isHidden = true;

export default class Choose extends Component{

  constructor(props){
    super(props);
    this.state = {
      bounceValue: new Animated.Value(100),  //This is the initial position of the subview
      buttonText: "Show Subview"
    };
    this.items = [
      { image: one, level: 1,code: '#FDD856',border:'#FFE68D'},
      { image: two, level: 2,code: '#EC685F',border:'#FF9A94'},
      { image: three, level: 3,code: '#AC6BFF', border: '#E09EFF'},
    ]
  }

  _toggleSubview() {    
    this.setState({
      buttonText: !isHidden ? "Show Subview" : "Hide Subview"
    });

    var toValue = 100;

    if(isHidden) {
      toValue = 0;
    }

    //This will animate the transalteY of the subview between 0 & 100 depending on its current state
    //100 comes from the style below, which is the height of the subview.
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: toValue,
        velocity: 3,
        tension: 2,
        friction: 8,
        useNativeDriver: true
      }
    ).start();

    isHidden = !isHidden;
  }

  render(){
    return (
      <View style = {{flex:1,backgroundColor: '#f47c48', alignItems:'center'}}>
       
        <Text style = {{alignSelf: 'center', fontSize: 24, color: 'white', fontWeight:'bold',marginBottom:30, marginTop: 30,fontFamily: 'Pacifico'}}>Escolha um nível</Text>
        <View style = {{width: '100%', height: '60%', justifyContent:'center'}}>
            <FlatGrid
            itemDimension={300}
            data={this.items}
            style={styles.gridView}
            horizontal = {true}
            // staticDimension={300}
            // fixed
            spacing={60}
            renderItem={({ item }) => (
                <View style = {{justifyContent:'center',alignItems:'center'}}> 
                  <TouchableOpacity style={[styles.itemContainer, { backgroundColor: item.code, borderColor:item.border }]} onPress={()=> {this._toggleSubview()}}>
                    <Image source = {item.image} style = {{width:'60%', height: '60%'}}/>
                  </TouchableOpacity>
                 
                </View>
            )}
            />
        </View>
        <Animated.View
            style={[styles.subView,
              {transform: [{translateY: this.state.bounceValue}]}]}
          > 
            <TouchableOpacity>
              <Image source = {ler} style={{width:50,height:50,marginLeft: 20}}></Image>
            </TouchableOpacity>
            <Image source = {escr} style={{width:50,height:50,marginRight: 20}}></Image>
        </Animated.View>
      </View>
  );}
}

const styles = StyleSheet.create({
  gridView: {
    backgroundColor: '#f5956c',
    borderWidth: 2,
    borderColor: '#f7b79c',
    flex: 1,
  },
  itemContainer: {
    borderRadius: 5,
    borderWidth:1.5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 320,
    width: 320
  },
  subView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#f5956c",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#f7b79c',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    height: 100,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});