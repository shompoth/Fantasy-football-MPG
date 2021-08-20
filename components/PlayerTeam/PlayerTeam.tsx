//Librairies
import React from "react";
import Colors from "../../constants/Colors";

// Composants
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon } from "../../UI";

function PlayerTeam(props) {
    return (
        <View style={styles.playerStyle}>
            <View style={{ marginRight: 5 }}>
                <Icon name="person-circle-outline" color={Colors.grayLowHint} size={20} />
            </View>
            <Text style={{ color: Colors.light }}>{props.playerLastname}</Text>
            <TouchableOpacity
                style={styles.iconStyle}
                onPress={() => props.deletePlayerTeamHandler(props.playerId)}
                activeOpacity={0.8}
            >
                <Icon name="close-circle" color={Colors.danger} size={18} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    playerStyle: {
        flex: 1,
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: Colors.secondary,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        marginHorizontal: 15,
    },
    iconStyle: {
        position: "absolute",
        right: 0,
        top: 0,
        transform: [{ translateX: "12%" }, { translateY: "-8%" }],
    },
});

export default PlayerTeam;
