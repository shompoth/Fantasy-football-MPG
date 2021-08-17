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
    YellowBox,
} from "react-native";

import { Icon } from "../../UI";

// Redux
import { useDispatch } from "react-redux";
import * as teamActions from "../../store/actions/team";

const FlatlistPlayers = (props: any) => {
    // States
    const [showPlusImage, setShowPlusImage] = useState(true);

    // Variables
    const player = props.player.item;

    // Variable redux
    const dispatch = useDispatch();

    // Fonctions
    const renderImage = () => {
        return (
            <Icon
                name={showPlusImage ? "person-add" : "person-remove"}
                color={showPlusImage ? Colors.success : Colors.danger}
                size={16}
            />
        );
    };

    const updatedTeamPlayerHandler = player => {
        setShowPlusImage(!showPlusImage);
        if (showPlusImage) {
            dispatch(teamActions.addInTeam(player));
        } else {
            dispatch(teamActions.removeInTeam(player.id));
        }
        Alert.alert(
            player.firstname + " " + player.lastname,
            showPlusImage ? "rejoint votre équipe" : "quitte votre équipe",
        );
    };

    return (
        <View
            style={{
                ...styles.listWrapper,
                backgroundColor: showPlusImage ? Colors.light : Colors.primaryLight,
            }}
        >
            <Text style={{ ...styles.row, flex: 1.5 }}>{player.lastname}</Text>
            <Text style={styles.row}>{props.playerPosition(player.ultraPosition)}</Text>
            <Text style={{ ...styles.row, flex: 1.5 }}>{player.club}</Text>
            <Text style={styles.row}>{player.quotation}</Text>
            <TouchableWithoutFeedback onPress={() => updatedTeamPlayerHandler(player)}>
                <View style={{ ...styles.row, flex: 0.3 }}>{renderImage()}</View>
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
