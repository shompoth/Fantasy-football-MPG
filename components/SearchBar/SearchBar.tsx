// Librairies
import React, { useState, useEffect } from "react";
// import axios from "axios";

// Composant
import { StyleSheet, Text, View, TextInput } from "react-native";

function SearchBar(props: any) {
    // States
    const [search, setSearch] = useState("");

    // Fonctions
    const addLetPlayers = (list: any) => {
        props.addStateLetPlayers(list);
    };

    const searchPlayer = (text: string) => {
        if (text) {
            const newData = props.constPlayers.filter((item: any) => {
                const itemData = item.lastname
                    ? item.lastname.toUpperCase()
                    : "".toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            // console.log(newData);
            props.setPlayers(newData);
            setSearch(text);
        } else {
            props.setPlayers(props.constPlayers);
            setSearch(text);
        }
    };

    return (
        <View style={{ width: "100%" }}>
            <TextInput
                style={styles.textInputStyles}
                value={search}
                placeholder="Nom du joueur"
                underlineColorAndroid="transparent"
                onChangeText={text => searchPlayer(text)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textInputStyles: {
        height: 40,
        borderWidth: 0.3,
        fontSize: 12,
        paddingLeft: 10,
        marginVertical: 10,
        borderColor: "#99a0b2",
        backgroundColor: "white",
        borderRadius: 3,
    },
});

export default SearchBar;
