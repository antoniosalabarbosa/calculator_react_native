import { StyleSheet } from "react-native";

export const FlexGeneralSettings = StyleSheet.create({
    horizontalAlign: {
        justifyContent: "center",
        paddingLeft: 10,
        paddingRight: 10,
    }
});

export const Container_Style = StyleSheet.create({
    rootContainer: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
    },
});

export const Text_Style = StyleSheet.create({
    h1: {
        fontSize: 18,
        fontWeight: "bold",
    },
});

export const Button_Style = StyleSheet.create({
    boxButton: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        gap: 10,
    },

    itemButton: {
        width: "30%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#0f0f0f",
    },

    buttonNumber: {
        fontSize: 24,
        color: "#fff",
    }
});

export const Input_Style = StyleSheet.create({
    calculatorInput: {
        marginVertical: 20,
        borderColor: "#000",
        borderWidth: 3,
        width: "100%",
        fontSize: 30,
    }
});