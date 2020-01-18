import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { withRouter } from "react-router-native";
import GestureRecognizer from "react-native-swipe-gestures";
import { FloatingAction } from "react-native-floating-action";
import Layout from "../layout";
import colors from "../../assests/colors";
import Recent from "./recent";
import Library from "./library";
import { MaterialIcons } from "@expo/vector-icons";



export default withRouter(function Home(props){

    const [current, changeView] = useState(0);

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
            onPressMain={()=> { props.history.push("/create") }} />

        </Layout>
    )
})

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:15
    },
    swipeWrapper:{
        flex:1,backgroundColor:colors.main
    }
})