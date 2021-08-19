//Librairies
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

function MainStats(props) {
    // Fonction
    const playerPosition = ultraPosition => {
        let position;

        switch (ultraPosition) {
            case 10:
                position = "Gardien";
                break;
            case 20:
                position = "Défenseur central";
                break;
            case 21:
                position = "Défenseur latéral";
                break;
            case 31:
                position = "Milieu défensif";
                break;
            case 32:
                position = "Milieu offensif";
                break;
            case 40:
                position = "Attaquant";
                break;
            default:
                position = null;
                break;
        }
        return position;
    };
    return (
        <View style={styles.presentationDiv}>
            <Text style={styles.textCenter16}>
                {props.position ? playerPosition(props.stats) : props.stats}{" "}
                {props.age && "ans"}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    presentationDiv: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 7,
        // paddingBottom: 35,
        paddingHorizontal: 5,
    },

    textCenter16: {
        fontSize: 18,
        textAlign: "center",
        color: Colors.secondary,
        fontWeight: "bold",
    },
});

export default MainStats;
