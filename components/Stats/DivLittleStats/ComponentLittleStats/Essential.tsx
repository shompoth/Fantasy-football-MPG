// Librairie
import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Essential(props) {
    return (
        <View style={styles.rowDiv}>
            <Text>{props.children}</Text>
            <Text style={styles.blueColor}>{props.stat}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    rowDiv: {
        flexDirection: "row",
        justifyContent: "space-between",
        maxWidth: "100%",
        paddingVertical: 2,
    },
    blueColor: {
        color: "#4054cc",
    },
});

export default Essential;
