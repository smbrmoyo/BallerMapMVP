import { StyleSheet, StatusBar, Dimensions } from "react-native";

import { hsize, wsize } from "../../utils/Dimensions";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 100;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const styles = StyleSheet.create({
  mapContainer: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  buttonAdd: {
    justifyContent: "center",
    alignItems: "center",
    height: wsize(70),
    width: wsize(70),
    borderRadius: wsize(35),
    borderWidth: 0.5,
    borderColor: "white",
    backgroundColor: "#F4F4F4", //"rgba(0,0,0,0.2)",
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  buttonFind: {
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 0.5,
    borderColor: "white",
    backgroundColor: "#F4F4F4",
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  storyScrollView: {
    position: "absolute",
    top: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    left: 0,
    right: 0,
    paddingHorizontal: 5,
    height: 100,
    //borderRadius: 50,
    borderBottomWidth: 0.1,
    borderBottomColor: "black",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  scrollView: {
    position: "absolute",
    bottom: "-22%",
    flex: 1,
    paddingHorizontal: SPACING_FOR_CARD_INSET,
  },
  cardScrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  card: {
    padding: 10,
    alignItems: "center",
    elevation: 2,
    backgroundColor: "#F4F4F4",
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 20,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    //overflow: "hidden",
    flexDirection: "row",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cardtitle: {
    fontSize: 20,
    alignItems: "center",
    // marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 16,
    alignSelf: "center",
    // marginTop: 5,
    fontWeight: "bold",
    //fontFamily: "ComfortaaBold",
  },
  textSign: {
    fontSize: 12,
    alignSelf: "center",
    marginTop: 5,
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
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
