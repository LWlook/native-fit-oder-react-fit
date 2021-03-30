import React from "react";
import {BottomTabNavigationOptions, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Calendar} from "../screens/Calendar";
import {Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const BottomNavigator: React.FC = () => {
    return <Tab.Navigator>
        <Tab.Screen name="Home" component={Calendar} options={CalendarScreenOptions}/>
    </Tab.Navigator>
}

const CalendarScreenOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({color, size}) => (<Ionicons name="md-home" size={size} color={color}/>)
}