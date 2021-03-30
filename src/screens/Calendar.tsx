import React from "react";
import {StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import ActionButton from "react-native-action-button";

export const Calendar: React.FC = () => {
    return <SafeAreaView style={styles.container}>

        <ActionButton buttonColor="rgba(231,76,60,1)"
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
