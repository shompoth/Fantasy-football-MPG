// Librairie
import React from "react";
import { Text, StyleSheet } from "react-native";

// Composants
import Essential from "../../ComponentLittleStats/Essential";
import Parenthesis from "../../ComponentLittleStats/Parenthesis";

function PlayerStrong(props) {
    return (
        <>
            <Text style={styles.detailProperty}>{props.children}</Text>
            <Essential stat={props.interceptByMatch}>Interceptions par match :</Essential>
            <Essential stat={props.tackleByMatch}>Tacles par match : </Essential>
            <Essential stat={props.goalsConcededByMatch}>
                Buts encaissés par match :
            </Essential>
            <Essential stat={props.mistakeByMatch}>
                Erreurs qui amènent un but :
            </Essential>
        </>
    );
}
const styles = StyleSheet.create({
    divWrapperLittleStats: {
        justifyContent: "center",
        paddingVertical: 10,
    },
    rowDiv: {
        flexDirection: "row",
        justifyContent: "space-between",
        maxWidth: "100%",
        paddingVertical: 2,
    },
    detailProperty: {
        fontSize: 18,
        marginBottom: 5,
    },
    row: {
        flexDirection: "row",
    },
});

export default PlayerStrong;
