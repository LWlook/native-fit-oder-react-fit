import React from "react";
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import {Exercises} from "../screens/Exercises";
import {stackNavOptions} from "../utils/stackNavOptions";
import {ModifyExercise} from "../screens/ModifyExercise";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import {Calendar} from "../components/Calendar";
import {ChooseExercise} from "../screens/ChooseExercise";

export type HomeStackParamList = {
    ChooseExercise: undefined,
    Exercises: undefined,
    Calendar: undefined
    ModifyExercise: {
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
        <Stack.Screen name="ChooseExercise" component={ChooseExercise}/>
        <Stack.Screen name="ModifyExercise" component={ModifyExercise}/>
        <Stack.Screen name="Calendar" component={Calendar} options={{title: "Choose date"}}/>
    </Stack.Navigator>
}

