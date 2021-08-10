// Librairies
import React, { useState, useEffect } from "react";
import Colors from "../constants/Colors";

// Composants
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    Dimensions,
    SafeAreaView,
    TouchableHighlight,
    TouchableOpacity,
    ActivityIndicator,
    TextProps,
    TextInput,
} from "react-native";

import { Logo, SearchBar, FlatlistPlayers } from "../components";

function MyTeam(props: any) {
    return (
        <View
            style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
                backgroundColor: Colors.light,
            }}
        >
            <Text>My Team</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: window.width > 450 ? "85%" : "95%",
        width: "95%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 20,
        backgroundColor: Colors.light,
    },
});

export default MyTeam;
