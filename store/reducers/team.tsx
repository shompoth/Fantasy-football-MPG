import { ADD_IN_TEAM, REMOVE_IN_TEAM } from "../actions/team";
import { Alert } from "react-native";
import { ActionCreators } from "@react-navigation/routers";
import { PlayerState } from "../../screens/Home";

// Interface
interface Action {
    type: string;
    storePlayer: PlayerState;
    storeId: number;
}

const initialState: { team: PlayerState[] } = {
    team: [],
};

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ADD_IN_TEAM:
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
