import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
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
      <ScrollView
        style={{
          marginTop: StatusBar.currentHeight,
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => navigation.navigate("Home")}
          >
            <MaterialIcons name="arrow-back-ios" style={styles.icon} />
            <Text style={styles.text}>Settings</Text>
          </TouchableOpacity>

          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={styles.generalText}>General</Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          {generalScreenData.map((item, index) => {
            const title = item.split(" ").join("");
            return (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: item !== "seprator" ? "white" : "#F2F1F6",
                  paddingVertical: item !== "seprator" ? 8 : 15,
                  borderTopLeftRadius: topRadius[title] && 12,
                  borderTopRightRadius: topRadius[title] && 12,
                  borderBottomLeftRadius: bottomRadius[title] && 12,
                  borderBottomRightRadius: bottomRadius[title] && 12,
                }}
              >
                {item !== "seprator" && (
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      borderBottomWidth: bottomRadius[title] ? 0 : 1,
                      borderBottomColor: "#F0F0F0",
                      paddingBottom: bottomRadius[title] ? 0 : 6,
                      marginLeft: 15,
                    }}
                    onPress={() =>
                      item === "About" && navigation.navigate("About")
                    }
                  >
                    <Text
                      style={{
                        flex: 1,
                        fontSize: 15,
                        color: item !== "Shutdown" ? "black" : "#0A84FF",
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
    marginRight: 90,
  },
});
