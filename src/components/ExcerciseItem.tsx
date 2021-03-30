import React from "react";
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Col, Grid, Row} from "react-native-easy-grid";
import {colors} from "../constants/style";

interface ExcerciseItemProps {
    item: ExcerciseDataItem

    onPress(): void
}

export type ExcerciseDataItem = {
    id: number
    title: string
    exerciseSet: ExcerciseDataItemSet[]
}

export type ExcerciseDataItemSet = {
    weight: number
    reps: number
}

export const ExcerciseItem: React.FC<ExcerciseItemProps> = ({item, onPress}) => {

    return <TouchableOpacity onPress={onPress} style={styles.container}>
        <Grid>
            <Row style={styles.headContainer}>
                <Text>{item.title}</Text>
            </Row>
            {item.exerciseSet.map((excerciseSet, index) => (
                <Row style={styles.bodyContainer} key={index}>
                    <Col><Text>{excerciseSet.reps} reps</Text></Col>
                    <Col><Text>{excerciseSet.weight} kg</Text></Col>
                </Row>
            ))}
        </Grid>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        backgroundColor: '#fff',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    }, headContainer: {
        padding: 8,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary,
        alignItems: "center"
    },
    bodyContainer: {
        margin: 8,
        textAlign: "center"
    }

});