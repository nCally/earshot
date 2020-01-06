import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Modal, TextInput, TouchableOpacity } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import { FloatingAction } from "react-native-floating-action";
import Layout from "../layout";
import colors from "../../assests/colors";
import Recent from "./recent";
import Library from "./library";
import { MaterialIcons } from "@expo/vector-icons";



export default function Home(){

    const [current, changeView] = useState(0);
    const [visible, changeVisibility] = useState(false);
    const [disabled, changeDisability] = useState(true);

    function onSwipeLeft(){
        if(current === 0){
            changeView(1); }
    }

    function onSwipeRight(){
        if(current === 1){
            changeView(0); }
    }

    return(
        <Layout backButton={false}>
            <View style={styles.container}>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity onPress={() => { onSwipeRight()}} activeOpacity={0.8}>
                        <Text style={{fontFamily:'poppins',fontSize:36,color:colors.words,opacity:current === 0 ? 1 : 0.3}}>Recent</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { onSwipeLeft()} } activeOpacity={0.8}>
                        <Text style={{fontFamily:'poppins',fontSize:36,color:colors.words,marginLeft:20,opacity:current === 1 ? 1 : 0.3}}>Library</Text>
                    </TouchableOpacity>
                </View>
                <GestureRecognizer 
                onSwipeLeft={() => { onSwipeLeft()} } 
                onSwipeRight={() => { onSwipeRight(); }}
                style={{flex:1,marginLeft:-20,paddingLeft:20,marginRight:-20,paddingRight:20}}>
                    <View style={styles.swipeWrapper}>
                        {
                            current === 0 ? <Recent /> : <Library />
                        }
                    </View>
                </GestureRecognizer>
            </View>
            <FloatingAction animated={false}
            color={colors.links} showBackground={false}
            onPressMain={()=> { changeVisibility(!visible) }} />

            <Modal animationType="slide" visible={visible} transparent={true}>
                <View style={{flex:1, backgroundColor:"rgba(0,0,0,0.5)"}}>
                    <View style={{height:100}}></View>
                    <View style={{backgroundColor:colors.main, elevation:5, borderTopLeftRadius:10,borderTopRightRadius:10,flex:1,padding:15}}>
                        <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                            <Text style={{fontFamily:'poppins',fontSize:32,color:colors.words}}>New audio</Text>
                            <MaterialIcons 
                            name="close" 
                            size={36} 
                            onPress={() => { changeVisibility(false); }}
                            color={colors.words}  />
                        </View>
                        <ScrollView>
                            <View style={styles.inputWrapper}>
                                <Text style={styles.inputLabel}>Title of audio</Text>
                                <TextInput style={styles.textInput} maxLength={50} multiline numberOfLines={3} />
                            </View>
                            <View style={styles.inputWrapper}>
                                <Text style={styles.inputLabel}>Author</Text>
                                <TextInput style={styles.textInput} maxLength={21} multiline numberOfLines={2} />
                            </View>
                            <View style={styles.inputWrapper}>
                                <Text style={styles.inputLabel}>Year</Text>
                                <TextInput style={styles.textInput} maxLength={4} />
                            </View>
                            <View style={{paddingTop:30}}>
                                <TouchableOpacity onPress={()=>{}} style={[styles.saveBtn, {backgroundColor:disabled ? "rgba(0,0,0,0.2)" : colors.links}]} activeOpacity={disabled ? 1 : 0.8}>
                                    <Text style={{color:colors.words,fontSize:24,fontFamily:'poppins-semibold',textAlign:'center'}}>Save details</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>

        </Layout>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:15
    },
    swipeWrapper:{
        flex:1,backgroundColor:colors.main
    },
    textInput:{
        fontSize:21,
        borderBottomColor:colors.words,
        borderBottomWidth:0.5,
        color:colors.words,
        fontFamily:'poppins-semibold'
    },
    inputLabel:{
        fontSize:18,
        color:colors.words,
        fontFamily:'poppins-semibold',
        opacity:0.5
    },
    inputWrapper:{
        paddingTop:15,paddingBottom:10
    },
    saveBtn:{
        borderRadius:5,
        elevation:1,
        paddingTop:5,paddingBottom:5
    }
})