import React from "react";
import {View, Text} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {HomeStackParamList} from "../navigators/HomeNavigator";
import { RouteProp } from "@react-navigation/native";

type ExercisesNavigationProp = StackNavigationProp<HomeStackParamList, 'ModifyExercise'>

interface ModifyExerciseProps {
    navigation: ExercisesNavigationProp
    route: RouteProp<HomeStackParamList, 'ModifyExercise'>
}

export const ModifyExercise: React.FC<ModifyExerciseProps> = ({navigation, route}) => {

    const { exerciseId } = route.params

    return <View>
        <Text>
            ModifyExercise Screen! (ID: { exerciseId })
        </Text>
    </View>
}
