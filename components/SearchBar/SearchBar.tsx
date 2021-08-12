// Librairies
import React, { useState, useEffect } from "react";
import Colors from "../../constants/Colors";
// import axios from "axios";

// Composants
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import ButtonSelectFilterName from "./ButtonSelectFilterName/ButtonSelectFilterName";
import { Icon } from "../../UI";

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
    const searchPlayer = (text: string | null) => {
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
            {/* <Image
                    style={styles.loupeStyle}
                    source={require("../../assets/loupe.png")}
                /> */}
            <View style={{ ...styles.divImage, paddingLeft: 5 }}>
                <Icon name="search" color={Colors.grayHint} size={18} />
            </View>

            <TextInput
                style={styles.textInputStyles}
                value={search}
                placeholder={activeButtonName}
                underlineColorAndroid="transparent"
                onChangeText={text => searchPlayer(text)}
            />
            <View
                style={{
                    ...styles.divImage,
                    marginRight: 5,
                    paddingRight: 5,
                }}
            >
                {search ? (
                    <TouchableOpacity
                        onPress={() => searchPlayer(null)}
                        activeOpacity={0.7}
                    >
                        <Icon
                            name="close-circle"
                            color={Colors.grayLowHint}
                            size={18}
                            onPress={() => console.log("ok")}
                        />
                    </TouchableOpacity>
                ) : null}
            </View>

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
        marginTop: 10,
        borderRadius: 7,
        backgroundColor: Colors.gray,
    },
    textInputStyles: {
        height: 35,
        fontSize: 12,
        paddingLeft: 5,
        marginVertical: 5,
        borderColor: Colors.grayHint,
        backgroundColor: Colors.light,
        borderRadius: 3,
        flex: 1,
    },
    loupeStyle: {
        height: 13,
        width: 13,
        backgroundColor: Colors.light,
        marginLeft: 10,
        marginRight: 3,
    },
    divImage: {
        height: 35,
        backgroundColor: Colors.light,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default SearchBar;
