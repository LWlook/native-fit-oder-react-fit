import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Col, Grid, Row} from "react-native-easy-grid";
import {exerciseCategoryColors, exerciseCategoryImages} from "../constants/style";
import {ExerciseCategory} from "../utils/getBadgeForExerciseCategory";

interface ExerciseItemProps {
    item: SearchExerciseDataItem

    onPress(): void
}

export type SearchExerciseDataItem = {
    id: number
    title: string
    category: ExerciseCategory
}

export const SearchExerciseItem: React.FC<ExerciseItemProps> = ({item, onPress}) => {

    const exerciseBackgroundColor = exerciseCategoryColors[item.category]
    const exerciseCategoryImage = exerciseCategoryImages[item.category]

    return <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.6}>
        <Grid style={{overflow: "hidden"}}>
            <Row style={styles.headContainer}>
                <Col style={[styles.exerciseCategoryImageContainer, {backgroundColor: exerciseBackgroundColor}]}>
                    <Image source={exerciseCategoryImage} style={styles.exerciseCategoryImage}/>
                </Col>
                <Col style={styles.exerciseTextContainer}>
                    <Text style={styles.exerciseHeading} numberOfLines={1}>{item.title}</Text>
                </Col>
            </Row>
        </Grid>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    exerciseTextContainer: {
        flexGrow: 8,
        marginLeft: 15,
        justifyContent: "center",
        alignItems: "flex-start"
    },
    exerciseCategoryImage: {
        width: 25,
        height: 25
    },
    exerciseCategoryImageContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"
    },
    exerciseCols: {
        alignItems: "center"
    },
    container: {
        margin: 4,
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        shadowOpacity: 0.26,
        elevation: 4,
        borderRadius: 4
    },
    headContainer: {
        padding: 8
    },
    exerciseHeading: {
        fontSize: 16,
        fontWeight: "bold"
    }
});
