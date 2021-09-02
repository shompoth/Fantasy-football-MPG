// Librairies
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Alert,
    LogBox,
} from "react-native";
import Colors from "../constants/Colors";

LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);

// Composants
import {
    BigStats,
    MainStats,
    KeeperEfficient,
    PlayerEfficient,
    PlayerShot,
    PlayerPass,
    PlayerStrong,
} from "../components";
import { Icon } from "../UI";
import { PlayerState } from "./Home";

// Redux
import { useSelector, useDispatch } from "react-redux";
import * as teamActions from "../store/actions/team";

// Type
import { RootState } from "../App";

// Interface
interface PlayerDetailsProps {
    route: { params: { player: { item: PlayerState } } };
}

const PlayerDetails: React.FC<PlayerDetailsProps> = props => {
    // Variables
    const player: PlayerState = props.route.params.player.item;
    const team = useSelector((state: RootState) => state.team);

    const dispatch = useDispatch();

    // Fonction
    const updatedTeamPlayerHandler = (player: PlayerState) => {
        // variable
        const countMaxThreeKeeper =
            team.filter((player: PlayerState) => player.ultraPosition === 10).length ===
            3;

        if (countMaxThreeKeeper && player.ultraPosition === 10) {
            Alert.alert(
                "Attention",
                "Vous ne pouvez pas avoir plus de 3 gardiens dans votre équipe",
            );
            return;
        }
        if (team.indexOf(player)) {
            dispatch(teamActions.addInTeam(player));
        } else {
            dispatch(teamActions.removeInTeam(player.id));
        }
        if (
            (team.length < 18 && team.indexOf(player)) ||
            (team.length < 19 && !team.indexOf(player))
        )
            Alert.alert(
                player.firstname + " " + player.lastname,
                !team.indexOf(player) ? "quitte votre équipe" : "rejoint votre équipe",
            );
    };

    return (
        <View
            style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
            }}
        >
            <View
                style={{
                    ...styles.container,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                }}
            >
                <>
                    <View
                        style={{
                            backgroundColor: Colors.gray,
                            width: "100%",
                            borderRadius: 10,
                            marginBottom: 10,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-around",
                                width: "100%",
                            }}
                        >
                            <View style={styles.presentationDiv}>
                                <View style={{ marginRight: 20 }}>
                                    <Text style={styles.playerName}>
                                        {player.firstname} {player.lastname}
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => updatedTeamPlayerHandler(player)}
                                >
                                    <Icon
                                        name={
                                            !team.indexOf(player)
                                                ? "person-remove"
                                                : "person-add"
                                        }
                                        color={
                                            !team.indexOf(player)
                                                ? Colors.danger
                                                : Colors.success
                                        }
                                        size={18}
                                    ></Icon>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.divWrapperBigStats}>
                            <MainStats stats={player.ultraPosition} position={true} />
                            <MainStats stats={player.club} />
                            <MainStats stats={player.birthDate} age={true} />
                        </View>
                        <View style={styles.mt20}>
                            <View style={styles.divWrapperBigStats}>
                                <BigStats stats={player.stats.avgRate}>Note moy</BigStats>
                                {player.ultraPosition === 10 ? (
                                    <>
                                        <BigStats stats={player.stats.sumCleanSheet}>
                                            Clean Sheat
                                        </BigStats>
                                        <BigStats stats={player.stats.percentageSaveShot}>
                                            % Sauvés
                                        </BigStats>
                                    </>
                                ) : (
                                    <>
                                        <BigStats
                                            stats={player.stats.sumGoals}
                                            parenthesisStats={player.stats.sumPenalties}
                                        >
                                            Buts (pén.)
                                        </BigStats>
                                        <BigStats stats={player.stats.sumGoalAssists}>
                                            Passe dé
                                        </BigStats>
                                    </>
                                )}
                            </View>
                            <View style={styles.divWrapperBigStats}>
                                <BigStats stats={player.quotation}>Côte</BigStats>
                                <BigStats
                                    stats={player.stats.appearances.starter}
                                    parenthesisStats={player.stats.appearances.standIn}
                                >
                                    Titu (remp.)
                                </BigStats>

                                <BigStats
                                    redCard={player.stats.sumRedCard}
                                    yellowCard={player.stats.sumYellowCard}
                                    card={true}
                                >
                                    Cartons
                                </BigStats>
                            </View>
                        </View>
                    </View>
                    <ScrollView
                        style={{
                            width: "100%",
                            // paddingHorizontal: 10,
                            paddingHorizontal: 5,

                            backgroundColor: Colors.light,
                        }}
                    >
                        {player.ultraPosition === 10 ? (
                            <View style={styles.divWrapperLittleStats}>
                                <KeeperEfficient
                                    goalsConcededByMatch={
                                        player.stats.goalsConcededByMatch
                                    }
                                    sumCleanSheet={player.stats.sumCleanSheet}
                                    sumSaves={player.stats.sumSaves}
                                    sumDeflect={player.stats.sumDeflect}
                                    sumPenaltySave={player.stats.sumPenaltySave}
                                    sumPenaltyFaced={player.stats.sumPenaltyFaced}
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <View style={styles.mr5}>
                                            <Icon
                                                name={"rocket-outline"}
                                                size={18}
                                                color={Colors.success}
                                            />
                                        </View>
                                        <Text style={styles.textMarginB18}>
                                            EFFICACE ?
                                        </Text>
                                    </View>
                                </KeeperEfficient>
                            </View>
                        ) : (
                            <>
                                <View style={styles.divWrapperLittleStats}>
                                    <PlayerEfficient
                                        wonContestByMatch={player.stats.wonContestByMatch}
                                        percentageWonContest={
                                            player.stats.percentageWonContest
                                        }
                                        wonDuelByMatch={player.stats.wonDuelByMatch}
                                        percentageWonDuel={player.stats.percentageWonDuel}
                                        lostBallByMatch={player.stats.lostBallByMatch}
                                        percentageLostBall={
                                            player.stats.percentageLostBall
                                        }
                                        foulsByMatch={player.stats.foulsByMatch}
                                        foulsEnduredByMatch={
                                            player.stats.foulsEnduredByMatch
                                        }
                                        shotOnTargetByMatch={
                                            player.stats.shotOnTargetByMatch
                                        }
                                        percentageShotOnTarget={
                                            player.stats.percentageShotOnTarget
                                        }
                                    >
                                        <View style={styles.divRowCenter}>
                                            <View style={styles.mr5}>
                                                <Icon
                                                    name={"rocket-outline"}
                                                    size={18}
                                                    color={Colors.success}
                                                />
                                            </View>
                                            <Text style={styles.textMarginB18}>
                                                EFFICACE ?
                                            </Text>
                                        </View>
                                    </PlayerEfficient>
                                </View>

                                <View style={styles.divWrapperLittleStats}>
                                    <PlayerShot
                                        sumGoals={player.stats.sumGoals}
                                        sumPenalties={player.stats.sumPenalties}
                                        minutesByGoal={player.stats.minutesByGoal}
                                        goalByMatch={player.stats.goalByMatch}
                                        shotByMatch={player.stats.shotByMatch}
                                        sumBigChanceMissed={
                                            player.stats.sumBigChanceMissed
                                        }
                                    >
                                        <View style={styles.divRowCenter}>
                                            <View style={styles.mr5}>
                                                <Icon
                                                    name={"ribbon-outline"}
                                                    size={18}
                                                    color={Colors.success}
                                                />
                                            </View>
                                            <Text style={styles.textMarginB18}>
                                                IL PLANTE ?
                                            </Text>
                                        </View>
                                    </PlayerShot>
                                </View>

                                <View style={styles.divWrapperLittleStats}>
                                    <PlayerPass
                                        sumGoalAssist={player.stats.sumGoalAssists}
                                        sumBigChanceCreated={
                                            player.stats.sumBigChanceCreated
                                        }
                                        succeedPassByMatch={
                                            player.stats.succeedPassByMatch
                                        }
                                        percentageSucceedPass={
                                            player.stats.percentageSucceedPass
                                        }
                                        succeedPassBackZoneByMatch={
                                            player.stats.succeedPassBackZoneByMatch
                                        }
                                        percentageAccuratePassBackZone={
                                            player.stats.percentageAccuratePassBackZone
                                        }
                                        succeedLongPassByMatch={
                                            player.stats.succeedLongPassByMatch
                                        }
                                        percentageAccurateLongPass={
                                            player.stats.percentageAccurateLongPass
                                        }
                                        succeedCrossByMatch={
                                            player.stats.succeedCrossByMatch
                                        }
                                        percentageCrossSuccess={
                                            player.stats.percentageCrossSuccess
                                        }
                                    >
                                        <View style={styles.divRowCenter}>
                                            <View style={styles.mr5}>
                                                <Icon
                                                    name={"resize-outline"}
                                                    size={18}
                                                    color={Colors.success}
                                                />
                                            </View>
                                            <Text style={styles.textMarginB18}>
                                                UN AS DE LA PASSE ?
                                            </Text>
                                        </View>
                                    </PlayerPass>
                                </View>

                                <View style={styles.divWrapperLittleStats}>
                                    <PlayerStrong
                                        interceptByMatch={player.stats.interceptByMatch}
                                        tackleByMatch={player.stats.tackleByMatch}
                                        goalsConcededByMatch={
                                            player.stats.goalsConcededByMatch
                                        }
                                        mistakeByMatch={player.stats.mistakeByMatch}
                                    >
                                        <View style={styles.divRowCenter}>
                                            <View style={styles.mr5}>
                                                <Icon
                                                    name={"barbell-outline"}
                                                    size={18}
                                                    color={Colors.success}
                                                />
                                            </View>
                                            <Text style={styles.textMarginB18}>
                                                SOLIDE ?
                                            </Text>
                                        </View>
                                    </PlayerStrong>
                                </View>
                            </>
                        )}
                    </ScrollView>
                </>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.light,
        width: "100%",
    },
    divWrapperBigStats: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 10,
        borderBottomWidth: 0.3,
        borderBottomColor: Colors.gray,
        width: "100%",
    },
    divWrapperLittleStats: {
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: Colors.light,
        elevation: 3,
        shadowColor: Colors.grayHint,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 10,
        shadowRadius: 3,
    },
    rowDiv: {
        flexDirection: "row",
        justifyContent: "space-between",
        maxWidth: "100%",
        paddingVertical: 2,
    },
    presentationDiv: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 7,
        paddingBottom: 15,
        paddingHorizontal: 5,
        marginBottom: 5,
    },
    playerName: {
        fontSize: 22,
        fontWeight: "bold",
    },
    blueTextCenter20: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: Colors.secondary,
        marginTop: 5,
    },
    blueColor: {
        color: Colors.secondary,
    },
    card18: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 5,
        color: Colors.light,
        paddingHorizontal: 2,
    },
    textCenter18: {
        fontSize: 18,
        textAlign: "center",
    },
    textCenter16: {
        fontSize: 16,
        textAlign: "center",
    },
    textMarginB18: {
        fontSize: 18,
        marginBottom: 5,
    },
    mt20: {
        marginVertical: 10,
    },
    mr5: {
        marginRight: 5,
    },
    detailProperty: {
        fontSize: 18,
        marginBottom: 5,
    },
    divRowCenter: {
        flexDirection: "row",
        justifyContent: "center",
    },
});

export default PlayerDetails;
