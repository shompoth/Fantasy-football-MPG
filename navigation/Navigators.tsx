// Librairies
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/Colors";
// Ecrans
import HomeScreen from "../screens/Home";
import PlayerDetailsScreen from "../screens/PlayerDetails";
import MyTeamScreen from "../screens/MyTeam";

// Composant
import { Icon } from "../UI";

// Variable
const headerOptions = {
    headerTintColor: Colors.secondary,
};

const MainStackNavigatorComponent = createStackNavigator();

const MainStackNavigator = () => {
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

const TabNavigator = createBottomTabNavigator();

export const AppTabNavigator = () => {
    return (
        <TabNavigator.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "TabHome") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "TabTeam") {
                        iconName = focused ? "body" : "body-outline";
                    }
                    return <Icon name={iconName} color={color} size={size} />;
                },
                tabBarActiveTintColor: Colors.secondary,
            })}
        >
            <TabNavigator.Screen
                name="TabHome"
                component={MainStackNavigator}
                // component={HomeScreen}
                options={{ title: "Joueurs", headerShown: false }}
            />
            <TabNavigator.Screen
                name="TabTeam"
                component={MyTeamScreen}
                options={{ title: "Mon équipe", ...headerOptions }}
            />
        </TabNavigator.Navigator>
    );
};
