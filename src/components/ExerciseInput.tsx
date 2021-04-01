import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import React from "react";
import {colors} from "../constants/style";

interface ExerciseInputProps {
    title: string
    value: number
    stepSize: number
    onChangeValue: React.Dispatch<React.SetStateAction<number>>

}

export const ExerciseInput: React.FC<ExerciseInputProps> = ({ title, onChangeValue, stepSize, value}) => {

    const reduceValue = () => {
        onChangeValue((prevValue) => {
            let newValue = prevValue - stepSize
            if (newValue < 0) newValue = 0
            return newValue
        })
    }

    const increaseValue = () => {
        onChangeValue((prevValue) => {
            return prevValue + stepSize
        })
    }

    const changeValue = (value: string) => {
        let numericValue = parseInt(value.replace(/[^0-9]/g, ''))
        if (isNaN(numericValue)) numericValue = 0;
        onChangeValue(numericValue)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{ title }</Text>
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.button} onPress={reduceValue}>
                    <FontAwesome name="minus" size={24} color="black"/>
                </TouchableOpacity>
                <TextInput style={styles.input} value={value.toString()} onChangeText={changeValue} keyboardType="numeric"/>
                <TouchableOpacity style={styles.button} onPress={increaseValue}>
                    <FontAwesome name="plus" size={24} color="black"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        marginVertical: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8
    },
    input: {
        borderBottomWidth: 1,
        marginHorizontal: 8,
        padding: 4,
        flexGrow: 1,
        borderRadius: 4
    },
    inputContainer: {
        flexDirection: "row",
    },
    button: {
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 4,
        padding: 8,
    }
});
