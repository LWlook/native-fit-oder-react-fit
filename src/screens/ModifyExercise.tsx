import React, {useEffect, useState} from "react";
import {StyleSheet, View, ToastAndroid} from "react-native";
import {HomeStackParamList} from "../navigators/HomeNavigator";
import {RouteProp, useRoute} from "@react-navigation/native";
import {ExerciseInput} from "../components/ExerciseInput";
import {Button} from "../components/Button";
import {Sets} from "../components/Sets";

export const ModifyExercise: React.FC = () => {
    const route = useRoute<RouteProp<HomeStackParamList, 'ModifyExercise'>>()
    const {exerciseId, mode} = route.params
    const [weight, setWeight] = useState<number | null>(null)
    const [reps, setReps] = useState<number | null>(null)

    useEffect(() => {
        ToastAndroid.show("Screen started in mode: " + mode, ToastAndroid.SHORT);
    }, [])

    return <View style={styles.container}>
        <View>
        <ExerciseInput title="Weight" value={weight} onChangeValue={setWeight} stepSize={2.5}/>
        <ExerciseInput title="Reps" value={reps} onChangeValue={setReps} stepSize={1}/>
        <View style={styles.buttonContainer}>
            <Button title="SAVE" onPress={() => console.log("save")}/>
            <Button title="CLEAR" onPress={() => console.log("clear")}/>
        </View>
        </View>
        <View style={styles.sets}>
            <Sets sets={
                [
                    {
                        weight: 2,
                        reps: 2,
                        id: 1
                    },
                    {
                        weight: 2,
                        reps: 2,
                        id: 2
                    },
                    {
                        weight: 2,
                        reps: 2,
                        id: 3
                    },
                    {
                        weight: 2,
                        reps: 2,
                        id: 4
                    },
                    {
                        weight: 2,
                        reps: 2,
                        id: 5
                    },
                    {
                        weight: 2,
                        reps: 2,
                        id: 6
                    }
                ]
            } />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        maxWidth: 350,
        marginLeft: "auto",
        marginRight: "auto",
        flex: 1
    },
    buttonContainer: {
        flexDirection: "row",
        marginBottom: 15
    },
    sets: {
        flex: 1
    },
});
