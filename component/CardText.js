import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";

const CardText = ({ heading, setting }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",

        paddingBottom: !setting && 6,
        marginVertical: setting ? 36 : 0,
        backgroundColor: setting ? "white" : null,
        borderRadius: setting ? 12 : 0,
        paddingVertical: setting ? 8 : 0,
      }}
    >
      <Text
        style={{ flex: 1, fontSize: 15, fontWeight: "300", marginLeft: 15 }}
      >
        {heading}
      </Text>
      <View style={style.circle}>
        <Text style={{ fontSize: 14, color: "white" }}>1</Text>
      </View>
      <View>
        <MaterialIcons name="arrow-forward-ios" style={style.icon} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  circle: {
    paddingVertical: 3,
    paddingHorizontal: 9,
    borderRadius: 50,
    backgroundColor: "red",
    marginRight: 15,
  },
  icon: {
    fontSize: 15,
    color: "#989899",
    marginRight: 11,
  },
});

export default CardText;
