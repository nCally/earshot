import React, { useState, useEffect } from "react";
import { Text, Animated, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import colors from "../../assests/colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function Recent(){

    const [fadeAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue:1,
            duration:300,
        }).start();
    }, []);

    return(
        <ScrollView style={styles.wrapper}>
            <Animated.View style={{opacity:fadeAnim,flexDirection:"row",paddingTop:20}}>
                <View style={{width:"52%"}}>
                    <FirstBook />
                    <LastTwoBooks name="Subtle art of not giving a fuck" />
                    <LastTwoBooks name="Wealth and poverty of nations" />
                </View>
                <View style={{width:"6%"}}></View>
                <View style={{width:"42%"}}>
                    <NextTwoBooks name="The one things" />
                    <NextTwoBooks name="Essentialism" />
                </View>
            </Animated.View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    wrapper:{
        flex:1,padding:5
    },
})

function FirstBook(){
    return (
        <View style={{marginBottom:15}}>
            <TouchableOpacity onPress={()=>{}} activeOpacity={0.8} style={{
            display:'flex',
            justifyContent:'space-between',
            height:200,backgroundColor:colors.links,padding:10,
            elevation:5,borderRadius:5,width:"100%"}}>
                <Text style={{color:colors.words,fontFamily:'poppins',fontSize:18}}>As a man thinks</Text>
                <MaterialIcons 
                name="play-circle-filled" 
                size={55} color={colors.main} 
                style={{alignSelf:'flex-end',marginBottom:10}} />
            </TouchableOpacity>
        </View>
    )
}

function NextTwoBooks(props){
    return(
        <View style={{marginBottom:15}}>
            <TouchableOpacity onPress={()=>{}} activeOpacity={0.7} style={{
            display:'flex',
            justifyContent:'space-between',
            backgroundColor:colors.secondary,padding:10,
            elevation:5,borderRadius:5,width:"100%"}}>
                <Text style={{color:colors.words,fontSize:14,fontFamily:'poppins'}}>{props.name}</Text>
                <View style={{height:30}}></View>
                <MaterialIcons name="play-circle-filled" size={32} color={colors.main} 
                style={{alignSelf:'flex-end',marginBottom:10}} /> 
            </TouchableOpacity>
        </View>
    )
}

function LastTwoBooks(props){
    return(
        <View style={{marginBottom:15}}>
            <TouchableOpacity onPress={()=>{}} activeOpacity={0.7} style={{
            display:'flex',
            justifyContent:'space-between',
            backgroundColor:colors.secondary,padding:10,
            elevation:5,borderRadius:5,width:"100%"}}>
                <Text style={{color:colors.words,fontSize:14,fontFamily:'poppins'}}>{props.name}</Text> 
                <View style={{height:30}}></View>
                <MaterialIcons name="play-circle-filled" size={32} color={colors.main} 
                style={{alignSelf:'flex-end',marginBottom:10}} /> 
            </TouchableOpacity>
        </View>
    )
}