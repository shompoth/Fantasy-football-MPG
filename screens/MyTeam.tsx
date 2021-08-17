// Librairies
import React, { useState, useEffect } from "react";
import Colors from "../constants/Colors";

// Composants
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";

import { Logo, SearchBar, FlatlistPlayers } from "../components";

// Redux
import { useSelector } from "react-redux";

function MyTeam(props: any) {
    //Variables
    const team = useSelector(state => state.team);

    return (
        <View
            style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
                backgroundColor: Colors.light,
            }}
        >
            <Text>My Team</Text>
            <FlatList
                data={team}
                renderItem={player => (
                    <TouchableOpacity>
                        <Text>{player.item.lastname}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={player => player.id.toString()}
                style={{
                    width: "100%",
                }}
            />
            <TouchableOpacity
                onPress={() => {
                    console.log(team);
                }}
            >
                <Text>console log</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: window.width > 450 ? "85%" : "95%",
        width: "95%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 20,
        backgroundColor: Colors.light,
    },
});

export default MyTeam;
