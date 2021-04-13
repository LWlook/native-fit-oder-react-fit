import React, {useEffect, useState, useRef} from "react";
import {FlatList, ListRenderItem, SafeAreaView, StyleSheet} from 'react-native';
import {ExerciseDataItem, ExerciseItem} from "../components/ExerciseItem";
import {useNavigation} from "@react-navigation/native";
import {FloatingAction} from "react-native-floating-action";
import {Ionicons} from "@expo/vector-icons";
import {colors} from "../constants/style";
import {LiftedWeightCard} from "../components/LiftedWeightCard";
import {useSelectedDate} from "../zustand/useSelectedDate";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import {CalendarModal} from "../components/CalendarModal";
import {sqliteGetAllExerciseData} from "../database/sqliteTypeSave";
import {Transition, Transitioning} from "react-native-reanimated";

export const Exercises: React.FC = () => {
    const navigation = useNavigation()
    const [calendarModalVisible, setCalendarModalVisible] = useState<boolean>(false)
    const [selectedId, setSelectedId] = useState<number>(0)
    const [allExerciseData, setAllExerciseData] = useState<ExerciseDataItem[]>([])
    const selectedDate = useSelectedDate(state => state.selectedDate)

    const transitionRef = useRef<any>()
    const transition = <Transition.Change interpolation="easeInOut"/>

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Choose date"
                          iconName='calendar'
                          onPress={() => setCalendarModalVisible(true)}
                    />
                </HeaderButtons>
            ),
            title: selectedDate
        });
    }, [navigation, selectedDate]);


    useEffect(() => {
        sqliteGetAllExerciseData().then(data => setAllExerciseData(data));
        // TODO: Lukas
        // const fetchExercisesSync = async () => {
        //     const exercises = await fetchTypeSaveSql<ExerciseDataItem>('select * from items where done = ?;', [0])
        //     console.log(exercises)
        // }
        //
        // fetchExercisesSync().then()
    }, []);

const renderItem: ListRenderItem<ExerciseDataItem> = ({item}) => {
    return <ExerciseItem onToggleExpanded={() => transitionRef.current.animateNextTransition()} item={item} onPress={() => navigation.navigate('ModifyExercise', {
        exerciseId: 25,
        mode: 'edit',
        exerciseName: item.title,
    })}/>;
}

    return <>
        <CalendarModal modalVisible={calendarModalVisible} setModalVisible={setCalendarModalVisible}/>
        <SafeAreaView style={styles.container}>
            <LiftedWeightCard/>
            <FlatList<ExerciseDataItem>
                data={allExerciseData}
                renderItem={renderItem}
                keyExtractor={item => item.id + ''}
                contentContainerStyle={styles.flatlistContainer}
            />
        <Transitioning.View ref={transitionRef} transition={transition} style={{flex: 1}}>
        <FlatList<ExerciseDataItem>
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id + ''}
            contentContainerStyle={styles.flatlistContainer}
        />
        </Transitioning.View>
            <FloatingAction
                actions={[{
                    name: "bt_fab_add",
                    icon: <Ionicons name="md-add" color={'white'} size={32}/>
                }]}
                onPressItem={name => {
                    navigation.navigate('ChooseExercise')
                }}
                color={colors.primary}
                overrideWithAction={true}
            />
        </SafeAreaView>
    </>
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
        increaseInExerciseSet: false,
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
        increaseInExerciseSet: true,
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
        increaseInExerciseSet: false,
        exerciseSet: [
            {weight: 80, reps: 5},
            {weight: 100, reps: 5},
            {weight: 120, reps: 5}
        ]
    },
];
