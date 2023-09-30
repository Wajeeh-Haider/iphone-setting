import * as React from "react";
import { user } from "../hooks/FirebaseData";
console.log(user);

import { Ionicons, MaterialIcons, Fontisto } from "react-native-vector-icons";

export const homeScreenData = [
  {
    title: "Airplane Mode",
    status: "",
    icon: <Ionicons name="airplane" style={{ fontSize: 20, color: "white" }} />,
    color: "#FF9500",
  },
  {
    title: "Wi-Fi",
    status: "Off",
    icon: <Ionicons name="airplane" style={{ fontSize: 20, color: "white" }} />,

    color: "#FF9500",
  },
  {
    title: "Bluetooth",
    status: "on",
    icon: (
      <Fontisto name="bluetooth-b" style={{ fontSize: 20, color: "white" }} />
    ),

    color: "#FF9500",
  },
  {
    title: "Cellular",
    status: "",
    icon: (
      <Fontisto name="bluetooth-b" style={{ fontSize: 20, color: "white" }} />
    ),

    color: "#FF9500",
  },
  {
    title: "Personal Hotspot",
    status: "Off",
    icon: (
      <Fontisto name="bluetooth-b" style={{ fontSize: 20, color: "white" }} />
    ),

    color: "#FF9500",
  },
];

export const generalScreenData = [
  "About",
  "Software Update",
  "seprator",
  "AirDrop",
  "AirPlay & Handoff",
  "Picture in Picture",
  "CarPlay",
  "seprator",

  "Home Button",
  "seprator",

  "iPhone Storage",
  "Background App Refresh",
  "seprator",

  "Date & Time",
  "Keyboard",
  "Fonts",
  "Language and Region",
  "Dictionary",
  "seprator",

  "VPN and Device Management",
  "seprator",

  "Legal & Reulatory",
  "seprator",

  "Transfer or Reset iphone",
  "Shutdown",
  "seprator",
];

const aboutData = [
  {
    title: "General",
    value: user?.general,
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
    icon: true,
  },
];
// {
//   "applications": "70",
//   "available": "Yes",
//   "bluetooth": "Yes",
//   "capacity": "500",
//   "carrier": "No",
//   "carrierLock": "no",
//   "coverage": "None",
//   "email": "r.jacobs@gmail.com",
//   "firstName": "Shano",
//   "iccid": "234564564",
//   "imei": "24932458789756162",
//   "iosVersion": "20",
//   "lastName": "Shah",
//   "meid": "55",
//   "modelName": "65687687789773",
//   "modelNumber": "6787667",
//   "modemFirmware": "Yes",
//   "network": "Jazz",
//   "phoneName": "16 pro",
//   "photos": "1,298",
//   "seId": "0998798",
//   "serialNumber": "555980988908",
//   "songs": "5412",
//   "videos": "No",
//   "wifiAddress": "192.168.1001"
//   }
