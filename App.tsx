// Librairies
import React from "react";

// Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import teamReducer from "./store/reducers/team";

// Composant
import AppNavigator from "./navigation/AppNavigator";

const rootReducer = teamReducer;
const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default function App() {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}
