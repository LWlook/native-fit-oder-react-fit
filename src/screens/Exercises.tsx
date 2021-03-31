import React, {useEffect, useLayoutEffect, useState} from "react";
import {FlatList, ListRenderItem, SafeAreaView, StatusBar, StyleSheet, View, Text, Button} from 'react-native';
import {ExerciseDataItem, ExerciseItem} from "../components/ExerciseItem";
import {useNavigation} from "@react-navigation/native";
import {FloatingAction} from "react-native-floating-action";
import {Ionicons} from "@expo/vector-icons";
import {colors} from "../constants/style";
import {LiftedWeightCard} from "../components/LiftedWeightCard";
import {useSelectedDate} from "../zustand/useSelectedDate";

export const Exercises: React.FC = () => {
    const navigation = useNavigation()
    const [selectedId, setSelectedId] = useState<number>(0);
    const selectedDate = useSelectedDate(state => state.selectedDate)

    useLayoutEffect(() => {
        navigation.setOptions({title: selectedDate})
    }, [selectedDate])

    useEffect(() => {

        // TODO: Lukas
        // const fetchExercisesSync = async () => {
        //     const exercises = await fetchTypeSaveSql<ExerciseDataItem>('select * from items where done = ?;', [0])
        //     console.log(exercises)
        // }
        //
        // fetchExercisesSync().then()
    });


    const renderItem: ListRenderItem<ExerciseDataItem> = ({item}) => {
        return <ExerciseItem item={item} onPress={() => setSelectedId(item.id)}/>;
    }

    return <SafeAreaView style={styles.container}>
        <LiftedWeightCard />
        <FlatList<ExerciseDataItem>
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id + ''}
            extraData={selectedId}
            contentContainerStyle={styles.flatlistContainer}
        />
        <FloatingAction
            actions={[{
                name: "bt_fab_add",
                icon: <Ionicons name="md-add" color={'white'} size={32}/>
            }]}
            onPressItem={name => {
                navigation.navigate('ChoseExercise', {exerciseId: 25})
            }}
            color={colors.primary}
            overrideWithAction={true}
        />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#eee',
    },
    flatlistContainer: {
        paddingBottom: 8
    }
});


const DATA: ExerciseDataItem[] = [
    {
        id: 0,
        title: 'Flat Barbell Bench Press',
        category: "chest",
        exerciseSet: [
            {weight: 80, reps: 5},
            {weight: 100, reps: 5},
            {weight: 120, reps: 5}
        ]
    },
    {
        id: 1,
        category: "biceps",
        title: 'Close Grip Barbell Bench Press',
        exerciseSet: [
            {weight: 80, reps: 5},
            {weight: 100, reps: 5},
            {weight: 120, reps: 5}
        ]
    },
    {
        id: 2,
        category: "shoulders",
        title: 'Incline Dumbbell Fly',
        exerciseSet: [
            {weight: 80, reps: 5},
            {weight: 100, reps: 5},
            {weight: 120, reps: 5}
        ]
    },
];
