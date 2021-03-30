import React from "react";
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import {Exercises} from "../screens/Exercises";
import {stackNavOptions} from "../utils/stackNavOptions";
import {ModifyExercise} from "../screens/ModifyExercise";

export type HomeStackParamList = {
    Exercises: undefined
    ModifyExercise: {
        exerciseId: number
    }
}

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeNavigator: React.FC = () => {
    return <Stack.Navigator screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        ...stackNavOptions,
    }}>
        <Stack.Screen name="Exercises" component={Exercises}/>
        <Stack.Screen name="ModifyExercise" component={ModifyExercise}/>
    </Stack.Navigator>
}

