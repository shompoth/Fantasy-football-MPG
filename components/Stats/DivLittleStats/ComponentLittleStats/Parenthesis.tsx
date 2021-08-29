// Librairies
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../../constants/Colors";

// Interface
interface ParenthesisProps {
    children: string;
    stat: number | undefined;
    secondary: number | undefined;
    pourcentage?: boolean;
}

const Parenthesis: React.FC<ParenthesisProps> = props => {
    return (
        <View style={styles.rowDiv}>
            <Text>{props.children}</Text>
            <View style={styles.row}>
                <Text style={styles.blueColor}>{props.stat} </Text>
                {props.secondary && (
                    <Text style={styles.lowerOpacity}>
                        ({props.secondary}
                        {props.pourcentage && <Text>%</Text>})
                    </Text>
                )}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
    },
    rowDiv: {
        flexDirection: "row",
        justifyContent: "space-between",
        maxWidth: "100%",
        paddingVertical: 2,
    },
    blueColor: {
        color: Colors.secondary,
    },
    lowerOpacity: {
        opacity: 0.7,
    },
});

export default Parenthesis;
