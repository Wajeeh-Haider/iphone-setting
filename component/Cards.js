import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";
import { homeScreenData } from "../data/HomeScreenData";

const Cards = () => {
  return (
    <View>
      {homeScreenData.map((item, i) => {
        return (
          <View
            key={i}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 10,
              backgroundColor: "white",
              paddingVertical: 10,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          >
            <View
              style={{
                backgroundColor: item.color,
                borderRadius: 7,
                padding: 5,
                marginRight: 10,
              }}
            >
              {item.icon}
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16 }}>{item.title}</Text>
            </View>

            {item.status !== "" && (
              <View style={{ marginRight: 10 }}>
                <Text style={{ color: "#828282" }}>{item.status}</Text>
              </View>
            )}
            <View>
              <MaterialIcons name="arrow-forward-ios" style={style.icon} />
            </View>
          </View>
        );
      })}
    </View>
  );
};
const style = StyleSheet.create({
  icon: {
    fontSize: 15,
    color: "#989899",
    marginRight: 11,
    flexBasis: 1,
  },
});

export default Cards;
