// Librairies
import React from "react";
import { MainStackNavigator } from "./Navigators";
import { AppTabNavigator } from "./Navigators";
import { NavigationContainer } from "@react-navigation/native";

function AppNavigator() {
    return (
        <NavigationContainer>
            {/* <MainStackNavigator /> */}
            <AppTabNavigator />
        </NavigationContainer>
    );
}

export default AppNavigator;
