import React, {useEffect, useRef, useState} from "react";
import {FlatList, ListRenderItem, SafeAreaView, StyleSheet} from 'react-native';
import {ExpandExerciseItem} from "../components/ExpandExerciseItem";
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
import {Transition, Transitioning, TransitioningView} from "react-native-reanimated";
import {ExerciseDataItem} from "../database/databaseTypes";

export const Exercises: React.FC = () => {
    const navigation = useNavigation()
    const [calendarModalVisible, setCalendarModalVisible] = useState<boolean>(false)
    const [allExerciseData, setAllExerciseData] = useState<ExerciseDataItem[]>([])
    const selectedDate = useSelectedDate(state => state.selectedDate)

    const transitionRef = useRef<TransitioningView | null>(null)
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
        return <ExpandExerciseItem onToggleExpanded={() => transitionRef.current?.animateNextTransition()} item={item}
                                   onPress={() => navigation.navigate('ModifyExercise', {
                                 exerciseId: 25,
                                 mode: 'edit',
                                 exerciseName: item.title,
                             })}/>;
    }

    return <>
        <CalendarModal modalVisible={calendarModalVisible} setModalVisible={setCalendarModalVisible}/>
        <SafeAreaView style={styles.container}>
            <LiftedWeightCard/>
            <Transitioning.View ref={transitionRef} transition={transition} style={{flex: 1}}>
                <FlatList<ExerciseDataItem>
                    data={allExerciseData}
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
