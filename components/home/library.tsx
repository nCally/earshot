import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-native";
import { View, Text, Animated, SectionList, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../assests/colors";
import formatter from "./formatSectionListData";

export default function Library(){
    
    const [fadeAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue:1,
            duration:300,
        }).start();
    }, []);

    return(
        <View style={styles.wrapper}>
            <Animated.View style={{opacity:fadeAnim,paddingTop:20}}>
                <SectionList 
                sections={formatter(data)} 
                renderItem={( { item } ) => <Item title={item.title} author={item.author} />} 
                keyExtractor={(item, i) => item.id + i} 
                renderSectionHeader={({ section:{ title} }) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
                )} />
            </Animated.View>
        </View>
    )
}

const data = [
    {title:'The Alchemist', author:'Paul Cheolo', id:'1'},
    {title:'Essentialism', author:'Greg Mckeown', id:'2'},
    {title:'The Subtle Art of not giving a fuck', author:'Mark Mason', id:'3'},
    {title:'The one thing', author:'Paul Cheolo', id:'4'},
    {title:'Wealth and poverty of nations', author:'David Landes', id:'5'}
]

const styles = StyleSheet.create({
    wrapper:{
        flex:1
    },
    title:{
        fontSize:24,
        fontFamily:'poppins-semibold',
        color:colors.words,
        lineHeight:28
    },
    author:{
        fontSize:18,
        fontFamily:'poppins-semibold',
        opacity:0.5,
        color:colors.words,
        lineHeight:20
    },
    itemWrapper:{
        paddingTop:15,paddingBottom:20,
        borderBottomWidth:0.5,
        borderBottomColor:colors.words
    },
    sectionHeader:{
        color:colors.words,
        marginTop:20,
        fontSize:14,
        fontFamily:'poppins-semibold',
        opacity:0.7,
        padding:10,
    }
})

let Item = withRouter(function(props){
    return (
        <TouchableOpacity onPress={()=>{ props.history.push('/single') }} activeOpacity={0.6}>
            <View style={styles.itemWrapper}>
                <Text style={styles.title}>{ props.title }</Text>
                <Text style={styles.author}>{ props.author }</Text>
            </View>
        </TouchableOpacity>
    )
})