import React from "react";
import {StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import ActionButton from "react-native-action-button";
import {colors} from "../constants/style";

export const Calendar: React.FC = () => {
    return <SafeAreaView style={styles.container}>

        <ActionButton buttonColor={colors.primary}
                      onPress={() => {
                          console.log("hi")
                      }}>
        </ActionButton>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
