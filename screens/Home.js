import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
} from "react-native";
import { Feather, FontAwesome } from "react-native-vector-icons";
import MainCard from "../component/MainCard";
import CardText from "../component/CardText";
import Cards from "../component/Cards";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{
          marginTop: StatusBar.currentHeight,
          paddingHorizontal: 15,
        }}
      >
        <Text style={styles.text}>Settings</Text>
        <View style={styles.input}>
          <Feather name="search" style={styles.inputIcon} />
          <TextInput style={styles.inputText} placeholder="Search" />
          <FontAwesome name="microphone" style={styles.inputIcon} />
        </View>
        <MainCard />

        <CardText heading={"Finishing Setting Up Your iPhone"} setting={true} />

        <Cards navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F1F6",
  },

  inputIcon: {
    fontSize: 20,
    fontWeight: "light",
    alignSelf: "center",
    color: "#989899",
  },

  text: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 20,
  },

  input: {
    padding: 10,
    backgroundColor: "#E4E3E8",
    borderRadius: 15,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "start",
  },

  inputText: {
    flex: 1,
    marginLeft: 10,
  },
});
