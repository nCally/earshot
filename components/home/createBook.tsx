import React, { useState } from "react";
import { connect } from "react-redux";
import { View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Layout from "../layout";
import colors from "../../assests/colors";
import { onInputChange } from "../../redux/actions";

const propsDispatch = function(dispatch){
    return {
        handleChange:function(name, event){ dispatch(onInputChange(name, event)) }
    }
}

const reduxStore = function(store){
    return {
        title:store.createBook.title
    }
}

export default connect(reduxStore, propsDispatch)(function CreateBook(props){

    const [disabled, changeDisability] = useState(true);
    const [ confirm, changeConfirmation ] = useState(false);

    function threeAbove(title){
        changeDisability(true);
        if(title.length > 3)
            changeDisability(false);
    }

    return(
        <Layout backButton={true}>
            <ScrollView style={{padding:15,flex:1}}>
                <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
    <Text style={{fontFamily:'poppins',fontSize:32,color:colors.words}}>New audio</Text> 
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputLabel}>Title of audio</Text>
                    <TextInput style={styles.textInput} maxLength={50} multiline numberOfLines={3} onChangeText={(event) => {threeAbove(event); props.handleChange('title', event)}} />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputLabel}>Author</Text>
                    <TextInput style={styles.textInput} maxLength={21} multiline numberOfLines={2} onChangeText={(event) => {props.handleChange('author', event)}} />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.inputLabel}>Year</Text>
                    <TextInput style={styles.textInput} maxLength={4} onChangeText={(event) => {props.handleChange('year', event)}} />
                </View>
                <View style={{paddingTop:30,marginBottom:350}}>
                    <TouchableOpacity onPress={()=>{}} style={[styles.saveBtn, {backgroundColor:disabled ? "rgba(0,0,0,0.2)" : colors.links}]} activeOpacity={disabled ? 1 : 0.8}>
                        <Text style={{color:colors.words,fontSize:24,fontFamily:'poppins-semibold',textAlign:'center'}}>Save details</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Layout>
    )
})

const styles = StyleSheet.create({
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