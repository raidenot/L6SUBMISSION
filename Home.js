import React from 'react';
import {View, Text, SectionList, StyleSheet, TouchableOpacity, StatusBar, Button, Image} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';
import { datasource } from './Data.js';

const styles = StyleSheet.create({
  opacityStyle: {
    borderWidth: 1
  },
  textStyle: {
    fontSize: 14,
    margin: 10,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  headerText: {
    fontSize: 20,
    margin: 10,
    textAlign: "center",
    fontWeight: "bold"
  },
  imageStyle: {
    width:200,
    height:300,
    margin:10,
    resizeMode:"contain"
  },
  iconTxtStyle: {
    textAlign:"center",
    height:30,
    textAlignVertical:"center",
    borderWidth:1
  },
});

const renderItem = ({item}) => {
  let imageLink = "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_" + item.num + "-2x.png"

  return (
      <TouchableOpacity style = {styles.opacityStyle}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={[styles.textStyle]}>{item.name}</Text>
          <Image source={{uri:imageLink}} style={styles.imageStyle}/>

        </View>
      </TouchableOpacity>
  );
};

const Home = ({navigation}) => {
  return (
      <View style={{marginBottom: 50, margin: 10, flex: 1, paddingTop: 10}}>
        <View style={{borderWidth:1}}>
          <View style={{padding:20}}><Button title='Add Pokemon' onPress={()=>{navigation.navigate("Add")}}/></View>
        </View>
        <View style={{paddingTop: 20}}>
          <StatusBar hidden={true}/>
          <SectionList  sections={datasource}
                        renderItem={renderItem}
                        renderSectionHeader={({section:{element, bgColor, icon}})=>(
                            <Icon style={[styles.iconTxtStyle,{backgroundColor:bgColor}]} name={icon} size={20} onPress={()=>{navigation.navigate("Edit")}}>
                              <Text> {element}</Text>
                            </Icon>

                        )}
          />
        </View>

      </View>
  );
};

export default Home;
