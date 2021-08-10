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

const FlatlistPlayers = (props: any) => {
    // States
    const [showPlusImage, setShowPlusImage] = useState(true);

    // Variables
    const plusImage = require("../../assets/plus.png");
    const removeImage = require("../../assets/remove.png");
    const player = props.player.item;

    // Fonctions
    const renderImage = () => {
        const sourceImage = showPlusImage ? plusImage : removeImage;
        return (
            <>
                {/* <Image
                    source={sourceImage}
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 17,
                        width: 17,
                    }}
                /> */}
                <Icon
                    name={showPlusImage ? "add-circle" : "close-circle"}
                    color={showPlusImage ? Colors.success : Colors.danger}
                    size={20}
                />
            </>
        );
    };

    const showAlert = () => {
        setShowPlusImage(!showPlusImage);
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
            <TouchableWithoutFeedback onPress={() => showAlert()}>
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
