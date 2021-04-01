import React from "react";
import {View} from "react-native";
import {Button} from "../components/Button";
import {useNavigation} from "@react-navigation/native";

export const ChooseExercise = () => {
    const navigation = useNavigation()

    return <View>
        <Button title={"Take me to the next screen!"} onPress={() => navigation.navigate('ModifyExercise', {exerciseId: 25})}/>
    </View>
}
