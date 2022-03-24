import { StyleSheet, StatusBar } from "react-native";
import { wsize, hsize } from "../../utils/Dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    //paddingTop: hsize(44),
  },
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
    //backgroundColor: 'rgba(0,0,0,0.05)',
    //marginBottom: 15,
    marginHorizontal: 5,
  },
  profileInitialContainer: {
    flexDirection: "row",
    paddingHorizontal: wsize(10),
    paddingVertical: hsize(10),
  },
  profilePhoto: {
    width: wsize(80),
    height: wsize(80),
    borderRadius: wsize(40),
  },
  profileNameContainer: {
    marginLeft: wsize(22),
    justifyContent: "center",
    alignContent: "center",
  },
  profileName: {
    fontSize: wsize(24),
    fontWeight: "bold",
    color: "#262626",
  },
  profileType: {
    fontSize: wsize(14),
  },
  profileInfoContainer: {
    paddingHorizontal: wsize(10),
    paddingTop: hsize(10),
    marginBottom: hsize(2),
    alignSelf: "center",
    width: "100%",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    margin: wsize(2),
  },
  textInfo: {
    fontSize: wsize(13),
    marginHorizontal: wsize(2),
    fontFamily: "ComfortaaBold",
  },
  created: {
    fontSize: wsize(14),
    fontFamily: "ComfortaaBold",
    marginHorizontal: wsize(2),
    color: "#003569",
  },
  time: {
    fontSize: wsize(14),
    fontFamily: "ComfortaaBold",
    marginHorizontal: wsize(2),
    //color: "#003569",
  },
  userInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    //width: "100%",
    marginVertical: 10,
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
