import React from "react";
import {Text, View} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {HomeStackParamList} from "../navigators/HomeNavigator";
import {RouteProp} from "@react-navigation/native";

// type ExercisesNavigationProp = StackNavigationProp<HomeStackParamList, 'ChoseExercise'>

interface ModifyExerciseProps {
    // navigation: ExercisesNavigationProp
    route: RouteProp<HomeStackParamList, 'ChoseExercise'>
}

export const ChoseExercise: React.FC<ModifyExerciseProps> = ({route}) => {
    const {exerciseId} = route.params

    return <View>
        <Text>
            ModifyExercise Screen! (ID: {exerciseId})
        </Text>
    </View>
}
