import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#042940",
    padding: 24,
    flex: 1,
    paddingTop: 48,
  },
  event: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 24,
  },
  date: {
    color: "#D9D9D9",
    fontSize: 16,
  },
  input: {
    backgroundColor: "#999999",
    color: "#363636",
    height: 36,
    padding: 4,
    borderRadius: 5,
    flex: 1,
    marginRight: 8,
  },
  button: {
    width: 36,
    height: 36,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DBF227",
  },
  listEmptyText: {
    color: "#fff",
    textAlign: "center",
  },
});
