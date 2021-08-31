//Librairies
import React, { useState } from "react";
import Colors from "../../constants/Colors";

// Composants
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import Draggable from "react-draggable";
import { Icon } from "../../UI";
import { PlayerState } from "../../screens/Home";

// Interface
interface PlayerTeamProps {
    playerLastname: string;
    playerId: number;
    deletePlayerTeamHandler: (arg: number) => void;
}

const PlayerTeam: React.FC<PlayerTeamProps> = props => {
    // States
    // const [left, setLeft] = useState(100);
    // const [top, setTop] = useState(100);

    // Function
    // const handleDrag = (deltaX: number, deltaY: number) => {
    //     setLeft(left + deltaX);
    //     setTop(top + deltaY);
    // };

    return (
        // <Draggable left={left} top={top} onDrag={handleDrag}>
        <View style={styles.playerStyle}>
            <View style={{ marginRight: 5 }}>
                <Icon name="person-circle-outline" color={Colors.grayLowHint} size={20} />
            </View>
            <Text style={{ color: Colors.light, fontSize: 12 }}>
                {props.playerLastname}
            </Text>
            <TouchableOpacity
                style={styles.iconStyle}
                onPress={() => props.deletePlayerTeamHandler(props.playerId)}
                activeOpacity={0.8}
            >
                <Icon name="close-circle" color={Colors.danger} size={16} />
            </TouchableOpacity>
        </View>
        // </Draggable>
    );
};
const styles = StyleSheet.create({
    playerStyle: {
        borderWidth: 1,
        paddingVertical: 2,
        paddingHorizontal: 5,
        backgroundColor: Colors.secondary,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        marginHorizontal: 7,
    },
    iconStyle: {
        position: "absolute",
        right: 0,
        top: 0,
        transform: [{ translateX: "9%" }, { translateY: "-7%" }],
        // backgroundColor: Colors.light,
        // borderRadius: 50,
    },
});

export default PlayerTeam;
