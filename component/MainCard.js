import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";
import CardText from "./CardText";
import FirebaseData from "../hooks/FirebaseData";

const MainCard = () => {
  const { user } = FirebaseData();

  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 15,
        marginTop: 15,
      }}
    >
      <View style={style.container}>
        <View style={style.circle}>
          <Text style={style.name}>{`${
            user !== null ? user?.firstName[0] : ""
          }${
            user !== null
              ? user?.lastName[0] === " "
                ? ""
                : user?.lastName[0]
              : ""
          }`}</Text>
        </View>

        <View style={style.textview}>
          <View style={{ flex: 1 }}>
            <Text style={style.title}>{`${
              user !== null ? user?.firstName : ""
            } ${user !== null ? user?.lastName : ""}`}</Text>
            <Text>Apple ID, iCloud+, Media {"\n"}& Purchases</Text>
          </View>
          <View style={{ alignSelf: "center" }}>
            <MaterialIcons name="arrow-forward-ios" style={style.icon} />
          </View>
        </View>
      </View>
      <CardText heading="iPhone Not Backed Up" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    marginVertical: 15,
  },

  textview: {
    flex: 1,
    flexDirection: "row",
    borderBottomColor: "#F0F0F0",
    borderBottomWidth: 1,
    marginLeft: 15,
  },

  circle: {
    padding: 20,
    borderRadius: 50,
    backgroundColor: "#8E929E",
  },

  name: {
    color: "#ffff",
    fontSize: 26,
  },

  title: {
    fontSize: 25,
  },

  icon: {
    fontSize: 15,
    color: "#989899",
  },

  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 5,
  },
});

export default MainCard;
