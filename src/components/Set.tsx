import React from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export interface SetProps {
    weight: number
    reps: number
    id: number
}

export interface SetPropsWithCount extends SetProps{
    count: number
    onPress(): void
}

export const Set: React.FC<SetPropsWithCount> = ({count, reps, weight, onPress}) => {
    return <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text><Text style={styles.boldText}>{count}</Text></Text>
        <Text><Text style={styles.boldText}>{reps}</Text><Text> reps</Text></Text>
        <Text><Text style={styles.boldText}>{weight}</Text><Text> kgs</Text></Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderWidth: 1,
        padding: 4,
        paddingVertical: 8,
        borderRadius: 4,
        marginVertical: 3
    },
    boldText: {
        fontWeight: "bold"
    }
});
