import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {CalendarList, DateObject} from "react-native-calendars";
import {Dimensions, StyleSheet} from "react-native";
import {useSelectedDate} from "../zustand/useSelectedDate";
import {useNavigation} from "@react-navigation/native";
import {colors} from "../constants/style";

const deviceWidth = Dimensions.get('window').width

export const Calendar: React.FC = () => {

    const {selectedDate, setSelectedDate} = useSelectedDate()
    const navigation = useNavigation()

    const handleDayPress = (dateObject: DateObject) => {
        setSelectedDate(dateObject.dateString)
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.container}>
            <CalendarList
                style={{width: deviceWidth}}
                onDayPress={handleDayPress}
                markedDates={{
                    [selectedDate]: {selected: true}
                }}
                theme={{
                    selectedDayBackgroundColor: colors.primary,
                    todayTextColor: colors.primary
                }}
                pastScrollRange={12}
                futureScrollRange={0}
                scrollEnabled={true}
                showScrollIndicator={true}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
