import { ADD_IN_TEAM, REMOVE_IN_TEAM } from "../actions/team";
import { Alert } from "react-native";

const initialState = {
    team: [
        // {
        //     lastname: "Mbappe",
        //     ultraPosition: 40,
        //     club: "PSG",
        //     quotation: 50,
        //     id: 12345,
        //     firstname: "Kylian",
        //     birthDate: 22,
        //     stats: {
        //         avgRate: 10,
        //         sumGoals: 28,
        //         sumPenalties: 10,
        //         sumGoalAssist: 10,
        //         appearances: {
        //             starter: 40,
        //             standIn: 2,
        //         },
        //         sumRedCard: 0,
        //         sumYellowCard: 2,
        //         // Efficace
        //         wonContestByMatch: 10,
        //         percentageWonContest: 1,
        //         wonDuelByMatch: 3,
        //         percentageWonDuel: 10,
        //         lostBallByMatch: 4,
        //         percentageLostBall: 29,
        //         foulsByMatch: 3,
        //         foulsEnduredByMatch: 10,
        //         shotOnTargetByMatch: 10,
        //         percentageShotOnTarget: 70,
        //         // PLANTE ?
        //         minutesByGoal: 39,
        //         goalByMatch: 1,
        //         shotByMatch: 5,
        //         sumBigChanceMissed: 3,
        //         // AS DE LA PASSE
        //         sumBigChanceCreated: 4,
        //         succeedPassByMatch: 29,
        //         percentageSucceedPass: 80,
        //         succeedPassBackZoneByMatch: 16,
        //         percentageAccurateLongPass: 50,
        //         succeedCrossByMatch: 3,
        //         percentageCrossSuccess: 59,
        //         succeedLongPassByMatch: 4,
        //         // SOLIDE ?
        //         interceptByMatch: 3,
        //         tackleByMatch: 7,
        //         goalsConcededByMatch: 1,
        //         mistakeByMatch: 0,
        //     },
        // },
        // {
        //     lastname: "Ruffier",
        //     ultraPosition: 10,
        //     club: "St-Etienne",
        //     quotation: 20,
        //     id: 1,
        //     firstname: "Stéphane",
        //     stats: {
        //         avgRate: 10,
        //         sumGoals: 28,
        //         sumPenalties: 10,
        //         sumGoalAssists: 10,
        //         appearances: {
        //             starter: 40,
        //             standIn: 2,
        //         },
        //         sumRedCard: 0,
        //         sumYellowCard: 2,
        //         // Efficace
        //         wonContestByMatch: 10,
        //         percentageWonContest: 1,
        //         wonDuelByMatch: 3,
        //         percentageWonDuel: 10,
        //         lostBallByMatch: 4,
        //         percentageLostBall: 29,
        //         foulsByMatch: 3,
        //         foulsEnduredByMatch: 10,
        //         percentageShotOnTarget: 70,
        //         shotOnTargetByMatch: 10,
        //         // PLANTE ?
        //         minutesByGoal: 39,
        //         goalByMatch: 1,
        //         shotByMatch: 5,
        //         sumBigChanceMissed: 3,
        //         // AS DE LA PASSE
        //         sumBigChanceCreated: 4,
        //         succeedPassByMatch: 29,
        //         percentageSucceedPass: 80,
        //         succeedPassBackZoneByMatch: 16,
        //         percentageAccurateLongPass: 50,
        //         succeedCrossByMatch: 3,
        //         percentageCrossSuccess: 59,
        //         succeedLongPassByMatch: 4,
        //         // SOLIDE ?
        //         interceptByMatch: 3,
        //         tackleByMatch: 7,
        //         goalsConcededByMatch: 1,
        //         mistakeByMatch: 0,
        //         // GOALKEEPER
        //         goalConcede: 19,
        //         sumCleanSheet: 10,
        //         sumSaves: 13,
        //         sumDeflect: 4,
        //         sumPenaltySave: 2,
        //         sumPenaltyFaced: 5,
        //     },
        // },
        // {
        //     lastname: "Aouar",
        //     ultraPosition: 32,
        //     club: "Lyon",
        //     quotation: 40,
        //     id: 2,
        //     firstname: "Houssem",
        //     stats: {
        //         avgRate: 10,
        //         sumGoals: 28,
        //         sumPenalties: 10,
        //         sumGoalAssists: 10,
        //         appearances: {
        //             starter: 40,
        //             standIn: 2,
        //         },
        //         sumRedCard: 0,
        //         sumYellowCard: 2,
        //         // Efficace
        //         wonContestByMatch: 10,
        //         percentageWonContest: 1,
        //         wonDuelByMatch: 3,
        //         percentageWonDuel: 10,
        //         lostBallByMatch: 4,
        //         percentageLostBall: 29,
        //         foulsByMatch: 3,
        //         foulsEnduredByMatch: 10,
        //         percentageShotOnTarget: 70,
        //         shotOnTargetByMatch: 10,
        //         // PLANTE ?
        //         minutesByGoal: 39,
        //         goalByMatch: 1,
        //         shotByMatch: 5,
        //         sumBigChanceMissed: 3,
        //         // AS DE LA PASSE
        //         sumBigChanceCreated: 4,
        //         succeedPassByMatch: 29,
        //         percentageSucceedPass: 80,
        //         succeedPassBackZoneByMatch: 16,
        //         percentageAccurateLongPass: 50,
        //         succeedCrossByMatch: 3,
        //         percentageCrossSuccess: 59,
        //         succeedLongPassByMatch: 4,
        //         // SOLIDE ?
        //         interceptByMatch: 3,
        //         tackleByMatch: 7,
        //         goalsConcededByMatch: 1,
        //         mistakeByMatch: 0,
        //     },
        // },
    ],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_IN_TEAM:
            // if (state.team.filter(player => player.ultraPosition === 10).length === 3) {
            //     Alert.alert(
            //         "Attention",
            //         "Vous ne pouvez pas avoir plus de 3 gardiens dans votre équipe",
            //     );
            //     return state;
            // }
            if (state.team.length === 18) {
                Alert.alert(
                    "Attention",
                    "Vous ne pouvez pas avoir plus de 18 joueurs dans votre équipe",
                );
                return state;
            } else {
                return {
                    ...state,
                    team: [action.storePlayer, ...state.team],
                };
            }

        case REMOVE_IN_TEAM:
            const removePlayer = state.team.filter(
                player => player.id !== action.storeId,
            );
            return {
                ...state,
                team: removePlayer,
            };

        default:
            return state;
    }
};
