// Librairies
// Librairies
import React, { useState, useEffect } from "react";
// import axios from "axios";

// Composant
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
    ActivityIndicator,
    TextProps,
    TextInput,
} from "react-native";

import { SearchBar } from "../components";

function Home(props: any) {
    // States
    // const [dimensions, setDimensions] = useState({ window, screen });

    const [tableList, setTableList] = useState<string[]>([
        "Joueurs",
        "Poste",
        "Club",
        "Côte",
    ]);

    const [players, setPlayers] = useState([
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
                sumGoalAssist: 10,
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
                sumGoalAssist: 10,
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
            birthDate: 22,
            stats: {
                avgRate: 10,
                sumGoals: 28,
                sumPenalties: 10,
                sumGoalAssist: 10,
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
    const [constPlayers, setConstPlayers]: any = useState([...players]);

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

    // useEffect(() => {
    //     Dimensions.addEventListener("change", onChange);
    //     return () => {
    //         Dimensions.removeEventListener("change", onChange);
    //     };
    // });

    // Variables

    // Fonctions
    // const onChange = ({ window, screen }) => {
    //     setDimensions({ window, screen });
    // };

    // const addLetPlayers = (newValue: any) => {
    //     setConstPlayers(newValue);
    // };

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

    const settingSort = (sort: string): void => {
        const newPlayers = [...players];

        if (sort === "Joueurs") {
            if (sortPlayers === "alphaDescending") {
                setSortPlayers("alphaAscending");
                newPlayers.sort((a, b) =>
                    b.lastname.toUpperCase() > a.lastname.toUpperCase() ? 1 : -1,
                );
            } else {
                setSortPlayers("alphaDescending");
                newPlayers.sort((a, b) =>
                    a.lastname.toUpperCase() > b.lastname.toUpperCase() ? 1 : -1,
                );
            }
        }
        if (sort === "Poste") {
            if (sortPlayers === "posteDescending") {
                setSortPlayers("posteAscending");
                newPlayers.sort((a, b) => (b.ultraPosition > a.ultraPosition ? 1 : -1));
            } else {
                setSortPlayers("posteDescending");
                newPlayers.sort((a, b) => (a.ultraPosition > b.ultraPosition ? 1 : -1));
            }
        }

        setPlayers(newPlayers);
    };

    // CHECK TYPE ARROW

    const displayArrow = (item: string) => {
        let arrow;
        if (item === "Joueurs") {
            if (sortPlayers === "alphaDescending") {
                arrow = <Text>(A-Z)</Text>;
                // require("../assets/downArrow.png");
            } else if (sortPlayers === "alphaAscending") {
                arrow = <Text>(Z-A)</Text>;
                // require("../assets/upArrow.png");
            }
        } else if (item === "Poste") {
            if (sortPlayers === "posteAscending") {
                arrow = <Text>(A-G)</Text>;
                // require("../assets/upArrow.png");
            } else if (sortPlayers === "posteDescending") {
                arrow = <Text>(G-A)</Text>;
                // require("../assets/downArrow.png");
            }
        }

        return (
            // <View>
            //     <Image source={arrow} style={{ flex: 1, alignItems: "center" }} />
            // </View>
            <Text style={{ opacity: 0.6, fontSize: 9 }}>{arrow}</Text>
        );
    };

    return (
        <View
            style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
                backgroundColor: "#fff",
            }}
        >
            <View style={styles.container}>
                <StatusBar style="auto" />

                <View
                    style={{
                        marginTop: 10,
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        flexDirection: "row",
                        backgroundColor: "#e9ebee",
                    }}
                >
                    {tableList.map(item => (
                        <TouchableOpacity
                            onPress={() => settingSort(item)}
                            activeOpacity={0.6}
                            style={{
                                ...styles.listWrapper,
                                paddingHorizontal: 0,
                            }}
                            key={item}
                        >
                            <View
                                style={{
                                    ...styles.row,
                                    height: 50,
                                    flex: 1,
                                }}
                            >
                                <Text
                                    style={{
                                        ...styles.row,
                                        color: "#99a0b2",
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
                <SearchBar constPlayers={constPlayers} setPlayers={setPlayers} />

                <FlatList
                    data={players}
                    renderItem={player => (
                        <TouchableHighlight
                            onPress={() => {
                                props.navigation.navigate("Detail du joueur", {
                                    player,
                                });
                            }}
                            activeOpacity={1}
                            underlayColor="rgba(91, 196, 69, 0.7)"
                        >
                            <View style={styles.listWrapper}>
                                <Text style={styles.row}>{player.item.lastname}</Text>
                                <Text style={styles.row}>
                                    {playerPosition(player.item.ultraPosition)}
                                </Text>
                                <Text style={styles.row}>{player.item.club}</Text>
                                <Text style={styles.row}>{player.item.quotation}</Text>
                            </View>
                        </TouchableHighlight>
                    )}
                    keyExtractor={player => player.id.toString()}
                    style={{
                        width: "100%",
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: window.width > 450 ? "85%" : "95%",
        width: "95%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 20,
        backgroundColor: "#fff",
    },
    listWrapper: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "nowrap",
        borderBottomWidth: 1,
        borderBottomColor: "#e9ebee",
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
