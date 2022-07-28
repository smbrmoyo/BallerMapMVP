import { Dimensions, StyleSheet } from "react-native";
import { hsize } from "../../utils/Dimensions";

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width,
    height,
    alignItems: "center",
    padding: hsize(20),
  },
  imageSubContainer: {
    flex: 0.7,
    justifyContent: "center",
  },
  image: {
    width: width / 2,
    height: height / 2,
    resizeMode: "contain",
  },
  text: {
    flex: 0.3,
  },
  indicatorContainer: {
    position: "absolute",
    bottom: hsize(50),
    flexDirection: "row",
  },
  indicator: {
    height: hsize(10),
    width: hsize(10),
    borderRadius: hsize(5),
    backgroundColor: "white",
    margin: hsize(10),
  },
  doneContainer: {
    bottom: hsize(50),
    right: hsize(20),
  },
});

export default styles;
