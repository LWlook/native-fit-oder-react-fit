import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {colors} from "../constants/style";

export const LiftedWeightCard: React.FC = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>7.500 kg lifted</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
      fontWeight: "bold",
        color: colors.white,
        fontSize: 18
    },
    card: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
        height: "8%",
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: colors.primary,
        borderRadius: 8,
    }
});
