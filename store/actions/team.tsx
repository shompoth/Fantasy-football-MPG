export const ADD_IN_TEAM = "ADD_IN_TEAM";
export const REMOVE_IN_TEAM = "REMOVE_IN_TEAM";

export const addInTeam = player => {
    return {
        type: ADD_IN_TEAM,
        storePlayer: player,
    };
};

export const removeInTeam = id => {
    return {
        type: REMOVE_IN_TEAM,
        storeId: id,
    };
};
