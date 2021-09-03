// Librairies
import React, { useState, useEffect } from "react";
import Colors from "../../constants/Colors";
// import axios from "axios";

// Composants
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import ButtonSelectFilterName from "./ButtonSelectFilterName/ButtonSelectFilterName";
import { Icon } from "../../UI";

// Interface
import { PlayerState } from "../../screens/Home";
interface SearchBarProps {
    constPlayers: PlayerState[] | null;
    setPlayers: React.Dispatch<React.SetStateAction<PlayerState[] | null>>;
    playerPosition: (arg: number) => string;
    setSortPlayers: React.Dispatch<React.SetStateAction<string | null>>;
}

// Enum
enum ListSearchBar {
    Joueur = "Joueur",
    Poste = "Poste",
    Club = "Club",
}

const SearchBar: React.FC<SearchBarProps> = props => {
    // States
    const [search, setSearch] = useState<string>("");
    const [buttonFilterName, setButtonFilterName] = useState<string[]>([
        ListSearchBar.Joueur,
        ListSearchBar.Poste,
        ListSearchBar.Club,
    ]);
    const [activeButtonName, setActiveButtonName] = useState<string>(buttonFilterName[0]);

    // Fonction
    const searchPlayerHandler = (text: string) => {
        if (text && props.constPlayers) {
            const newData = props.constPlayers.filter((item: PlayerState) => {
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
                if (itemData) {
                    return itemData.indexOf(textData) > -1;
                }
            });
            props.setPlayers(newData);
            setSearch(text);
        } else {
            setSearch(text);
            props.setPlayers(props.constPlayers);
        }
        props.setSortPlayers(null);
    };

    return (
        <View style={styles.containerSearchBar}>
            <View style={{ ...styles.divImage, paddingLeft: 5 }}>
                <Icon name="search" color={Colors.grayHint} size={18} />
            </View>

            <TextInput
                style={styles.textInputStyles}
                value={search}
                placeholder={activeButtonName}
                underlineColorAndroid="transparent"
                onChangeText={text => searchPlayerHandler(text)}
                autoCorrect={false}
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
                        onPress={() => searchPlayerHandler("")}
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
};

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
