// Librairie
import React from "react";
import { Text, StyleSheet } from "react-native";

// Composants
import Essential from "../../ComponentLittleStats/Essential";
import Parenthesis from "../../ComponentLittleStats/Parenthesis";

// Interface
interface PlayerPassProps {
    sumGoalAssist?: number;
    sumBigChanceCreated?: number;
    succeedPassByMatch?: number;
    percentageSucceedPass?: number;
    succeedPassBackZoneByMatch?: number;
    percentageAccuratePassBackZone?: number;
    succeedLongPassByMatch?: number;
    percentageAccurateLongPass?: number;
    succeedCrossByMatch?: number;
    percentageCrossSuccess?: number;
}

const PlayerPass: React.FC<PlayerPassProps> = props => {
    return (
        <>
            <Text style={styles.detailProperty}>{props.children}</Text>

            <Essential stat={props.sumGoalAssist}>Passes décisives : </Essential>
            <Essential stat={props.sumBigChanceCreated}>
                Grosses occasions créées :
            </Essential>

            <Parenthesis
                stat={props.succeedPassByMatch}
                secondary={props.percentageSucceedPass}
                pourcentage={true}
            >
                Passes réussies / match :
            </Parenthesis>

            <Parenthesis
                stat={props.succeedPassBackZoneByMatch}
                secondary={props.percentageAccuratePassBackZone}
                pourcentage={true}
            >
                Passes réussies dans son camp / match :
            </Parenthesis>

            <Parenthesis
                stat={props.succeedLongPassByMatch}
                secondary={props.percentageAccurateLongPass}
                pourcentage={true}
            >
                Passes longues réussies / match :
            </Parenthesis>

            <Parenthesis
                stat={props.succeedCrossByMatch}
                secondary={props.percentageCrossSuccess}
                pourcentage={true}
            >
                Centres réussis / match :
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

export default PlayerPass;
