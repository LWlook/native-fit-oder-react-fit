import React, {useState} from "react";
import {FlatList, ListRenderItem, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {ExcerciseDataItem, ExcerciseItem} from "../components/ExcerciseItem";
import {FloatingAction} from "react-native-floating-action";
import {Ionicons} from "@expo/vector-icons";

export const Calendar: React.FC = () => {
    const [selectedId, setSelectedId] = useState<number>(0);

    const renderItem: ListRenderItem<ExcerciseDataItem> = ({item}) => {
        return <ExcerciseItem item={item} onPress={() => setSelectedId(item.id)}/>;
    }

    return <SafeAreaView style={styles.container}>
        <FlatList<ExcerciseDataItem>
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id + ''}
            extraData={selectedId}
        />
        <FloatingAction
            actions={[{
                name: "bt_fab_add",
                icon: <Ionicons name="md-add" color={'white'} size={32}/>
            }]}
            onPressItem={name => {
                console.log(`selected button: ${name}`);
            }}
            overrideWithAction={true}
        />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
    }
});


const DATA: ExcerciseDataItem[] = [
    {
        id: 0,
        title: 'Flat Barbell Bench Press',
        exerciseSet: [
            {weight: 80, reps: 5},
            {weight: 100, reps: 5},
            {weight: 120, reps: 5}
        ]
    },
    {
        id: 1,
        title: 'Close Grip Barbell Bench Press',
        exerciseSet: [
            {weight: 80, reps: 5},
            {weight: 100, reps: 5},
            {weight: 120, reps: 5}
        ]
    },
    {
        id: 2,
        title: 'Incline Dumbbell Fly',
        exerciseSet: [
            {weight: 80, reps: 5},
            {weight: 100, reps: 5},
            {weight: 120, reps: 5}
        ]
    },
];
