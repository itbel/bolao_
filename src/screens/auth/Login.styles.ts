import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  background: {
    justifyContent: "center",
    flex: 1,
    padding: 20,
  },
  header: {
    color: "#fff",
    fontFamily: "RobotoSlab-Bold",
    fontSize: 30,
  },
  subheader: {
    color: "#707070",
    fontSize: 20,
    fontFamily: "RobotoSlab-Regular",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    padding: 16,
    height: 56,
  },
  buttonLabel: {
    color: "#225B00",
    fontFamily: "RobotoSlab-Regular",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
