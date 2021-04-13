import React, {useEffect, useState} from "react";
import {StyleSheet, View, ToastAndroid, TouchableWithoutFeedback} from "react-native";
import {HomeStackParamList} from "../navigators/HomeNavigator";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {ExerciseInput} from "../components/ExerciseInput";
import {Button} from "../components/Button";
import {Sets} from "../components/Sets";
import {colors} from "../constants/style";

export const ModifyExercise: React.FC = () => {
    const route = useRoute<RouteProp<HomeStackParamList, 'ModifyExercise'>>()
    const navigation = useNavigation()
    const {exerciseId, mode, exerciseName} = route.params
    const [weight, setWeight] = useState<number | null>(null)
    const [reps, setReps] = useState<number | null>(null)
    const [modifySetId, setModifySetId] = useState<number | null>(null)

    const isSetSelected = modifySetId != null

    const pressedSet = (id: number) => {
        setModifySetId(id)

    }

    const saveSet = () => {
        // TODO
    }

    const updateSet = () => {
        // TODO
        setModifySetId(null)
    }

    const deleteSet = () => {
        // TODO
        setModifySetId(null)
    }

    const clearValues = () => {
        setWeight(null)
        setReps(null)
    }


    React.useLayoutEffect(() => {
        console.log(exerciseName)
        navigation.setOptions({
            title: exerciseName
        });
    }, [navigation, exerciseName]);

    useEffect(() => {
        ToastAndroid.show("Screen started in mode: " + mode, ToastAndroid.SHORT);
    }, [])

    return <View style={styles.container}>
                <View>
                    <ExerciseInput title="Weight" value={weight} onChangeValue={setWeight} stepSize={2.5}/>
                    <ExerciseInput title="Reps" value={reps} onChangeValue={setReps} stepSize={1}/>
                    <View style={styles.buttonContainer}>
                        {!isSetSelected && <Button title="SAVE" onPress={saveSet}/>}
                        {!isSetSelected && <Button title="CLEAR" onPress={clearValues}/>}
                        {isSetSelected && <Button title="UPDATE" onPress={updateSet} backgroundColor={colors.update}/>}
                        {isSetSelected && <Button title="DELETE" onPress={deleteSet} backgroundColor={colors.delete}/>}
                    </View>
                </View>
                <View style={styles.sets}>
                    <Sets onPress={pressedSet} sets={
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
                    }/>
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
