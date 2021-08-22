// Librairies
import React, { useState } from "react";
import Colors from "../../constants/Colors";

// Composants
import {
    StyleSheet,
    View,
    Text,
    Image,
    Alert,
    TouchableWithoutFeedback,
} from "react-native";

import { Icon } from "../../UI";

// Redux
import { useSelector, useDispatch } from "react-redux";
import * as teamActions from "../../store/actions/team";

const FlatlistPlayers = props => {
    // Variable
    const player = props.player.item;
    const team = useSelector(state => state.team.team);

    // Variable redux
    const dispatch = useDispatch();

    // Fonctions
    const renderImage = player => {
        return (
            <Icon
                name={team.includes(player) ? "person-remove" : "person-add"}
                color={team.includes(player) ? Colors.danger : Colors.success}
                size={16}
            />
        );
    };

    // CHECK HERE ----------------------------------------------------------
    const updatedTeamPlayerHandler = player => {
        // variable
        const countMaxThreeKeeper =
            team.filter(player => player.ultraPosition === 10).length === 3;

        if (countMaxThreeKeeper && player.ultraPosition === 10) {
            Alert.alert(
                "Attention",
                "Vous ne pouvez pas avoir plus de 3 gardiens dans votre équipe",
            );
            return;
        }
        if (!team.includes(player)) {
            dispatch(teamActions.addInTeam(player));
        } else {
            dispatch(teamActions.removeInTeam(player.id));
        }

        if (
            (team.length < 18 && !team.includes(player)) ||
            (team.length < 19 && team.includes(player))
        )
            Alert.alert(
                player.firstname + " " + player.lastname,
                team.includes(player) ? "quitte votre équipe" : "rejoint votre équipe",
            );
    };

    return (
        <View
            style={{
                ...styles.listWrapper,
                backgroundColor: team.includes(player)
                    ? Colors.primaryLight
                    : Colors.light,
            }}
        >
            <Text style={{ ...styles.row, flex: 1.5 }}>{player.lastname}</Text>
            <Text style={styles.row}>{props.playerPosition(player.ultraPosition)}</Text>
            <Text style={{ ...styles.row, flex: 1.5 }}>{player.club}</Text>
            <Text style={styles.row}>{player.quotation}</Text>
            <TouchableWithoutFeedback onPress={() => updatedTeamPlayerHandler(player)}>
                <View style={{ ...styles.row, flex: 0.3 }}>{renderImage(player)}</View>
            </TouchableWithoutFeedback>
        </View>
    );
};
const styles = StyleSheet.create({
    listWrapper: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "nowrap",
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        paddingHorizontal: 10,
        borderRadius: 3,
    },
    row: {
        flex: 1,
        justifyContent: "center",
        paddingVertical: 10,
        fontSize: 12,
    },
});

export default FlatlistPlayers;
