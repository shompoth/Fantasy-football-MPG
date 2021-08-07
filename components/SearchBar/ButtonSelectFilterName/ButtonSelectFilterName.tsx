// Librairies
import React from "react";
// import axios from "axios";

// Composant
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
} from "react-native";

function ButtonSelectFilterName(props: any) {
    // Variable
    let activeClassName;
    if (props.children === props.activeButtonName) {
        activeClassName = {
            borderWidth: 0.5,
            borderColor: "#99a0b2",
        };
    } else {
        activeClassName = null;
    }

    return (
        <TouchableHighlight
            style={{ ...styles.button, ...activeClassName }}
            onPress={() => props.setActiveButtonName(props.children)}
            activeOpacity={0.8}
            underlayColor="rgba(213, 215, 219, 1)"
        >
            <View>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 3,
        backgroundColor: "#e9ebee",
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
    // activeClassName: {
    //     borderWidth: 0.4,
    //     borderColor: "#99a0b2",
    // },
});

export default ButtonSelectFilterName;
