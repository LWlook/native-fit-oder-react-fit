import React, {useState} from "react";
import {FlatList, ListRenderItem, SafeAreaView, StyleSheet, TextInput, View, Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import {HomeStackParamList} from "../navigators/HomeNavigator";
import {SearchExerciseDataItem, SearchExerciseItem} from "../components/SearchExercisteItem";

const EXERCISES: SearchExerciseDataItem[] = [
    { id: 1, category: "biceps", title: "Bizeps Curls <3"},
    { id: 2, category: "abs", title: "Bauch"},
    { id: 3, category: "shoulders", title: "Schulter"},
]

export const ChooseExercise = () => {
    const [exercises, setExercises] = useState<SearchExerciseDataItem[]>(EXERCISES)
    const navigation = useNavigation()

    const renderItem: ListRenderItem<SearchExerciseDataItem> = ({item}) => {
        return <SearchExerciseItem item={item} onPress={() => navigation.navigate('ModifyExercise', {exerciseId: 25, mode: 'create', exerciseName: item.title})} />
    }

    const filterExercises = (filter: string) => {
        setExercises(EXERCISES.filter((ex) => ex.title.toLowerCase().startsWith(filter.toLowerCase())))
    }

    return <SafeAreaView style={styles.container}>

        <View style={styles.inputContainer}>
            <TextInput style={styles.input} onChangeText={filterExercises}/>
            <Ionicons name="md-search" color='black' size={22}/>
        </View>

        <FlatList<SearchExerciseDataItem>
            data={exercises}
            renderItem={renderItem}
            keyExtractor={item => item.id + ''}
            contentContainerStyle={styles.flatlistContainer}
        />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8
    },
    input: {
        flexGrow: 1,
        fontSize: 16,
    },
    inputContainer: {
        borderWidth: 1,
        marginHorizontal: 8,
        padding: 4,
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    flatlistContainer: {
        paddingBottom: 8
    }
});
