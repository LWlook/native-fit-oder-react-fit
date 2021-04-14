import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from "../constants/style";
import {MaterialCommunityIcons} from '@expo/vector-icons';

interface LiftedWeightCardProps {
    value: number
}

export const LiftedWeightCard: React.FC<LiftedWeightCardProps> = ({value}) => {
    if (value == 0) return null
    return (
        <View style={styles.card}>
            <MaterialCommunityIcons name="dumbbell" size={24} color="white" />
            <Text style={styles.text}>{value} kgs lifted</Text>
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
        marginVertical: 6,
        marginHorizontal: 4,
        height: "6.5%",
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.26,
        elevation: 4,
        backgroundColor: colors.primary,
        borderRadius: 4,
    }
});
