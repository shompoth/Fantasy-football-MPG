import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

function Icon(props: any) {
    return <Ionicons name={props.name} color={props.color} size={props.size} />;
}

export default Icon;
