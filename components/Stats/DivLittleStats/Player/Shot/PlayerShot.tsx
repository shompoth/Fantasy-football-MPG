// Librairie
import React from "react";
import { Text, StyleSheet } from "react-native";

// Composants
import Essential from "../../ComponentLittleStats/Essential";
import Parenthesis from "../../ComponentLittleStats/Parenthesis";

function PlayerShot(props) {
    return (
        <>
            <Text style={styles.detailProperty}>{props.children}</Text>
            <Parenthesis
                stat={props.wonContestByMatch}
                secondary={props.percentageWonContest}
                pourcentage={true}
            >
                Duels remportés par match :
            </Parenthesis>
            <Essential stat={props.foulsByMatch}>Fautes commises par match : </Essential>
            <Parenthesis stat={props.sumGoals} secondary={props.sumPenalties}>
                Buts (pén) :
            </Parenthesis>
            <Essential stat={props.minutesByGoal}>Fréquence de buts (min.) : </Essential>
            <Essential stat={props.goalByMatch}>Buts par match : </Essential>
            <Essential stat={props.shotByMatch}>Tirs par match : </Essential>
            <Essential stat={props.sumBigChanceMissed}>
                Grosses occasions manquées :
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

export default PlayerShot;
