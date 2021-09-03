// Librairies
import React from "react";
import Colors from "../constants/Colors";

// Composants
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { PlayerTeam } from "../components";
import { PlayerState } from "./Home";

// Redux
import { useSelector, useDispatch } from "react-redux";
import * as teamActions from "../store/actions/team";

// Enum
import { PositionJoueur } from "../Utils/enum";

// Type
import { RootState } from "../App";

// Interface
interface MyTeamProps {
    navigation: { navigate: Function };
}

const MyTeam: React.FC<MyTeamProps> = props => {
    // variables redux
    const team: PlayerState[] = useSelector((state: RootState) => state.team);

    const dispatch = useDispatch();

    // Fonction
    const deletePlayerTeamHandler = (id: number) => {
        dispatch(teamActions.removeInTeam(id));
    };

    return (
        <View style={styles.container}>
            {team.length ? (
                <ImageBackground
                    source={require("../assets/field.png")}
                    style={{
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <View
                        style={{
                            paddingVertical: 15,
                            flex: 1,
                        }}
                    >
                        <View
                            style={{
                                flex: 5,
                                ...styles.divPlayerPosition,
                            }}
                        >
                            {team
                                .filter(
                                    player =>
                                        player.ultraPosition === PositionJoueur.Attaquant,
                                )
                                .map(player => (
                                    <PlayerTeam
                                        key={player.id}
                                        deletePlayerTeamHandler={deletePlayerTeamHandler}
                                        playerId={player.id}
                                        playerLastname={player.lastname}
                                    />
                                ))}
                        </View>

                        <View
                            style={{
                                flex: 5,
                                ...styles.divPlayerPosition,
                            }}
                        >
                            {team
                                .filter(
                                    player =>
                                        player.ultraPosition ===
                                            PositionJoueur.MilieuDefensif ||
                                        player.ultraPosition ===
                                            PositionJoueur.MilieuOffensif,
                                )
                                .map(player => (
                                    <PlayerTeam
                                        key={player.id}
                                        deletePlayerTeamHandler={deletePlayerTeamHandler}
                                        playerId={player.id}
                                        playerLastname={player.lastname}
                                    />
                                ))}
                        </View>

                        <View
                            style={{
                                flex: 5,
                                ...styles.divPlayerPosition,
                            }}
                        >
                            {team
                                .filter(
                                    player =>
                                        player.ultraPosition ===
                                            PositionJoueur.Defenseur ||
                                        player.ultraPosition === PositionJoueur.Lateral,
                                )
                                .map(player => (
                                    <PlayerTeam
                                        key={player.id}
                                        deletePlayerTeamHandler={deletePlayerTeamHandler}
                                        playerId={player.id}
                                        playerLastname={player.lastname}
                                    />
                                ))}
                        </View>

                        <View
                            style={{
                                flex: 1,
                                ...styles.divPlayerPosition,
                            }}
                        >
                            {team
                                .filter(
                                    player =>
                                        player.ultraPosition === PositionJoueur.Gardien,
                                )
                                .map(player => (
                                    <PlayerTeam
                                        key={player.id}
                                        deletePlayerTeamHandler={deletePlayerTeamHandler}
                                        playerId={player.id}
                                        playerLastname={player.lastname}
                                    />
                                ))}
                        </View>
                    </View>
                </ImageBackground>
            ) : (
                <View
                    style={{
                        width: "90%",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ textAlign: "center" }}>
                        Vous n'avez aucun joueur dans votre équipe. {"\n"}
                    </Text>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate("TabHome")}
                        activeOpacity={0.8}
                        style={{
                            backgroundColor: Colors.secondary,
                            paddingVertical: 5,
                            paddingHorizontal: 10,
                            borderRadius: 10,
                        }}
                    >
                        <Text style={styles.textAddPlayer}>Ajouter des joueurs</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.light,
    },
    divPlayerPosition: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
    },
    rowMargin: {
        flexDirection: "row",
    },
    textAddPlayer: {
        color: Colors.light,
    },
});

export default MyTeam;
