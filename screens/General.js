import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "react-native-vector-icons";
import { generalScreenData } from "../data/HomeScreenData";

const General = ({ navigation }) => {
  const topRadius = {
    About: "About",
    AirDrop: "AirDrop",
    HomeButton: "Home Button",
    iPhoneStorage: "iPhone Storage",
    "Date&Time": "Date & Time",
    VPNandDeviceManagement: "VPN & Device Management",
    "Legal&Reulatory": "Legal & Reulatory",
    TransferorResetiphone: "Transfer or Reset iphone",
  };

  const bottomRadius = {
    SoftwareUpdate: "Software Update",
    CarPlay: "CarPlay",
    HomeButton: "Home Button",
    BackgroundAppRefresh: "Background App Refresh",
    Dictionary: "Dictionary",
    VPNandDeviceManagement: "VPN & Device Management",
    "Legal&Reulatory": "Legal & Reulatory",
    Shutdown: "Shutdown",
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F2F1F6" }}>
      <ScrollView style={{ marginTop: 50, paddingLeft: 15, paddingRight: 15 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons
            name="arrow-back-ios"
            style={styles.icon}
            onPress={() => navigation.navigate("Home")}
          />
          <Text style={styles.text} onPress={() => navigation.navigate("Home")}>
            Settings
          </Text>

          <View>
            <Text style={styles.generalText}>General</Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          {generalScreenData.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: item !== "seprator" ? "white" : "#F2F1F6",
                  paddingVertical: 10,
                  borderTopLeftRadius:
                    topRadius[item.split(" ").join("")] && 10,
                  borderTopRightRadius:
                    topRadius[item.split(" ").join("")] && 10,
                  borderBottomLeftRadius:
                    bottomRadius[item.split(" ").join("")] && 10,
                  borderBottomRightRadius:
                    bottomRadius[item.split(" ").join("")] && 10,
                }}
              >
                {item !== "seprator" && (
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    onPress={() =>
                      item === "About" && navigation.navigate("About")
                    }
                  >
                    <Text
                      style={{
                        flex: 1,
                        fontSize: 15,
                        fontWeight: "300",
                        marginLeft: 15,
                        color: item !== "Shutdown" ? "#000" : "#0A84FF",
                      }}
                    >
                      {item}
                    </Text>

                    {item !== "Shutdown" && (
                      <View>
                        <MaterialIcons
                          name="arrow-forward-ios"
                          style={styles.iconForward}
                        />
                      </View>
                    )}
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default General;

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    color: "#0A84FF",
  },
  iconForward: {
    fontSize: 15,
    color: "#989899",
    marginRight: 11,
  },
  text: {
    fontSize: 20,
    color: "#0A84FF",
  },
  generalText: {
    fontSize: 20,
    textAlign: "center",
  },
});
