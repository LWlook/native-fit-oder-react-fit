import React from 'react';
import {registerRootComponent} from "expo";
import {NavigationContainer} from "@react-navigation/native";
import {BottomNavigator} from "./navigators/BottomNavigator";
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <BottomNavigator/>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}

registerRootComponent(App);
