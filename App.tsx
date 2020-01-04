import React, { useState } from 'react';
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import store from "./redux/store";
import { NativeRouter, Route } from "react-router-native";
import Home from "./components/home";

const loadFonts = () => {
  return Font.loadAsync({
    'poppins':require('./assests/fonts/Poppins-Regular.ttf'),
    'poppins-semibold':require('./assests/fonts/Poppins-SemiBold.ttf')
  })
}

export default function App() {
  const [ fontLoaded, setFontLoaded ] = useState(false);

  if(!fontLoaded){
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => setFontLoaded(true)} />
    )
  }

  return (
    <Provider store={store}>
      <NativeRouter>
        <Route exact path="/" component={Home} />
      </NativeRouter>
    </Provider>
  );
}
