import React from "react";
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import {Exercises} from "../screens/Exercises";
import {stackNavOptions} from "../utils/stackNavOptions";
import {ChoseExercise} from "../screens/ChoseExercise";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import {Calendar} from "../components/Calendar";

export type HomeStackParamList = {
    Exercises: undefined,
    Calendar: undefined
    ChoseExercise: {
        exerciseId: number
    }
}

const Stack = createStackNavigator<HomeStackParamList>();

const exercisesScreenOptions = ({navigation, route}: any) => ({
    headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Choose date"
                  iconName='calendar'
                  onPress={() => navigation.navigate('Calendar')}/>
        </HeaderButtons>
    )
})

export const HomeNavigator: React.FC = () => {
    return <Stack.Navigator screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        ...stackNavOptions,
    }}>
        <Stack.Screen name="Exercises" component={Exercises} options={exercisesScreenOptions}/>
        <Stack.Screen name="ChoseExercise" component={ChoseExercise}/>
        <Stack.Screen name="Calendar" component={Calendar}/>
    </Stack.Navigator>
}

