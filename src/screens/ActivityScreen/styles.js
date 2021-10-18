import { StyleSheet } from "react-native";
import { hsize, wsize } from "../../utils/Dimensions";

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 20,
    fontFamily: "ComfortaaBold",
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.05)",
    //marginBottom: 15,
    marginHorizontal: 10,
  },
  postHeaderContainer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: wsize(20),
    paddingVertical: hsize(10),
    justifyContent: "space-between",
    width: "100%",
    marginBottom: hsize(3),
    //backgroundColor: "grey",
  },
  postHeaderFirst: {
    flexDirection: "row",
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    elevation: 2.5,
    borderRadius: 10,
    height: hsize(80),
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    margin: hsize(10),
  },
});

export default styles;
