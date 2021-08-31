// Librairies
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../../constants/Colors";

// Interface
interface EssentialProps {
    children: string;
    stat?: number;
}

const Essential: React.FC<EssentialProps> = props => {
    return (
        <View style={styles.rowDiv}>
            <Text>{props.children}</Text>
            <Text style={styles.blueColor}>{props.stat}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    rowDiv: {
        flexDirection: "row",
        justifyContent: "space-between",
        maxWidth: "100%",
        paddingVertical: 2,
    },
    blueColor: {
        color: Colors.secondary,
    },
});

export default Essential;
