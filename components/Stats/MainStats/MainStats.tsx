//Librairies
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

// Enum
import { PositionJoueur } from "../../../Utils/enum";

enum Position {
    Gardien = "Gardien",
    Defenseur = "Défenseur central",
    Lateral = "Défenseur latéral",
    MilieuDefensif = "Milieu défensif",
    MilieuOffensif = "Milieu offensif",
    Attaquant = "Attaquant",
}

// Interface
interface MainStatsProps {
    stats: number | string;
    position?: boolean;
    age?: boolean;
}

const MainStats: React.FC<MainStatsProps> = props => {
    // Fonction
    const playerPosition = (ultraPosition: number | string) => {
        let position;

        switch (ultraPosition) {
            case PositionJoueur.Gardien:
                position = Position.Gardien;
                break;
            case PositionJoueur.Defenseur:
                position = Position.Defenseur;
                break;
            case PositionJoueur.Lateral:
                position = Position.Lateral;
                break;
            case PositionJoueur.MilieuDefensif:
                position = Position.MilieuDefensif;
                break;
            case PositionJoueur.MilieuOffensif:
                position = Position.MilieuOffensif;
                break;
            case PositionJoueur.Attaquant:
                position = Position.Attaquant;
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
};
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
