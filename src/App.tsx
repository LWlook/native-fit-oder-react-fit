import React from 'react';
import {registerRootComponent} from "expo";
import {NavigationContainer} from "@react-navigation/native";
import {BottomNavigator} from "./navigators/BottomNavigator";
import {StatusBar} from "react-native";

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content"/>
            <BottomNavigator/>
        </NavigationContainer>
    );
}

registerRootComponent(App);
