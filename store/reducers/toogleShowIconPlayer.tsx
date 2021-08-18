import { TOOGLE_SHOW_PLAYER_TEAM } from "../actions/toogleShowIconPlayer";

const initialState = {
    toogleIconPlayer: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_SHOW_PLAYER_TEAM:
            return {
                ...state,
                // toogleIconPlayer: !state.toogleIconPlayer,
                toogleIconPlayer: false,
            };

        default:
            return state;
    }
};
