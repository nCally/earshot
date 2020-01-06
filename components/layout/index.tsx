import React from "react";
import { withRouter } from "react-router-native";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../assests/colors";
import { MaterialIcons } from "@expo/vector-icons";

let Layout = withRouter(function(props) {
            return (
                <View style={styles.container}>
                    <View style={styles.topspace}>
                        {props.backButton ? 
                        <TouchableOpacity onPress={() => { props.history.push('/') }}>
                            <MaterialIcons name="arrow-back" size={42} style={{color:colors.words}} /></TouchableOpacity> : null }
                    </View>
                    {props.children}
                </View>
            );
});

export default Layout;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.main,
    },
    topspace:{
        height:130,
        justifyContent:'flex-end',
        paddingLeft:15,
        paddingBottom:10
    }
  });