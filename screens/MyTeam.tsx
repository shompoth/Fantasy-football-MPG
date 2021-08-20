// Librairies
import React, { useState, useEffect } from "react";
import Colors from "../constants/Colors";

// Composants
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import { PlayerTeam } from "../components";

// Redux
import { useSelector, useDispatch } from "react-redux";
import * as teamActions from "../store/actions/team";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function MyTeam(props: any) {
    // variables redux
    const team = useSelector(state =>
        state.team.team.sort((a, b) => (b.ultraPosition > a.ultraPosition ? 1 : -1)),
    );

    const dispatch = useDispatch();

    // Fonction
    const deletePlayerTeamHandler = id => {
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
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "flex-end",
                            paddingVertical: 15,
                        }}
                    >
                        <FlatList
                            data={team}
                            renderItem={player => (
                                <PlayerTeam
                                    deletePlayerTeamHandler={deletePlayerTeamHandler}
                                    playerId={player.item.id}
                                    playerLastname={player.item.lastname}
                                />
                            )}
                            keyExtractor={player => player.id.toString()}
                            style={{ maxWidth: 150 }}
                        />
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: window.width > 450 ? "85%" : "95%", // // //
        // width: "95%",
        alignItems: "center",
        justifyContent: "center",
        // paddingTop: 10,
        // paddingBottom: 20,
        backgroundColor: Colors.light,
    },
    // playerStyle: {
    //     borderWidth: 1,
    //     paddingVertical: 5,
    //     paddingHorizontal: 10,
    //     backgroundColor: Colors.secondary,
    //     borderRadius: 10,
    //     // width: 100,
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     marginVertical: 5,
    //     marginHorizontal: 15,
    // },
    // iconStyle: {
    //     position: "absolute",
    //     right: 0,
    //     top: 0,
    //     // transform: translate("-50%", "-50%"),
    //     transform: [{ translateX: "12%" }, { translateY: "-8%" }],
    // },
    rowMargin: {
        flexDirection: "row",
        // margin: 5,
    },
    textAddPlayer: {
        color: Colors.light,
    },
});

export default MyTeam;
