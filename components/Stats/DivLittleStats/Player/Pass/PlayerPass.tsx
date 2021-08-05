// Librairie
import React from "react";
import { Text, StyleSheet } from "react-native";

// Composants
import Essential from "../../ComponentLittleStats/Essential";
import Parenthesis from "../../ComponentLittleStats/Parenthesis";

function PlayerPass(props) {
    return (
        <>
            <Text style={styles.detailProperty}>{props.children}</Text>

            <Essential stat={props.sumGoalAssist}>Passes décisives : </Essential>
            <Essential stat={props.sumBigChanceCreated}>
                Grosses occasions créées :{" "}
            </Essential>

            <Parenthesis
                stat={props.succeedPassByMatch}
                secondary={props.percentageSucceedPass}
                pourcentage={true}
            >
                Passes réussies par match :
            </Parenthesis>

            <Parenthesis
                stat={props.succeedPassBackZoneByMatch}
                secondary={props.percentageAccuratePassBackZone}
                pourcentage={true}
            >
                Passes réussies dans son camp par match :
            </Parenthesis>

            <Parenthesis
                stat={props.succeedLongPassByMatch}
                secondary={props.percentageAccurateLongPass}
                pourcentage={true}
            >
                Passes longues réussies par match :
            </Parenthesis>

            <Parenthesis
                stat={props.succeedCrossByMatch}
                secondary={props.percentageCrossSuccess}
                pourcentage={true}
            >
                Centres réussis par match :
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

export default PlayerPass;
