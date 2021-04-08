import React, {useCallback, useMemo} from "react";
import {DateObject, Calendar} from "react-native-calendars";
import {StyleSheet, View, Modal, TouchableWithoutFeedback, Dimensions} from "react-native";
import {useSelectedDate} from "../zustand/useSelectedDate";
import {colors} from "../constants/style";

interface CalendarModalProps {
    modalVisible: boolean
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const calendarTheme = {
    selectedDayBackgroundColor: colors.primary,
    todayTextColor: colors.primary,
    arrowColor: colors.primary
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const CalendarModal: React.FC<CalendarModalProps> = ({modalVisible, setModalVisible}) => {
    const {selectedDate, setSelectedDate} = useSelectedDate()

    const handleDayPress = useCallback((dateObject: DateObject) => {
        setSelectedDate(dateObject.dateString)
        setModalVisible(false)
    }, [setSelectedDate, setModalVisible])

    return (
        <Modal animationType="fade"
               transparent={true}
               visible={modalVisible}
               onRequestClose={() => setModalVisible(false)}>

            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                <View style={styles.modalOverlay}/>
            </TouchableWithoutFeedback>

            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Calendar
                        markedDates={{[selectedDate]: {selected: true}}}
                        theme={calendarTheme}
                        onDayPress={handleDayPress}
                        style={{
                            width: 0.8 * windowWidth,
                            height: 0.5 * windowHeight
                        }}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
});
