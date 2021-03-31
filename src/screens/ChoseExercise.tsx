import React from "react";
import {Text, View} from "react-native";
import {HomeStackParamList} from "../navigators/HomeNavigator";
import {RouteProp, useRoute} from "@react-navigation/native";

export const ChoseExercise: React.FC = () => {
    const route = useRoute<RouteProp<HomeStackParamList, 'ChoseExercise'>>()
    const {exerciseId} = route.params

    return <View>
        <Text>
            ModifyExercise Screen! (ID: {exerciseId})
        </Text>
    </View>
}
