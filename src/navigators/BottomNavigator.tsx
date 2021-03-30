import React from "react";
import {BottomTabNavigationOptions, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Calendar} from "../screens/Calendar";
import {Ionicons} from "@expo/vector-icons";
import {colors} from "../constants/style";
import {Records} from "../screens/Records";

const Tab = createBottomTabNavigator();

export const BottomNavigator: React.FC = () => {
    return <Tab.Navigator tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.secondary
    }}>

        <Tab.Screen name="Home" component={Calendar} options={CalendarScreenOptions}/>
        <Tab.Screen name="Records" component={Records} options={RecordsScreenOptions}/>
    </Tab.Navigator>
}

const CalendarScreenOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({color, size}) => (<Ionicons name="md-home" size={size} color={color}/>)
}

const RecordsScreenOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({color, size}) => (<Ionicons name="md-trophy" size={size} color={color}/>)
}
