// Librairie
import React from "react";
import { Text, StyleSheet } from "react-native";

// Composants
import Essential from "../../ComponentLittleStats/Essential";
import Parenthesis from "../../ComponentLittleStats/Parenthesis";

// Interface
interface PlayerEfficientProps {
    wonContestByMatch?: number;
    percentageWonContest?: number;
    wonDuelByMatch?: number;
    percentageWonDuel?: number;
    lostBallByMatch?: number;
    percentageLostBall?: number;
    foulsByMatch?: number;
    foulsEnduredByMatch?: number;
    shotOnTargetByMatch?: number;
    percentageShotOnTarget?: number;
}

const PlayerEfficient: React.FC<PlayerEfficientProps> = props => {
    return (
        <>
            <Text style={styles.detailProperty}>{props.children}</Text>
            <Parenthesis
                stat={props.wonContestByMatch}
                secondary={props.percentageWonContest}
                pourcentage={true}
            >
                Duels remportés / match :
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
                Pertes de balles / match :
            </Parenthesis>

            <Essential stat={props.foulsByMatch}>Fautes commises / match : </Essential>
            <Essential stat={props.foulsEnduredByMatch}>
                Fautes subies / match :
            </Essential>

            <Parenthesis
                stat={props.shotOnTargetByMatch}
                secondary={props.percentageShotOnTarget}
                pourcentage={true}
            >
                Tirs cadrés / match :
            </Parenthesis>
        </>
    );
};
const styles = StyleSheet.create({
    detailProperty: {
        fontSize: 18,
        marginBottom: 5,
    },
});

export default PlayerEfficient;
