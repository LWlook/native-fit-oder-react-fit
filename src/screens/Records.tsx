import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import {Badge} from "../components/Badge";
import {colors} from "../constants/style";

export const Records: React.FC = () => {
    return <SafeAreaView style={styles.container}>
        <Badge text="Mein Badge" color={colors.black}/>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
