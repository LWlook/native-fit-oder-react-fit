import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {HomeStackParamList} from "../navigators/HomeNavigator";
import {RouteProp, useRoute} from "@react-navigation/native";
import {ExerciseInput} from "../components/ExerciseInput";

export const ChoseExercise: React.FC = () => {
    const route = useRoute<RouteProp<HomeStackParamList, 'ChoseExercise'>>()
    const {exerciseId} = route.params
    const [weight, setWeight] = useState<number>(0)
    const [reps, setReps] = useState<number>(0)

    return <View style={styles.container}>
        <ExerciseInput title="Weight" value={weight} onChangeValue={setWeight} stepSize={2.5}/>
        <ExerciseInput title="Reps" value={reps} onChangeValue={setReps} stepSize={1}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    }
});
