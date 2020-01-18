import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Slider } from "react-native";
import Layout from "../layout";
import colors from "../../assests/colors";
import { FontAwesome } from "@expo/vector-icons";

export default function(){

    const [isPlaying, changePlay] = useState(true);

    return (
        <Layout backButton={true}>
            <ScrollView style={{padding:15}}>
                <View>
                    <View style={{height:30}}></View>
                    <View>
                        <View style={{
                            display:"flex",justifyContent:"center",alignItems:"center",
                            backgroundColor:colors.secondary,
                            width:75,height:75,borderRadius:75/2,}}>
                            <Text style={{
                                lineHeight:50,
                                color:colors.words,fontSize:36,
                                fontFamily:'poppins-semibold'}}>E</Text>
                        </View>
                        <Text style={styles.title}>Essentialism - The disciplined pursuit of less</Text>
                        <Text style={[styles.author, {opacity:0.7}]}>James Allen <FontAwesome name="angle-right" /> 2015</Text>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection:"row",justifyContent:"center",marginTop:35}}>
                        <View style={{flexDirection:"row",alignItems:"center", justifyContent:"space-between", width:"60%"}}>
                            <TouchableOpacity>
                                <FontAwesome name="backward" size={48} color={colors.links} style={styles.shadow} />
                            </TouchableOpacity>
                            <View>
                                {
                                    isPlaying ? 
                                    <TouchableOpacity onPress={() => {
                                        changePlay(!isPlaying)
                                    }}>
                                        <FontAwesome name="play-circle" size={60} color={colors.links} style={styles.shadow} />
                                    </TouchableOpacity> : 
                                    <TouchableOpacity onPress={() => {
                                        changePlay(!isPlaying)
                                    }}>
                                        <FontAwesome name="pause" size={60} color={colors.links} />
                                    </TouchableOpacity>
                                }
                            </View>
                            <TouchableOpacity>
                                <FontAwesome name="forward" size={48} color={colors.links} style={styles.shadow} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Slider minimumTrackTintColor={colors.links} thumbTintColor={colors.links} />
                    </View>
                </View>

                <View>
                    <Text style={{color:colors.words,fontFamily:"poppins",fontSize:14,marginTop:40}}>Chapters</Text>
                    <View>
                        <OneChapter title={"Introduction"} no={1} />
                        <OneChapter title={"Communication inspiration"} no={2} />
                    </View>
                    <View style={{height:150,justifyContent:"space-between",marginTop:50}}>
                        <View style={{flexDirection:"row"}}>
                            <TouchableOpacity activeOpacity={0.8}>
                                <Text style={{color:colors.words,fontFamily:"poppins-semibold",fontSize:18,textDecorationLine:"underline"}}>Add Chapter</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <TouchableOpacity activeOpacity={0.8}>
                                <Text style={{color:colors.links,fontFamily:"poppins-semibold",fontSize:18,textDecorationLine:"underline"}}>Remove book</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{height:50}}></View>
            </ScrollView>
        </Layout>
    )
}

const styles = StyleSheet.create({
    title:{
        fontFamily:'poppins-semibold',
        fontSize:24,
        color:colors.words
    },
    author:{
        fontSize:18,
        fontFamily:'poppins-semibold',
        color:colors.words,
    },
    shadow:{
        textShadowColor: '#333',
        shadowOpacity: 2,
        elevation:1,
        textShadowRadius: 5,
        textShadowOffset: {
            width: 2,
            height: 2,
        },
    },
    itemWrapper:{
        paddingTop:15,paddingBottom:20,
        borderBottomWidth:0.5,
        borderBottomColor:colors.words
    },
    slider:{
        color:colors.links
    }
})

function OneChapter(props){
    return(
        <TouchableOpacity style={styles.itemWrapper} activeOpacity={0.7}>
            <Text style={{fontFamily:'poppins-semibold',color:colors.words,fontSize:14,lineHeight:20}}>{props.no}.</Text>
            <Text style={styles.author}>{props.title}</Text>
        </TouchableOpacity>
    )
}