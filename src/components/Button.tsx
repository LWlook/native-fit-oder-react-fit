import React from "react";
import {StyleSheet, TouchableOpacity, Text} from "react-native";
import {colors} from "../constants/style";

interface ButtonProps {
    title: string
}

export const Button: React.FC<ButtonProps> = ({children, title}) => {
    return <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 4,
        alignItems: "center",
        margin: 4,
        flexGrow: 1
    },
    buttonText: {
        color: colors.white,
    }
});