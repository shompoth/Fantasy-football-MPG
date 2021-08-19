// Librairies
import React, { useState, useEffect } from "react";
import Colors from "../constants/Colors";

// Composants
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { Link } from "@react-navigation/native";
import { Logo, SearchBar, FlatlistPlayers } from "../components";
import { Icon } from "../UI";

// Redux
import { useSelector, useDispatch } from "react-redux";
import * as teamActions from "../store/actions/team";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function MyTeam(props: any) {
    // variables redux
    const team = useSelector(state =>
        state.team.team.sort((a, b) => (a.ultraPosition > b.ultraPosition ? 1 : -1)),
    );

    const dispatch = useDispatch();

    // Fonction
    const deletePlayerTeamHandler = id => {
        dispatch(teamActions.removeInTeam(id));
    };

    return (
        <View style={styles.container}>
            {team.length ? (
                <FlatList
                    data={team}
                    renderItem={player => (
                        <View style={styles.playerStyle}>
                            <View style={{ marginRight: 5 }}>
                                <Icon
                                    name="person-circle-outline"
                                    color={Colors.grayLowHint}
                                    size={20}
                                />
                            </View>
                            <Text style={{ color: Colors.light }}>
                                {player.item.lastname}
                            </Text>
                            <TouchableOpacity
                                style={styles.iconStyle}
                                onPress={() => deletePlayerTeamHandler(player.item.id)}
                                activeOpacity={0.8}
                            >
                                <Icon
                                    name="close-circle"
                                    color={Colors.danger}
                                    size={18}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={player => player.id.toString()}
                    // style={{
                    //     width: "100%",
                    // }}
                />
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
        paddingTop: 10,
        paddingBottom: 20,
        backgroundColor: Colors.light,
    },
    playerStyle: {
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: Colors.secondary,
        borderRadius: 10,
        // width: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
        marginHorizontal: 15,
    },
    iconStyle: {
        position: "absolute",
        right: 0,
        top: 0,
        // transform: translate("-50%", "-50%"),
        transform: [{ translateX: "12%" }, { translateY: "-8%" }],
    },
    rowMargin: {
        flexDirection: "row",
        // margin: 5,
    },
    textAddPlayer: {
        color: Colors.light,
    },
});

export default MyTeam;
