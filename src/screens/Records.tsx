import React from "react";
import {ScrollView, StyleProp, StyleSheet, ViewStyle, SafeAreaView} from "react-native";
import {StatItem} from "../components/StatItem";
import {Col, Grid, Row} from "react-native-easy-grid";
import DropDownPicker, {ItemType} from 'react-native-dropdown-picker';
import {colors} from "../constants/style";
import {Ionicons} from "@expo/vector-icons";
import {SearchExerciseDataItem} from "../database/databaseTypes";
import ExerciseIcon from "../components/ExerciseIcon";

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
    {rowid: 1, category: "biceps", title: "Bizeps Curls <3"},
    {rowid: 2, category: "abs", title: "Bauch"},
    {rowid: 3, category: "shoulders", title: "Schulter"},
]

const dropdownItems: ItemType[] = EXERCISES.map((e) => ({
    label: e.title,
    value: e.rowid,
    icon: () => <ExerciseIcon category={e.category} size={30} imageSize={23}/>
}))

export const Records: React.FC = () => {
    return <SafeAreaView style={styles.container}>
        <DropDownPicker
            items={dropdownItems}
            placeholder="Select an exercise"
            placeholderStyle={{color: colors.grey}}
            containerStyle={containerStyle}
            style={dropdownStyle}
            itemStyle={dropdownItemStyle}
            labelStyle={styles.dropdownLabelStyle}
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
    dropdownLabelStyle: {
        textAlignVertical: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
});
