// Librairies
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Ecrans
import HomeScreen from "../screens/Home";
import PlayerDetailsScreen from "../screens/PlayerDetails";

// Composant
import Colors from "../constants/Colors";
// Variable
const headerOptions = {
    headerTintColor: Colors.secondary,
};

// MainStackNavigator
const MainStackNavigatorComponent = createStackNavigator();

export const MainStackNavigator = () => {
    return (
        <MainStackNavigatorComponent.Navigator>
            <MainStackNavigatorComponent.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Joueurs Ligue 1 - 2018", ...headerOptions }}
            />
            <MainStackNavigatorComponent.Screen
                name="Detail"
                component={PlayerDetailsScreen}
                options={{ title: "Détail du joueur", ...headerOptions }}
            />
        </MainStackNavigatorComponent.Navigator>
    );
};
