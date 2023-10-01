import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "react-native-vector-icons";
import FirebaseData from "../hooks/FirebaseData";

const About = ({ navigation }) => {
  const { user } = FirebaseData();

  const aboutData = [
    {
      title: "Name",
      value: user?.phoneName,
      icon: true,
    },
    {
      title: "iOS Version",
      value: user?.iosVersion,
      icon: true,
    },
    {
      title: "Model Name",
      value: user?.modelName,
    },
    {
      title: "Model Number",
      value: user?.modelNumber,
    },
    {
      title: "Serial Number",
      value: user?.serialNumber,
    },
    {
      title: "seprator",
    },
    {
      title: "Coverage",
      icon: true,
    },
    {
      title: "seprator",
    },
    {
      title: "Network",
      value: user?.network,
    },
    {
      title: "Songs",
      value: user?.songs,
    },
    {
      title: "Videos",
      value: user?.videos,
    },
    {
      title: "Photos",
      value: user?.photos,
    },
    {
      title: "Applications",
      value: user?.applications,
    },
    {
      title: "Capacity",
      value: user?.capacity,
    },
    {
      title: "Available",
      value: user?.available,
    },
    {
      title: "seprator",
    },
    {
      title: "Carrier",
      value: user?.carrier,
    },
    {
      title: "Wi-Fi Address",
      value: user?.wifiAddress,
    },
    {
      title: "Bluetooth",
      value: user?.bluetooth,
    },
    {
      title: "Carrier",
      value: user?.carrier,
    },
    {
      title: "IMEI",
      value: user?.imei,
    },
    {
      title: "ICCID",
      value: user?.iccid,
    },
    {
      title: "MEID",
      value: user?.meid,
    },
    {
      title: "Modem Firmware",
      value: user?.modemFirmware,
    },
    {
      title: "SEID",
      value: user?.seId,
    },
    {
      title: "Carrier Lock",
      value: user?.carrierLock,
    },
    {
      title: "seprator",
    },
    {
      title: "Certificate Trust Settings",
      icon: true,
    },
    {
      title: "seprator",
    },
  ];

  const topRadius = {
    Name: "Name",
    Coverage: "Coverage",
    Network: "Network",
    Carrier: "Carrier",
    CertificateTrustSettings: "Certificate Trust Settings",
  };

  const bottomRadius = {
    SerialNumber: "Serial Number",
    Coverage: "Coverage",
    Available: "Available",
    CarrierLock: "Carrier Lock",
    CertificateTrustSettings: "Certificate Trust Settings",
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
            onPress={() => navigation.navigate("General")}
          >
            <MaterialIcons name="arrow-back-ios" style={styles.icon} />
            <Text style={styles.text}>General</Text>
          </TouchableOpacity>

          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={styles.generalText}>About</Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          {aboutData.map((item, index) => {
            const title = item?.title.split(" ").join("");
            return (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor:
                    item?.title !== "seprator" ? "white" : "#F2F1F6",
                  paddingVertical: item.title !== "seprator" ? 8 : 15,
                  borderTopLeftRadius: topRadius[title] && 12,
                  borderTopRightRadius: topRadius[title] && 12,
                  borderBottomLeftRadius: bottomRadius[title] && 12,
                  borderBottomRightRadius: bottomRadius[title] && 12,
                }}
              >
                {item?.title !== "seprator" && (
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      borderBottomWidth: bottomRadius[title] ? 0 : 1,
                      borderBottomColor: "#F0F0F0",
                      paddingBottom: bottomRadius[title] ? 0 : 6,
                      marginLeft: 15,
                      borderBottomWidth: bottomRadius[title] ? 0 : 1,
                      borderBottomColor: "#F0F0F0",
                      paddingBottom: bottomRadius[title] ? 0 : 6,
                      marginLeft: 15,
                    }}
                    onPress={() =>
                      item?.title === "About" && navigation.navigate("About")
                    }
                  >
                    <Text
                      style={{
                        flex: 1,
                        fontSize: 15,
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        marginRight: 15,
                        color: "#828282",
                      }}
                    >
                      {item.value}
                    </Text>

                    {item?.icon === true && (
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

export default About;

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
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
