import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Col, Grid, Row} from "react-native-easy-grid";
import {colors} from "../constants/style";
import {ExerciseCategory, getBadgeForExerciseCategory} from "../utils/getBadgeForExerciseCategory";

interface ExcerciseItemProps {
    item: ExcerciseDataItem

    onPress(): void
}

export type ExcerciseDataItem = {
    id: number
    title: string
    category: ExerciseCategory
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
                <Col><Text style={styles.header}>{item.title}</Text></Col>
                <Col style={styles.exerciseCategory}>{ getBadgeForExerciseCategory(item.category)}</Col>
            </Row>
            {item.exerciseSet.map((exerciseSet, index) => (
                <Row style={styles.bodyContainer} key={index}>
                    <Col><Text>{exerciseSet.reps} reps</Text></Col>
                    <Col><Text>{exerciseSet.weight} kg</Text></Col>
                </Row>
            ))}
        </Grid>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    exerciseCategory: {
      alignItems: "flex-end"
    },
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
    },
    bodyContainer: {
        margin: 8,
        textAlign: "center"
    },
    header: {
        fontWeight: "bold"
    }

});
