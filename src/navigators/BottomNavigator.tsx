import React from "react";
import {BottomTabNavigationOptions, createBottomTabNavigator} from "@react-navigation/bottom-tabs";;
import {Ionicons} from "@expo/vector-icons";
import {colors} from "../constants/style";
import {Records} from "../screens/Records";
import {HomeNavigator} from "./HomeNavigator";

const Tab = createBottomTabNavigator();

export const BottomNavigator: React.FC = () => {
    return <Tab.Navigator tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.secondary
    }}>

        <Tab.Screen name="Home" component={HomeNavigator} options={HomeNavigatorOptions}/>
        <Tab.Screen name="Records" component={Records} options={RecordsScreenOptions}/>
    </Tab.Navigator>
}

const HomeNavigatorOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({color, size}) => (<Ionicons name="md-home" size={size} color={color}/>)
}

const RecordsScreenOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({color, size}) => (<Ionicons name="md-trophy" size={size} color={color}/>)
}
