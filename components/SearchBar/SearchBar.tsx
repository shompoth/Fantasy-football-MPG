// Librairies
import React, { useState, useEffect } from "react";
// import axios from "axios";

// Composant
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import ButtonSelectFilterName from "./ButtonSelectFilterName/ButtonSelectFilterName";

function SearchBar(props: any) {
    // States
    const [search, setSearch] = useState<string | null>(null);
    const [buttonFilterName, setButtonFilterName] = useState<string[]>([
        "Joueur",
        "Poste",
        "Club",
    ]);
    const [activeButtonName, setActiveButtonName] = useState<string>(buttonFilterName[0]);

    // Fonctions
    const searchPlayer = (text: string) => {
        if (text) {
            // props.setActiveSearch(true);
            const newData = props.constPlayers.filter((item: any) => {
                let itemData;
                if (activeButtonName === buttonFilterName[0]) {
                    itemData = item.lastname
                        ? item.lastname.toUpperCase()
                        : "".toUpperCase();
                } else if (activeButtonName === buttonFilterName[1]) {
                    itemData = props.playerPosition(item.ultraPosition)
                        ? props.playerPosition(item.ultraPosition).toUpperCase()
                        : "".toUpperCase();
                } else if (activeButtonName === buttonFilterName[2]) {
                    itemData = item.club ? item.club.toUpperCase() : "".toUpperCase();
                }

                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            props.setPlayers(newData);
            setSearch(text);
            // !props.searchItemActivated && props.setSearchItemActivated(true);
            // props.setSortPlayers(null);
        } else {
            setSearch(text);
            // props.setSearchItemActivated(false);
            props.setPlayers(props.constPlayers);
            // props.setPlayers(props.letPlayers);
        }
        props.setSortPlayers(null);
    };

    return (
        <View style={styles.containerSearchBar}>
            <View style={styles.divImage}>
                <Image
                    style={styles.loupeStyle}
                    source={require("../../assets/loupe.png")}
                />
            </View>
            <TextInput
                style={styles.textInputStyles}
                value={search}
                placeholder={activeButtonName}
                underlineColorAndroid="transparent"
                onChangeText={text => searchPlayer(text)}
            />

            {buttonFilterName.map(item => (
                <ButtonSelectFilterName
                    key={item}
                    activeButtonName={activeButtonName}
                    setActiveButtonName={setActiveButtonName}
                >
                    {item}
                </ButtonSelectFilterName>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    containerSearchBar: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 5,
        borderRadius: 7,
        backgroundColor: "#e9ebee",
    },
    textInputStyles: {
        height: 40,
        // borderWidth: 0.3,
        fontSize: 12,
        paddingLeft: 5,
        marginVertical: 10,
        marginRight: 5,
        borderColor: "#99a0b2",
        // borderColor: "rgba(91, 196, 69, 0.7)",

        backgroundColor: "#fff",
        borderRadius: 3,
        flex: 1,
    },
    loupeStyle: {
        height: 13,
        width: 13,
        backgroundColor: "#fff",
        marginLeft: 10,
        marginRight: 3,
    },
    divImage: {
        height: 40,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default SearchBar;
