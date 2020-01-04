import React, { useState, useEffect } from "react";
import { View, Text, Animated } from "react-native";

export default function Library(){
    
    const [fadeAnim] = useState(new Animated.Value(0));

    React.useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue:1,
            duration:800,
        }).start();
    }, []);

    return(
        <Animated.View style={{opacity:fadeAnim}}>
            <Text></Text>
        </Animated.View>
    )
}