import React, {useState} from "react";
import {FlatList, ListRenderItem, SafeAreaView, StyleSheet, TextInput, View, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";

interface Exercise {
    id: number
    name: string
}

const EXERCISES: Exercise[] = [
    { id: 1, name: "Bankdrücken"},
    { id: 2, name: "Bizeps Curls"},
]

export const ChooseExercise = () => {
    const [exercises, setExercises] = useState<Exercise[]>(EXERCISES)
    const navigation = useNavigation()

    const renderItem: ListRenderItem<Exercise> = ({item}) => {
        return <View style={styles.exercise}><Text>{ item.name }</Text></View>
    }

    const filterExercises = (filter: string) => {
        setExercises(EXERCISES.filter((ex) => ex.name.toLowerCase().startsWith(filter.toLowerCase())))
    }

    return <SafeAreaView style={styles.container}>

        <View style={styles.inputContainer}>
            <TextInput style={styles.input} onChangeText={filterExercises}/>
            <Ionicons name="md-search" color='black' size={22}/>
        </View>

        <FlatList<Exercise>
            data={exercises}
            renderItem={renderItem}
            keyExtractor={item => item.id + ''}
            contentContainerStyle={styles.flatlistContainer}
        />

        {/*<Button title={"Take me to the next screen!"} onPress={() => navigation.navigate('ModifyExercise', {exerciseId: 25})}/>*/}
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
    },
    exercise: {
        borderBottomWidth: 1,
        padding: 4
    }
});
