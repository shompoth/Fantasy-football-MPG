// Librairies
import React, { useState, useEffect } from "react";
import Colors from "../constants/Colors";
import { NavigationProp } from "@react-navigation/native";
import axios from "axios";
import { RootStackParamList } from "../navigation/Navigators";

// Composants
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
    ScaledSize,
} from "react-native";
import { SearchBar, FlatlistPlayers } from "../components";

// Enum
enum TableList {
    Joueurs = "Joueurs",
    Poste = "Poste",
    Club = "Club",
    Cote = "Cote",
    Empty = "",
}
import { PositionJoueur } from "../Utils/enum";

// Variables
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export interface PlayerState {
    lastname: string;
    ultraPosition: number;
    club: string;
    quotation: number;
    id: number;
    firstname?: string;
    birthDate: number;
    stats: {
        avgRate: number;
        sumGoals?: number;
        sumPenalties?: number;
        sumGoalAssists?: number;
        appearances: {
            starter: number;
            standIn: number;
        };
        sumRedCard: number;
        sumYellowCard: number;
        wonContestByMatch?: number;
        percentageWonContest?: number;
        wonDuelByMatch?: number;
        percentageWonDuel?: number;
        lostBallByMatch?: number;
        percentageLostBall?: number;
        foulsByMatch?: number;
        foulsEnduredByMatch?: number;
        percentageShotOnTarget?: number;
        shotOnTargetByMatch?: number;
        minutesByGoal?: number;
        goalByMatch?: number;
        shotByMatch?: number;
        sumBigChanceMissed?: number;
        sumBigChanceCreated?: number;
        succeedPassByMatch?: number;
        percentageSucceedPass?: number;
        succeedPassBackZoneByMatch?: number;
        percentageAccuratePassBackZone?: number;
        percentageAccurateLongPass?: number;
        succeedCrossByMatch?: number;
        percentageCrossSuccess?: number;
        succeedLongPassByMatch?: number;
        interceptByMatch?: number;
        tackleByMatch?: number;
        goalsConcededByMatch?: number;
        mistakeByMatch?: number;

        sumCleanSheet?: number;
        sumSaves?: number;
        sumDeflect?: number;
        sumPenaltySave?: number;
        sumPenaltyFaced?: number;
        percentageSaveShot?: number;
    };
}

interface HomeProps {
    navigation: { navigate: Function };
}

const Home: React.FC<HomeProps> = props => {
    // States

    const [tableList, setTableList] = useState<string[]>([
        TableList.Joueurs,
        TableList.Poste,
        TableList.Club,
        TableList.Cote,
        TableList.Empty,
    ]);
    const [players, setPlayers] = useState<PlayerState[] | null>(null);
    const [constPlayers, setConstPlayers] = useState<PlayerState[] | null>(null);
    const [letPlayers, setLetPlayers] = useState<PlayerState[] | null>(null);

    const [sortPlayers, setSortPlayers] = useState<string | null>(null);

    // Cycles de vie
    useEffect(() => {
        axios
            .get(
                `https://mpg-t-290dd-default-rtdb.europe-west1.firebasedatabase.app/players.json`,
            )
            .then(res => {
                const playersArray = [];

                for (let key in res.data) {
                    playersArray.push(...res.data[key]);
                }
                setPlayers(playersArray);
                setConstPlayers(playersArray);
                setLetPlayers(playersArray);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    // Fonctions
    const playerPosition = (ultraPosition: number): string => {
        let position: string | null;

        switch (ultraPosition) {
            case PositionJoueur.Gardien:
                position = "G";
                break;
            case PositionJoueur.Defenseur:
                position = "D";
                break;
            case PositionJoueur.Lateral:
                position = "L";
                break;
            case PositionJoueur.MilieuDefensif:
                position = "MD";
                break;
            case PositionJoueur.MilieuOffensif:
                position = "MO";
                break;
            case PositionJoueur.Attaquant:
                position = "A";
                break;
            default:
                position = null;
                break;
        }
        return position!;
    };

    const settingSortHandler = (sort: string | null) => {
        if (players && constPlayers) {
            const newPlayers = [...players];
            const newFixedPlayers = [...constPlayers];

            // Joueurs
            if (sort === tableList[0]) {
                if (sortPlayers === "alphaDescending") {
                    setSortPlayers("alphaAscending");
                    newPlayers.sort((a, b) =>
                        b.lastname.toUpperCase() > a.lastname.toUpperCase() ? 1 : -1,
                    );
                    newFixedPlayers.sort((a, b) =>
                        b.lastname.toUpperCase() > a.lastname.toUpperCase() ? 1 : -1,
                    );
                } else {
                    setSortPlayers("alphaDescending");
                    newPlayers.sort((a, b) =>
                        a.lastname.toUpperCase() > b.lastname.toUpperCase() ? 1 : -1,
                    );
                    newFixedPlayers.sort((a, b) =>
                        a.lastname.toUpperCase() > b.lastname.toUpperCase() ? 1 : -1,
                    );
                }
            }
            // Poste
            if (sort === tableList[1]) {
                if (sortPlayers === "posteDescending") {
                    setSortPlayers("posteAscending");
                    newPlayers.sort((a, b) =>
                        b.ultraPosition > a.ultraPosition ? 1 : -1,
                    );
                    newFixedPlayers.sort((a, b) =>
                        b.ultraPosition > a.ultraPosition ? 1 : -1,
                    );
                } else {
                    setSortPlayers("posteDescending");
                    newPlayers.sort((a, b) =>
                        a.ultraPosition > b.ultraPosition ? 1 : -1,
                    );
                    newFixedPlayers.sort((a, b) =>
                        a.ultraPosition > b.ultraPosition ? 1 : -1,
                    );
                }
            }
            // Club
            if (sort === tableList[2]) {
                if (sortPlayers === "clubDescending") {
                    setSortPlayers("clubAscending");
                    newPlayers.sort((a, b) => (b.club > a.club ? 1 : -1));
                    newFixedPlayers.sort((a, b) => (b.club > a.club ? 1 : -1));
                } else {
                    setSortPlayers("clubDescending");
                    newPlayers.sort((a, b) => (a.club > b.club ? 1 : -1));
                    newFixedPlayers.sort((a, b) => (a.club > b.club ? 1 : -1));
                }
            }
            // Cote
            if (sort === tableList[3]) {
                if (sortPlayers === "coteDescending") {
                    setSortPlayers("coteAscending");
                    newPlayers.sort((a, b) => b.quotation - a.quotation);
                    newFixedPlayers.sort((a, b) => b.quotation - a.quotation);
                } else {
                    setSortPlayers("coteDescending");
                    newPlayers.sort((a, b) => a.quotation - b.quotation);
                    newFixedPlayers.sort((a, b) => a.quotation - b.quotation);
                }
            }
            setPlayers(newPlayers);
            setLetPlayers(newFixedPlayers);
        }
    };

    const displayArrowHandler = (item: string) => {
        let arrow;
        // Joueurs
        if (item === tableList[0]) {
            if (sortPlayers === "alphaDescending") {
                arrow = <Text>(A-Z)</Text>;
            } else if (sortPlayers === "alphaAscending") {
                arrow = <Text>(Z-A)</Text>;
            }
        }
        // Poste
        else if (item === tableList[1]) {
            if (sortPlayers === "posteAscending") {
                arrow = <Text>(A-G)</Text>;
            } else if (sortPlayers === "posteDescending") {
                arrow = <Text>(G-A)</Text>;
            }
        }
        // Club
        else if (item === tableList[2]) {
            if (sortPlayers === "clubAscending") {
                arrow = <Text>(Z-A)</Text>;
            } else if (sortPlayers === "clubDescending") {
                arrow = <Text>(A-Z)</Text>;
            }
        }
        // Cote
        else if (item === tableList[3]) {
            if (sortPlayers === "coteAscending") {
                arrow = <Text>(∞-0)</Text>;
            } else if (sortPlayers === "coteDescending") {
                arrow = <Text>(0-∞)</Text>;
            }
        } else {
            arrow = null;
        }

        return <Text style={{ opacity: 0.6, fontSize: 9 }}>{arrow}</Text>;
    };

    const flexItem = (item: string) => {
        if (item === TableList.Joueurs || item === TableList.Club) return 1.5;
        else if (!item) return 0.3;
        else return 1;
    };

    return (
        <View
            style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
                backgroundColor: Colors.light,
            }}
        >
            {players ? (
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <SearchBar
                        constPlayers={constPlayers}
                        setPlayers={setPlayers}
                        playerPosition={playerPosition}
                        setSortPlayers={setSortPlayers}
                    />
                    <View
                        style={{
                            paddingHorizontal: 10,
                            borderRadius: 5,
                            flexDirection: "row",
                        }}
                    >
                        {tableList.map(item => (
                            <TouchableOpacity
                                onPress={() => settingSortHandler(item)}
                                activeOpacity={0.6}
                                style={{
                                    ...styles.listWrapper,
                                    paddingHorizontal: 0,
                                    borderBottomWidth: 0,
                                    flex: flexItem(item),
                                }}
                                key={item}
                            >
                                <View
                                    style={{
                                        ...styles.row,
                                        height: 50,
                                    }}
                                >
                                    <Text
                                        style={{
                                            ...styles.row,
                                            color: Colors.grayHint,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {item}
                                        {sortPlayers && displayArrowHandler(item)}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <FlatList
                        data={players}
                        renderItem={player => (
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate("Detail", {
                                        player,
                                    });
                                }}
                                activeOpacity={0.7}
                            >
                                <FlatlistPlayers
                                    player={player}
                                    playerPosition={playerPosition}
                                />
                            </TouchableOpacity>
                        )}
                        keyExtractor={player => player.id.toString()}
                        style={{
                            width: "100%",
                        }}
                    />
                </View>
            ) : (
                <ActivityIndicator size="large" color="#000" />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "95%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 0,
        backgroundColor: Colors.light,
    },
    listWrapper: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "nowrap",
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        paddingHorizontal: 10,
    },
    row: {
        flex: 1,
        justifyContent: "center",
        paddingVertical: 10,
        fontSize: 12,
    },
});

export default Home;
