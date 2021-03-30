import React from "react";
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import {Calendar} from "../screens/Calendar";
import {stackNavOptions} from "../utils/stackNavOptions";

export type RootStackParamList = {
    Calendar: { };
}

const Stack = createStackNavigator<RootStackParamList>();

export const HomeNavigator: React.FC = () => {
    return <Stack.Navigator screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        ...stackNavOptions,
    }}>
        <Stack.Screen name="Calendar" component={Calendar} options={{title: "Servus!"}}/>
    </Stack.Navigator>
}

