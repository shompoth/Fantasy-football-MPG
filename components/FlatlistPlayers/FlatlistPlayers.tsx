// Librairies
import React, { useState } from "react";

// Composants
import {
    StyleSheet,
    View,
    Text,
    Image,
    Alert,
    TouchableWithoutFeedback,
} from "react-native";

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
                {/* {Alert.alert(
                    player.lastname + showPlusImage
                        ? "à été ajouté"
                        : "à été retiré " + "votre équipe",
                )} */}
                <Image
                    source={sourceImage}
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 17,
                        width: 17,
                    }}
                />
            </>
        );
    };

    const showAlert = (player: string) => {
        setShowPlusImage(!showPlusImage);
        Alert.alert(
            player,
            showPlusImage ? "rejoint votre équipe" : "quitte votre équipe",
        );
    };

    return (
        <View
            style={{
                ...styles.listWrapper,
                backgroundColor: showPlusImage ? "white" : "rgba(91, 196, 69, .6)",
            }}
        >
            <Text style={{ ...styles.row, flex: 1.5 }}>{player.lastname}</Text>
            <Text style={styles.row}>{props.playerPosition(player.ultraPosition)}</Text>
            <Text style={{ ...styles.row, flex: 1.5 }}>{player.club}</Text>
            <Text style={styles.row}>{player.quotation}</Text>
            <TouchableWithoutFeedback onPress={() => showAlert(player.lastname)}>
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
        borderBottomColor: "#e9ebee",
        paddingHorizontal: 10,
    },
    row: {
        flex: 1,
        justifyContent: "center",
        paddingVertical: 10,
        fontSize: 12,
    },
});

export default FlatlistPlayers;
