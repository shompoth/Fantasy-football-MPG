// Librairie
import React from "react";
import { Text, StyleSheet } from "react-native";

// Composants
import Essential from "../ComponentLittleStats/Essential";
import Parenthesis from "../ComponentLittleStats/Parenthesis";

// Interface
interface KeeperEfficientProps {
    goalsConcededByMatch: number | undefined;
    sumCleanSheet: number | undefined;
    sumSaves: number | undefined;
    sumDeflect: number | undefined;
    sumPenaltySave: number | undefined;
    sumPenaltyFaced: number | undefined;
}

const KeeperEfficient: React.FC<KeeperEfficientProps> = props => {
    return (
        <>
            <Text style={styles.detailProperty}>{props.children}</Text>
            <Essential stat={props.goalsConcededByMatch}>
                Buts encaissés / match :
            </Essential>
            <Essential stat={props.sumCleanSheet}>Nombre de cleansheet :</Essential>
            <Essential stat={props.sumSaves}>Arrêts réalisés : </Essential>
            <Essential stat={props.sumDeflect}>Parades : </Essential>
            <Parenthesis
                stat={props.sumPenaltySave}
                secondary={
                    props.sumPenaltySave &&
                    props.sumPenaltyFaced &&
                    (props.sumPenaltySave / props.sumPenaltyFaced) * 100
                }
                pourcentage={true}
            >
                Pénaltys sauvés :
            </Parenthesis>
        </>
    );
};
const styles = StyleSheet.create({
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

export default KeeperEfficient;
