// Librairie
import React, { useState, useEffect, FC } from "react";
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from "react-native";

//Composants
import {
    BigStats,
    MainStats,
    KeeperEfficient,
    PlayerEfficient,
    PlayerShot,
    PlayerPass,
    PlayerStrong,
} from "../components";

import Colors from "../constants/Colors";

const PlayerDetails = props => {
    // Variables
    const player = props.route.params.player.item;
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
                    backgroundColor: Colors.primary,
                }}
            >
                <>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                            width: "100%",
                        }}
                    >
                        <View style={{ ...styles.presentationDiv, marginBottom: 15 }}>
                            <Text style={styles.playerName}>
                                {player.firstname} {player.lastname}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.divWrapperBigStats}>
                        <MainStats stats={player.ultraPosition} position={true} />
                        <MainStats stats={player.club} />
                        <MainStats stats={player.birthDate} age={true} />
                    </View>
                    <View style={styles.mt20}>
                        <View style={styles.divWrapperBigStats}>
                            <BigStats stats={player.stats.avgRate}>Note moyenne</BigStats>
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
                                    <BigStats stats={player.stats.sumGoalAssist}>
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
                    <ScrollView style={{ width: "90%" }}>
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
                                    EFFICACE ?
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
                                        EFFICACE ?
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
                                        IL PLANTE ?
                                    </PlayerShot>
                                </View>

                                <View style={styles.divWrapperLittleStats}>
                                    <PlayerPass
                                        sumGoalAssist={player.stats.sumGoalAssist}
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
                                        UN AS DE LA PASSE ?
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
                                        SOLIDE ?
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
        paddingTop: 10,
        paddingBottom: 20,
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
    },
    rowDiv: {
        flexDirection: "row",
        justifyContent: "space-between",
        maxWidth: "100%",
        paddingVertical: 2,
    },
    presentationDiv: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 7,
        paddingBottom: 15,
        paddingHorizontal: 5,
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
});

export default PlayerDetails;
