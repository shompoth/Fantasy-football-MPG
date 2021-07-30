//Librairies
import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
                            backgroundColor: "#ca2e2a",
                        }}
                    >
                        {props.redCard}
                    </Text>
                    <Text
                        style={{
                            ...styles.card18,
                            backgroundColor: "#f1a640",
                        }}
                    >
                        {props.yellowCard}
                    </Text>
                </View>
            ) : (
                <Text style={styles.blueTextCenter20}>
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
    blueTextCenter20: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: "#4054cc",
        marginTop: 5,
    },
    row: {
        flexDirection: "row",
    },
    card18: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 5,
        color: "white",
        paddingHorizontal: 2,
    },
});

export default BigStats;
