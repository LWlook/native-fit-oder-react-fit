import React, {useEffect, useState} from "react";
import {StyleProp, StyleSheet, Text, View, ViewStyle} from "react-native";
import {ItemType} from 'react-native-dropdown-picker';
import ExerciseIcon from "../components/ExerciseIcon";
import {useExercisesList} from "../zustand/useExercisesList";
import {RecordItem, SearchExerciseDataItem} from "../database/databaseTypes";
import {sqliteGetRecordsPerExercise} from "../database/sqliteTypeSave";

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

export const Records: React.FC = () => {
    const exercisesList = useExercisesList(e => e.exercisesList)
    const dropdownItems: ItemType[] = exercisesList.map((e) => ({
        label: e.title,
        value: e.rowid,
        icon: () => <ExerciseIcon category={e.category} size={30} imageSize={23}/>
    }))
    const [recordItem, setRecordItem] = useState<RecordItem | null>(null)
    const [selectedExercise, setSelectedExercise] = useState<SearchExerciseDataItem | null>(null)

    useEffect(() => {
        if (selectedExercise == null) return
        sqliteGetRecordsPerExercise(selectedExercise).then(d => setRecordItem(d))
    }, [selectedExercise])

    return <View style={styles.container}>
        <Text>
            Records will be displayed here.
        </Text>

        {/*<DropDownPicker*/}
        {/*    items={dropdownItems}*/}
        {/*    onChangeItem={(t: ItemType) => setSelectedExercise({title: t.label, category: "chest", rowid: t.value})}*/}
        {/*    placeholder="Select an exercise"*/}
        {/*    placeholderStyle={{color: colors.grey}}*/}
        {/*    containerStyle={containerStyle}*/}
        {/*    style={dropdownStyle}*/}
        {/*    itemStyle={dropdownItemStyle}*/}
        {/*    labelStyle={styles.dropdownLabelStyle}*/}
        {/*    arrowColor={colors.grey}*/}
        {/*    arrowSize={26}*/}
        {/*    customArrowDown={(size, color) => <Ionicons name="chevron-down" size={size} color={color}/>}*/}
        {/*    customArrowUp={(size, color) => <Ionicons name="chevron-up" size={size} color={color}/>}*/}
        {/*/>*/}

        {/*{recordItem &&*/}
        {/*<ScrollView>*/}
        {/*    <Grid>*/}
        {/*        <Row>*/}
        {/*            <Col><StatItem title="Last workout" value={recordItem.lastExerciseDate.toString()}/></Col>*/}
        {/*        </Row>*/}
        {/*        <Row>*/}
        {/*            <Col><StatItem title="Total workouts" value={recordItem.totalWorkouts.toString()}/></Col>*/}
        {/*            <Col><StatItem title="Total sets" value={recordItem.totalSets.toString()}/></Col>*/}
        {/*        </Row>*/}
        {/*        <Row>*/}
        {/*            <Col><StatItem title="Total reps" value={recordItem.totalReps.toString()}/></Col>*/}
        {/*            <Col><StatItem title="Total volume" value={recordItem.totalWeight.toString()}/></Col>*/}
        {/*        </Row>*/}
        {/*        <Row>*/}
        {/*            <Col><StatItem title="Max weight" value={recordItem.maxWeight.toString()}/></Col>*/}
        {/*            <Col><StatItem title="Max reps" value={recordItem.maxReps.toString()}/></Col>*/}
        {/*        </Row>*/}
        {/*    </Grid>*/}
        {/*</ScrollView>*/}
        {/*}*/}
    </View>
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
