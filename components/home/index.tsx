import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Modal } from "react-native";
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
                    <Text style={{fontFamily:'poppins',fontSize:36,color:colors.words,opacity:current === 0 ? 1 : 0.3}}>Recent</Text>
                    <Text style={{fontFamily:'poppins',fontSize:36,color:colors.words,marginLeft:20,opacity:current === 1 ? 1 : 0.3}}>Library</Text>
                </View>
                <GestureRecognizer 
                config={{velocityThreshold:0.1,directionalOffsetThreshold:50}}
                onSwipeLeft={() => { onSwipeLeft()} } 
                onSwipeRight={() => { onSwipeRight(); }}
                style={{flex:1,marginLeft:-20,paddingLeft:20,marginRight:-20,paddingRight:20}}>
                    <ScrollView>
                        {
                            current === 0 ? <Recent /> : <Library />
                        }
                    </ScrollView>
                </GestureRecognizer>
            </View>
            <FloatingAction animated={false}
            color={colors.links} showBackground={false}
            onPressMain={()=> { changeVisibility(!visible) }} />

            <Modal animationType="slide" visible={visible} transparent={true}>
                <View style={{flex:1, backgroundColor:"rgba(0,0,0,0.5)"}}>
                    <View style={{height:200}}></View>
                    <View style={{backgroundColor:colors.main, elevation:5, borderTopLeftRadius:10,borderTopRightRadius:10,flex:1,padding:15}}>
                        <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                            <Text style={{fontFamily:'poppins',fontSize:36,color:colors.words}}>New audio</Text>
                            <MaterialIcons 
                            name="close" 
                            size={36} 
                            onPress={() => { changeVisibility(false); }}
                            color={colors.words}  />
                        </View>
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
    }
})