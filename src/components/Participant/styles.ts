import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 8,
  },
  name: {
    backgroundColor: "#999999",
    color: "#363636",
    height: 36,
    padding: 4,
    borderRadius: 5,
    flex: 1,
    marginRight: 8,
    justifyContent: "center",
  },
  button: {
    width: 36,
    height: 36,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF4365",
  },
  buttonText: {
    color: "white",
  },
});
