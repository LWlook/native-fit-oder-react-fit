import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {colors} from "../constants/style";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const LiftedWeightCard: React.FC = () => {
    return (
        <View style={styles.card}>
            <MaterialCommunityIcons name="dumbbell" size={24} color="white" />
            <Text style={styles.text}>7.500 kg lifted</Text>
            <MaterialCommunityIcons name="dumbbell" size={24} color="white" />
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
        justifyContent: "space-around",
        alignItems: "center",
        margin: 8,
        height: "6.5%",
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: colors.primary,
        borderRadius: 8,
    }
});
