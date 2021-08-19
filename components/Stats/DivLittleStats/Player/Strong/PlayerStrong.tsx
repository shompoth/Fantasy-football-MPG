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
            <Essential stat={props.interceptByMatch}>Interceptions / match :</Essential>
            <Essential stat={props.tackleByMatch}>Tacles / match : </Essential>
            <Essential stat={props.goalsConcededByMatch}>
                Buts encaissés / match :
            </Essential>
            <Essential stat={props.mistakeByMatch}>
                Erreurs qui amènent un but :
            </Essential>
        </>
    );
}
const styles = StyleSheet.create({
    detailProperty: {
        fontSize: 18,
        marginBottom: 5,
    },
});

export default PlayerStrong;
