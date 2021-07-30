// Librairie
import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Parenthesis(props) {
    return (
        <View style={styles.rowDiv}>
            <Text>{props.children}</Text>
            <View style={styles.row}>
                <Text style={styles.blueColor}>{props.stat} </Text>
                {props.secondary && (
                    <Text>
                        ({props.secondary}
                        {props.pourcentage && <Text>%</Text>})
                    </Text>
                )}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
    },
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

export default Parenthesis;
