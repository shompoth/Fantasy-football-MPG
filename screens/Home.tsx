// Librairies
import React, { useState, useEffect } from "react";
import Colors from "../constants/Colors";
// import axios from "axios";

// Composants
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    Dimensions,
    SafeAreaView,
    TouchableHighlight,
    TouchableOpacity,
    ActivityIndicator,
    TextProps,
    TextInput,
} from "react-native";

import { Logo, SearchBar, FlatlistPlayers } from "../components";

// Enum
// enum TableList {
//     Joueur = "Joueur",
//     Poste = "Poste",
//     Club = "Club",
//     Cote = "Cote",
// }

// Variables
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export interface PlayerState {
    lastname: string;
    ultraPosition: number;
    club: string;
    quotation: number;
    id: number;
    firstname: string;
    birthDate: number;
    stats: {
        avgRate: number;
        sumGoals: number;
        sumPenalties: number;
        sumGoalAssists: number;
        appearances: {
            starter: number;
            standIn: number;
        };
        sumRedCard: number;
        sumYellowCard: number;
        wonContestByMatch: number;
        percentageWonContest: number;
        wonDuelByMatch: number;
        percentageWonDuel: number;
        lostBallByMatch: number;
        percentageLostBall: number;
        foulsByMatch: number;
        foulsEnduredByMatch: number;
        percentageShotOnTarget: number;
        shotOnTargetByMatch: number;
        minutesByGoal: number;
        goalByMatch: number;
        shotByMatch: number;
        sumBigChanceMissed: number;
        sumBigChanceCreated: number;
        succeedPassByMatch: number;
        percentageSucceedPass: number;
        succeedPassBackZoneByMatch: number;
        percentageAccuratePassBackZone?: number;
        percentageAccurateLongPass: number;
        succeedCrossByMatch: number;
        percentageCrossSuccess: number;
        succeedLongPassByMatch: number;

        interceptByMatch: number;
        tackleByMatch: number;
        goalsConcededByMatch: number;
        mistakeByMatch: number;

        goalConcede?: number;
        sumCleanSheet?: number;
        sumSaves?: number;
        sumDeflect?: number;
        sumPenaltySave?: number;
        sumPenaltyFaced?: number;
        percentageSaveShot?: number;
    };
}

// export interface WindowProps {
//     window: ScaledSize;
//     screen: ScaledSize;
// }

const Home: React.FC = props => {
    // States
    const [dimensions, setDimensions] = useState({ window, screen });

    const [tableList, setTableList] = useState<string[]>([
        // TableList.Joueur,
        // TableList.Poste,
        // TableList.Club,
        // TableList.Cote,

        "Joueurs",
        "Poste",
        "Club",
        "Côte",
        "",
    ]);

    const [players, setPlayers] = useState<PlayerState[]>([
        {
            lastname: "Mbappe",
            ultraPosition: 40,
            club: "PSG",
            quotation: 50,
            id: 12345,
            firstname: "Kylian",
            birthDate: 22,
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                shotOnTargetByMatch: 10,
                percentageShotOnTarget: 70,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,
                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Ruffier",
            ultraPosition: 10,
            club: "St-Etienne",
            quotation: 20,
            id: 1,
            firstname: "Stéphane",
            birthDate: 33,
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,
                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
                // GOALKEEPER
                goalConcede: 19,
                sumCleanSheet: 10,
                sumSaves: 13,
                sumDeflect: 4,
                sumPenaltySave: 2,
                sumPenaltyFaced: 5,
            },
        },
        {
            lastname: "Aouar",
            ultraPosition: 32,
            club: "Lyon",
            quotation: 40,
            id: 2,
            firstname: "Houssem",
            birthDate: 24,
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,

                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Cavani",
            ultraPosition: 40,
            club: "PSG",
            quotation: 35,
            id: 203,
            firstname: "Edinson",
            birthDate: 30,
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                shotOnTargetByMatch: 10,
                percentageShotOnTarget: 70,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,
                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Atal",
            ultraPosition: 21,
            club: "Nice",
            quotation: 27,
            id: 3090,
            firstname: "Youcef",
            birthDate: 26,
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,

                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Briand",
            ultraPosition: 40,
            club: "Bordeaux",
            quotation: 17,
            id: 0,
            firstname: "Jimmy",
            birthDate: 32,
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                shotOnTargetByMatch: 10,
                percentageShotOnTarget: 70,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,
                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Ndombele",
            ultraPosition: 32,
            club: "Lyon",
            quotation: 40,
            id: 293,
            firstname: "Tanguy",
            birthDate: 26,
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,

                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Lecomte",
            ultraPosition: 10,
            club: "Montpellier",
            quotation: 15,
            id: 1342,
            firstname: "Benjamin",
            birthDate: 34,
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,
                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
                // GOALKEEPER
                goalConcede: 19,
                sumCleanSheet: 10,
                sumSaves: 13,
                sumDeflect: 4,
                sumPenaltySave: 2,
                sumPenaltyFaced: 5,
            },
        },
        {
            lastname: "Lala",
            ultraPosition: 21,
            club: "Strasbourg",
            quotation: 21,
            id: 4,
            firstname: "Keny",
            birthDate: 26,
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,

                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Rongier",
            ultraPosition: 32,
            club: "Lyon",
            quotation: 23,
            id: 2202,
            firstname: "Valentin",
            birthDate: 30,
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,

                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Rami",
            ultraPosition: 21,
            club: "Rennes",
            quotation: 27,
            id: 3,
            firstname: "Bensebaini",
            birthDate: 23,
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,

                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Savanier",
            ultraPosition: 31,
            club: "Nimes",
            quotation: 17,
            id: 5,
            firstname: "Steve",
            birthDate: 33,
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,

                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Pepe",
            ultraPosition: 40,
            club: "Lille",
            quotation: 35,
            id: 6,
            firstname: "Nicolas",
            birthDate: 22,
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,

                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Ikone",
            ultraPosition: 32,
            club: "Lille",
            quotation: 30,
            id: 7,
            firstname: "Jonathan",
            birthDate: 20,
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,

                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Lima",
            ultraPosition: 10,
            club: "Nantes",
            quotation: 10,
            id: 132,
            firstname: "Lucas",
            birthDate: 21,
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,
                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
                // GOALKEEPER
                goalConcede: 19,
                sumCleanSheet: 10,
                sumSaves: 13,
                sumDeflect: 4,
                sumPenaltySave: 2,
                sumPenaltyFaced: 5,
            },
        },
        {
            lastname: "Mandanda",
            ultraPosition: 10,
            club: "Marseille",
            quotation: 15,
            id: 100,
            firstname: "Steve",
            birthDate: 32,
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,
                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
                // GOALKEEPER
                goalConcede: 19,
                sumCleanSheet: 10,
                sumSaves: 13,
                sumDeflect: 4,
                sumPenaltySave: 2,
                sumPenaltyFaced: 5,
            },
        },
        {
            lastname: "Fonte",
            ultraPosition: 20,
            club: "Lille",
            quotation: 17,
            id: 8,
            firstname: "Ruben",
            birthDate: 34,
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,

                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Thauvin",
            ultraPosition: 32,
            club: "Marseille",
            quotation: 30,
            id: 999,
            firstname: "Florian",
            birthDate: 25,
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,

                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
        {
            lastname: "Silva",
            ultraPosition: 20,
            club: "PSG",
            quotation: 45,
            id: 9,
            firstname: "Thiago",
            birthDate: 32,
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssists: 10,
                appearances: {
                    starter: 40,
                    standIn: 2,
                },
                sumRedCard: 0,
                sumYellowCard: 2,
                // Efficace
                wonContestByMatch: 10,
                percentageWonContest: 1,
                wonDuelByMatch: 3,
                percentageWonDuel: 10,
                lostBallByMatch: 4,
                percentageLostBall: 29,
                foulsByMatch: 3,
                foulsEnduredByMatch: 10,
                percentageShotOnTarget: 70,
                shotOnTargetByMatch: 10,
                // PLANTE ?
                minutesByGoal: 39,
                goalByMatch: 1,
                shotByMatch: 5,
                sumBigChanceMissed: 3,
                // AS DE LA PASSE
                sumBigChanceCreated: 4,
                succeedPassByMatch: 29,
                percentageSucceedPass: 80,
                succeedPassBackZoneByMatch: 16,
                percentageAccurateLongPass: 50,
                succeedCrossByMatch: 3,
                percentageCrossSuccess: 59,
                succeedLongPassByMatch: 4,

                // SOLIDE ?
                interceptByMatch: 3,
                tackleByMatch: 7,
                goalsConcededByMatch: 1,
                mistakeByMatch: 0,
            },
        },
    ]);
    const [constPlayers, setConstPlayers] = useState([...players]);
    const [letPlayers, setLetPlayers] = useState([...players]);

    const [sortPlayers, setSortPlayers] = useState<string | null>(null);

    // Cycles de vie
    // useEffect(() => {
    //     axios
    //         .get(`https://api.monpetitgazon.com/stats/championship/1/2018`)
    //         .then(res => {
    //             const persons = res.data;
    //             setPlayers(persons);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }, []);

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });

    // Fonctions
    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    const playerPosition = (ultraPosition: number): string => {
        let position: string | null;

        switch (ultraPosition) {
            case 10:
                position = "G";
                break;
            case 20:
                position = "D";
                break;
            case 21:
                position = "L";
                break;
            case 31:
                position = "MD";
                break;
            case 32:
                position = "MO";
                break;
            case 40:
                position = "A";
                break;
            default:
                position = null;
                break;
        }
        return position!;
    };

    const settingSortHandler = (sort: string | null): void => {
        const newPlayers = [...players];
        const newFixedPlayers = [...constPlayers];

        if (sort === tableList[0]) {
            if (sortPlayers === "alphaDescending") {
                setSortPlayers("alphaAscending");
                newPlayers.sort((a, b) =>
                    b.lastname.toUpperCase() > a.lastname.toUpperCase() ? 1 : -1,
                );
                newFixedPlayers.sort((a, b) =>
                    b.lastname.toUpperCase() > a.lastname.toUpperCase() ? 1 : -1,
                );
            } else {
                setSortPlayers("alphaDescending");
                newPlayers.sort((a, b) =>
                    a.lastname.toUpperCase() > b.lastname.toUpperCase() ? 1 : -1,
                );
                newFixedPlayers.sort((a, b) =>
                    a.lastname.toUpperCase() > b.lastname.toUpperCase() ? 1 : -1,
                );
            }
        }
        if (sort === tableList[1]) {
            if (sortPlayers === "posteDescending") {
                setSortPlayers("posteAscending");
                newPlayers.sort((a, b) => (b.ultraPosition > a.ultraPosition ? 1 : -1));
                newFixedPlayers.sort((a, b) =>
                    b.ultraPosition > a.ultraPosition ? 1 : -1,
                );
            } else {
                setSortPlayers("posteDescending");
                newPlayers.sort((a, b) => (a.ultraPosition > b.ultraPosition ? 1 : -1));
                newFixedPlayers.sort((a, b) =>
                    a.ultraPosition > b.ultraPosition ? 1 : -1,
                );
            }
        }
        if (sort === tableList[2]) {
            if (sortPlayers === "clubDescending") {
                setSortPlayers("clubAscending");
                newPlayers.sort((a, b) => (b.club > a.club ? 1 : -1));
                newFixedPlayers.sort((a, b) => (b.club > a.club ? 1 : -1));
            } else {
                setSortPlayers("clubDescending");
                newPlayers.sort((a, b) => (a.club > b.club ? 1 : -1));
                newFixedPlayers.sort((a, b) => (a.club > b.club ? 1 : -1));
            }
        }
        if (sort === tableList[3]) {
            if (sortPlayers === "coteDescending") {
                setSortPlayers("coteAscending");
                newPlayers.sort((a, b) => b.quotation - a.quotation);
                newFixedPlayers.sort((a, b) => b.quotation - a.quotation);
            } else {
                setSortPlayers("coteDescending");
                newPlayers.sort((a, b) => a.quotation - b.quotation);
                newFixedPlayers.sort((a, b) => a.quotation - b.quotation);
            }
        }
        setPlayers(newPlayers);

        setLetPlayers(newFixedPlayers);
    };

    // CHECK TYPE ARROW
    const displayArrow = (item: string) => {
        let arrow;
        if (item === tableList[0]) {
            if (sortPlayers === "alphaDescending") {
                arrow = <Text>(A-Z)</Text>;
            } else if (sortPlayers === "alphaAscending") {
                arrow = <Text>(Z-A)</Text>;
            }
        } else if (item === tableList[1]) {
            if (sortPlayers === "posteAscending") {
                arrow = <Text>(A-G)</Text>;
            } else if (sortPlayers === "posteDescending") {
                arrow = <Text>(G-A)</Text>;
            }
        } else if (item === tableList[2]) {
            if (sortPlayers === "clubAscending") {
                arrow = <Text>(Z-A)</Text>;
            } else if (sortPlayers === "clubDescending") {
                arrow = <Text>(A-Z)</Text>;
            }
        } else if (item === tableList[3]) {
            if (sortPlayers === "coteAscending") {
                arrow = <Text>(∞-0)</Text>;
            } else if (sortPlayers === "coteDescending") {
                arrow = <Text>(0-∞)</Text>;
            }
        } else {
            arrow = null;
        }

        return <Text style={{ opacity: 0.6, fontSize: 9 }}>{arrow}</Text>;
    };

    const flexItem = (item: string) => {
        if (item === "Joueurs" || item === "Club") return 1.5;
        else if (!item) return 0.3;
        else return 1;
    };

    return (
        <View
            style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
                backgroundColor: Colors.light,
            }}
        >
            <View style={styles.container}>
                <StatusBar style="auto" />
                {/* <Logo dimensions={dimensions} /> */}
                <SearchBar
                    constPlayers={constPlayers}
                    setPlayers={setPlayers}
                    playerPosition={playerPosition}
                    setSortPlayers={setSortPlayers}
                />
                <View
                    style={{
                        // marginTop: 10,
                        paddingHorizontal: 10,
                        borderRadius: 5,
                        flexDirection: "row",
                        // backgroundColor: Colors.gray,
                    }}
                >
                    {tableList.map(item => (
                        <TouchableOpacity
                            onPress={() => settingSortHandler(item)}
                            activeOpacity={0.6}
                            style={{
                                ...styles.listWrapper,
                                paddingHorizontal: 0,
                                borderBottomWidth: 0,

                                flex: flexItem(item),
                                // flex: item === "Joueurs" || item === "Club" ? 1.1 : 1,
                            }}
                            key={item}
                        >
                            <View
                                style={{
                                    ...styles.row,
                                    height: 50,
                                    // flex: 2,
                                }}
                            >
                                <Text
                                    style={{
                                        ...styles.row,
                                        color: Colors.grayHint,
                                        fontWeight: "bold",
                                    }}
                                >
                                    {item}
                                    {sortPlayers && displayArrow(item)}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                <FlatList
                    data={players}
                    renderItem={player => (
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate("Detail", {
                                    player,
                                });
                            }}
                            activeOpacity={0.7}
                            // underlayColor="rgba(91, 196, 69, 0.7)"
                        >
                            <FlatlistPlayers
                                player={player}
                                playerPosition={playerPosition}
                            />
                        </TouchableOpacity>
                    )}
                    keyExtractor={player => player.id.toString()}
                    style={{
                        width: "100%",
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: window.width > 450 ? "85%" : "95%",
        width: "95%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 5,
        // paddingBottom: 20,
        paddingBottom: 0,
        backgroundColor: Colors.light,
    },
    listWrapper: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "nowrap",
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        paddingHorizontal: 10,
    },
    row: {
        flex: 1,
        justifyContent: "center",
        paddingVertical: 10,
        fontSize: 12,
    },
});

export default Home;
