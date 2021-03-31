import React from 'react';
import {registerRootComponent} from "expo";
import {NavigationContainer} from "@react-navigation/native";
import {BottomNavigator} from "./navigators/BottomNavigator";
import {StatusBar} from "react-native";
import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabase('react-fit.db');

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content"/>
            <BottomNavigator/>
        </NavigationContainer>
    );
}

registerRootComponent(App);
