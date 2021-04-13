import React, {useState} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Col, Grid, Row} from "react-native-easy-grid";
import {Ionicons} from '@expo/vector-icons';
import {colors, exerciseCategoryColors, exerciseCategoryImages} from "../constants/style";
import {SearchExerciseDataItem} from "./SearchExercisteItem";

interface ExerciseItemProps {
    item: ExerciseDataItem

    onPress(): void
    onToggleExpanded(): void
}

export interface ExerciseDataItem extends SearchExerciseDataItem {
    exerciseSet: ExerciseDataItemSet[]
    increaseInExerciseSet: boolean
}

export type ExerciseDataItemSet = {
    weight: number
    reps: number
}

export const ExpandExerciseItem: React.FC<ExerciseItemProps> = ({item, onPress, onToggleExpanded}) => {

    const [expanded, setExpanded] = useState<boolean>(false)
    const expandIconName = expanded ? "md-close" : "chevron-down"

    const exerciseBackgroundColor = exerciseCategoryColors[item.category]
    const exerciseCategoryImage = exerciseCategoryImages[item.category]
    const lastExerciseSet = item.exerciseSet[item.exerciseSet.length - 1]

    const toggleExpanded = () => {
        onToggleExpanded()
        setExpanded(prev => !prev)
    }

    return <TouchableOpacity onPress={toggleExpanded} style={styles.container} activeOpacity={0.6}>
        <Grid style={{overflow: "hidden"}}>
            <Row style={styles.headContainer}>
                <Col style={[styles.exerciseCategoryImageContainer, {backgroundColor: exerciseBackgroundColor}]}>
                    <TouchableOpacity onPress={onPress}>
                    <Image source={exerciseCategoryImage} style={styles.exerciseCategoryImage}/>
                    </TouchableOpacity>
                </Col>
                <Col style={styles.exerciseTextContainer}>
                    <Text style={styles.exerciseHeading}>{item.title}</Text>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        {item.increaseInExerciseSet &&
                        <Ionicons name="md-trending-up-outline" size={16} color={colors.increase}/>}
                        {!item.increaseInExerciseSet &&
                        <Ionicons name="md-trending-down-outline" size={16} color={colors.decrease}/>}
                        { lastExerciseSet && <Text style={styles.exerciseInfo}>{lastExerciseSet.reps}x {lastExerciseSet.weight} kg</Text> }
                    </View>
                </Col>
                <Col style={styles.closeIcon}>
                    <Ionicons name={expandIconName} size={32} color={colors.grey}/>
                </Col>
            </Row>

            { expanded && item.exerciseSet.map((exerciseSet, index) => (
                <Row style={styles.bodyContainer} key={index}>
                    <Col style={styles.exerciseCols}><Text>{ index + 1}</Text></Col>
                    <Col style={styles.exerciseCols}><Text>{exerciseSet.reps} reps</Text></Col>
                    <Col style={styles.exerciseCols}><Text>{exerciseSet.weight} kgs</Text></Col>
                </Row>
            ))}
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
        width: 35,
        height: 35
    },
    exerciseCategoryImageContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"
    },
    closeIcon: {
        flexGrow: 1,
        justifyContent: "center",
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
    bodyContainer: {
        paddingBottom: 10
    },
    exerciseHeading: {
        fontSize: 16
    },
    exerciseInfo: {
        marginLeft: 5,
        fontSize: 12
    }
});
