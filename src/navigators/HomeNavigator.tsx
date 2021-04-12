import React from "react";
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import {Exercises} from "../screens/Exercises";
import {stackNavOptions} from "../utils/stackNavOptions";
import {ModifyExercise} from "../screens/ModifyExercise";
import {ChooseExercise} from "../screens/ChooseExercise";

export type ModifyExerciseMode = "create" | "edit"

export type HomeStackParamList = {
    ChooseExercise: undefined,
    Exercises: undefined,
    ModifyExercise: {
        exerciseId: number
        exerciseName: string
        mode: ModifyExerciseMode
    }
}

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeNavigator: React.FC = () => {
    return <Stack.Navigator screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        ...stackNavOptions,
    }}>
        <Stack.Screen name="Exercises" component={Exercises}/>
        <Stack.Screen name="ChooseExercise" component={ChooseExercise} options={{title: "Which exercise?"}}/>
        <Stack.Screen name="ModifyExercise" component={ModifyExercise}/>
    </Stack.Navigator>
}

