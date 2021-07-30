// Librairie
import React from "react";
import { Text, StyleSheet } from "react-native";

// Composants
import Essential from "../../ComponentLittleStats/Essential";
import Parenthesis from "../../ComponentLittleStats/Parenthesis";

function PlayerEfficient(props) {
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

            <Parenthesis
                stat={props.wonDuelByMatch}
                secondary={props.percentageWonDuel}
                pourcentage={true}
            >
                Duels :
            </Parenthesis>

            <Parenthesis
                stat={props.lostBallByMatch}
                secondary={props.percentageLostBall}
                pourcentage={true}
            >
                Pertes de balles par match :
            </Parenthesis>

            <Essential stat={props.foulsByMatch}>Fautes commises par match : </Essential>
            <Essential stat={props.foulsEnduredByMatch}>
                Fautes subies par match :
            </Essential>

            <Parenthesis
                stat={props.shotOnTargetByMatch}
                secondary={props.percentageShotOnTarget}
                pourcentage={true}
            >
                Tirs cadrés par match :{" "}
            </Parenthesis>
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

export default PlayerEfficient;
