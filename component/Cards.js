import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";
import { homeScreenData } from "../data/HomeScreenData";

const Cards = ({ navigation }) => {
  const topRadius = {
    AirplaneMode: "Airplane Mode",
    Notifications: "Notifications",
    General: "General",
    AppStore: "App Store",
    Password: "Password",
    Music: "Music",
    TVProvider: "TV Provider",
    Aamazon: "Aamazon",
  };

  const bottomRadius = {
    PersonalHotspot: "Personal Hotspot",
    ScreenTime: "Screen Time",
    "Privacy&Security": "Privacy & Security",
    "Wallet&ApplePay": "Wallet & Apple Pay",
    Home: "Home",
    GameCenter: "Game Center",
    TVProvider: "TV Provider",
    Zoom: "Zoom",
  };

  return (
    <View>
      {homeScreenData.map((item, i) => {
        const title = item?.title.split(" ").join("");
        return (
          <View
            key={i}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 10,
              backgroundColor: item?.title !== "seprator" ? "white" : "#F2F1F6",
              paddingVertical: 10,
              borderTopLeftRadius: topRadius[title] && 12,
              borderTopRightRadius: topRadius[title] && 12,
              borderBottomLeftRadius: bottomRadius[title] && 12,
              borderBottomRightRadius: bottomRadius[title] && 12,
            }}
          >
            {item.title !== "seprator" && (
              <TouchableOpacity
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
                onPress={() =>
                  item?.title === "General" && navigation.navigate("General")
                }
              >
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={item.image}
                  />
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    borderBottomWidth: bottomRadius[title] ? 0 : 1,
                    borderBottomColor: "#F0F0F0",
                    paddingBottom: bottomRadius[title] ? 0 : 6,
                  }}
                >
                  <>
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontSize: 16 }}>{item.title}</Text>
                    </View>

                    {item.status !== "" && (
                      <View style={{ marginRight: 10 }}>
                        <Text style={{ color: "#828282" }}>{item.status}</Text>
                      </View>
                    )}

                    {item.icon && (
                      <View>
                        {
                          <MaterialIcons
                            name="arrow-forward-ios"
                            style={style.icon}
                          />
                        }
                      </View>
                    )}
                    {item.iconEnd && (
                      <Image
                        style={{ width: 50, height: 30, marginRight: 10 }}
                        source={item.iconEnd}
                      />
                    )}
                  </>
                </View>
              </TouchableOpacity>
            )}
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
