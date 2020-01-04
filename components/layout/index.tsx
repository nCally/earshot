import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../assests/colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function Layout(props) {
    return (
        <View style={styles.container}>
            <View style={styles.topspace}>
                {props.backButton ? <MaterialIcons name="arrow-back" size={42} style={{color:colors.words}} /> : null }
            </View>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.main,
    },
    topspace:{
        height:100,
        justifyContent:'flex-end',
        paddingLeft:15
    }
  });