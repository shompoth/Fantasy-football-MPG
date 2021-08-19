// Librairies
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

function BigStats(props) {
    return (
        <View style={styles.presentationDiv}>
            <Text style={styles.textCenter16}>{props.children}</Text>

            {props.card ? (
                <View style={styles.row}>
                    <Text
                        style={{
                            ...styles.card18,
                            marginRight: 5,
                            backgroundColor: Colors.danger,
                        }}
                    >
                        {props.redCard}
                    </Text>
                    <Text
                        style={{
                            ...styles.card18,
                            backgroundColor: Colors.warning,
                        }}
                    >
                        {props.yellowCard}
                    </Text>
                </View>
            ) : (
                <Text style={styles.blueTextCenter16}>
                    {props.stats}{" "}
                    {props.parenthesisStats && `(${props.parenthesisStats})`}
                </Text>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    presentationDiv: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 7,
        paddingBottom: 15,
        paddingHorizontal: 5,
    },
    textCenter16: {
        fontSize: 16,
        textAlign: "center",
    },
    blueTextCenter16: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
        color: Colors.secondary,
        marginTop: 3,
    },
    row: {
        flexDirection: "row",
    },
    card18: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 5,
        color: Colors.light,
        paddingHorizontal: 2,
    },
});

export default BigStats;
