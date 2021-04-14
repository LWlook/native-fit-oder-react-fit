import React from "react";
import {ScrollView, StyleProp, StyleSheet, ViewStyle} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import {StatItem} from "../components/StatItem";
import {Col, Grid, Row} from "react-native-easy-grid";
import DropDownPicker, {ItemType} from 'react-native-dropdown-picker';
import {colors} from "../constants/style";
import {Ionicons} from "@expo/vector-icons";
import {SearchExerciseDataItem} from "../database/databaseTypes";

const containerStyle = {
    height: 50,
    margin: 4
}

const dropdownStyle = {
    backgroundColor: '#fafafa'
}

const dropdownItemStyle: StyleProp<ViewStyle> = {
    justifyContent: "flex-start"
}

const EXERCISES: SearchExerciseDataItem[] = [
    { id: 1, category: "biceps", title: "Bizeps Curls <3"},
    { id: 2, category: "abs", title: "Bauch"},
    { id: 3, category: "shoulders", title: "Schulter"},
]

const dropdownItems: ItemType[] = EXERCISES.map((e) => {
    return {
        label: e.title,
        value: e.id,
        // icon: () => <View style={[styles.exerciseCategoryImageContainer, {backgroundColor: colors.primary}]}><Image source={exerciseCategoryImages.biceps} style={styles.exerciseCategoryImage}/></View>
    }
})

export const Records: React.FC = () => {
    return <SafeAreaView style={styles.container}>
        <DropDownPicker
            items={dropdownItems}
            placeholder="Select an exercise"
            placeholderStyle={{color: colors.grey}}
            containerStyle={containerStyle}
            style={dropdownStyle}
            itemStyle={dropdownItemStyle}
            arrowColor={colors.grey}
            arrowSize={26}
            customArrowDown={(size, color) => <Ionicons name="chevron-down" size={size} color={color}/>}
            customArrowUp={(size, color) => <Ionicons name="chevron-up" size={size} color={color}/>}
        />

        <ScrollView>
            <Grid>
                <Row>
                    <Col><StatItem title="Last workout" value="2021-04-13"/></Col>
                </Row>
                <Row>
                    <Col><StatItem title="Total workouts" value="1"/></Col>
                    <Col><StatItem title="Total sets" value="2"/></Col>
                </Row>
                <Row>
                    <Col><StatItem title="Total reps" value="25"/></Col>
                    <Col><StatItem title="Total volume" value="1250 kgs"/></Col>
                </Row>
                <Row>
                    <Col><StatItem title="Max weight" value="50 kgs"/></Col>
                    <Col><StatItem title="Max reps" value="25"/></Col>
                </Row>
            </Grid>
        </ScrollView>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
});
