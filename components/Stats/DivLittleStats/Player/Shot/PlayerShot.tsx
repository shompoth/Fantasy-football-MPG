// Librairie
import React from "react";
import { Text, StyleSheet } from "react-native";

// Composants
import Essential from "../../ComponentLittleStats/Essential";
import Parenthesis from "../../ComponentLittleStats/Parenthesis";

// Interface
interface PlayerShotProps {
    sumGoals: number;
    sumPenalties: number;
    minutesByGoal: number;
    goalByMatch: number;
    shotByMatch: number;
    sumBigChanceMissed: number;
}

const PlayerShot: React.FC<PlayerShotProps> = props => {
    return (
        <>
            <Text style={styles.detailProperty}>{props.children}</Text>
            <Parenthesis stat={props.sumGoals} secondary={props.sumPenalties}>
                Buts (pén) :
            </Parenthesis>
            <Essential stat={props.minutesByGoal}>Fréquence de buts (min.) : </Essential>
            <Essential stat={props.goalByMatch}>Buts / match : </Essential>
            <Essential stat={props.shotByMatch}>Tirs / match : </Essential>
            <Essential stat={props.sumBigChanceMissed}>
                Grosses occasions manquées :
            </Essential>
        </>
    );
};
const styles = StyleSheet.create({
    detailProperty: {
        fontSize: 18,
        marginBottom: 5,
    },
});

export default PlayerShot;
