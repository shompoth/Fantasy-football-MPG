// Librairies
import React from "react";
import Colors from "../../../constants/Colors";
// import axios from "axios";

// Composants
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
} from "react-native";

// Interface
interface ButtonSelectFilterNameProps {
    children: string;
    activeButtonName: string;
    setActiveButtonName: React.Dispatch<React.SetStateAction<string>>;
}

const ButtonSelectFilterName: React.FC<ButtonSelectFilterNameProps> = props => {
    // Variable
    let activeClassName;
    if (props.children === props.activeButtonName) {
        activeClassName = {
            borderWidth: 0.5,
            borderColor: Colors.grayHint,
        };
    } else {
        activeClassName = null;
    }

    return (
        <TouchableHighlight
            style={{ ...styles.button, ...activeClassName }}
            onPress={() => props.setActiveButtonName(props.children)}
            activeOpacity={0.8}
            underlayColor={Colors.grayLowHint}
        >
            <View>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 3,
        backgroundColor: Colors.gray,
        padding: 5,
        marginHorizontal: 2,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 11,
        opacity: 0.4,
    },
});

export default ButtonSelectFilterName;
