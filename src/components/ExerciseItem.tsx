import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Col, Grid, Row} from "react-native-easy-grid";
import {colors} from "../constants/style";
import {ExerciseCategory, getBadgeForExerciseCategory} from "../utils/getBadgeForExerciseCategory";

interface ExerciseItemProps {
    item: ExerciseDataItem

    onPress(): void
}

export type ExerciseDataItem = {
    id: number
    title: string
    category: ExerciseCategory
    exerciseSet: ExerciseDataItemSet[]
}

export type ExerciseDataItemSet = {
    weight: number
    reps: number
}

export const ExerciseItem: React.FC<ExerciseItemProps> = ({item, onPress}) => {

    return <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.5}>
        <Grid>
            <Row style={styles.headContainer}>
                <Col style={{flex: 3}}><Text style={styles.header}>{item.title}</Text></Col>
                <Col style={styles.exerciseCategory}>{ getBadgeForExerciseCategory(item.category)}</Col>
            </Row>
            {item.exerciseSet.map((exerciseSet, index) => (
                <Row style={styles.bodyContainer} key={index}>
                    <Col style={styles.exerciseCols}><Text>{exerciseSet.reps} reps</Text></Col>
                    <Col style={styles.exerciseCols}><Text>{exerciseSet.weight} kg</Text></Col>
                </Row>
            ))}
        </Grid>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    exerciseCategory: {
      alignItems: "flex-end",
        flex: 1
    },
    exerciseCols: {
      alignItems: "center"
    },
    container: {
        margin: 8,
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.26,
        elevation: 8,
        borderRadius: 8
    },
    headContainer: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
    },
    bodyContainer: {
        margin: 8,
    },
    header: {
        fontWeight: "bold"
    }

});
