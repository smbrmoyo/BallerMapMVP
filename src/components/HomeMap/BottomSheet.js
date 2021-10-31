import React, { useState, useEffect } from "react";
import BottomSheet from "reanimated-bottom-sheet";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  Dimensions,
} from "react-native";
import {
  AppearanceProvider,
  Appearance,
  useColorScheme,
} from "react-native-appearance";
import { useRoute, useNavigation, useTheme } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { wsize, hsize } from "../../utils/Dimensions";
import ProfilePicture from "../ProfilePicturePlace";
import ProfilePictureUser from "../ProfilePictureUser";
import Entypo from "react-native-vector-icons/Entypo";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import people from "../../assets/data/people";
import EventRow from "../../screens/ProfileScreen/EventRow";

function pad2(string) {
  return `0${string}`.slice(-2);
}

const readableDate = (d) => {
  if (!d) return undefined;
  return `${pad2(d.getDate())}/${pad2(
    d.getMonth() + 1
  )}/${d.getFullYear()}  at  ${pad2(d.getHours())}:${pad2(
    d.getMinutes()
  )}:${pad2(d.getSeconds())}`;
};

const BottomSheetMap = (props) => {
  navigation = useNavigation();
  const [visibleStart, setVisibleStart] = useState(false);
  const [date, setDate] = useState(new Date());
  const { width, height } = Dimensions.get("window");
  const { colors } = useTheme();

  function ConfirmAlert() {
    Alert.alert(
      `Will you be playing there the ${readableDate(date)}`,
      // `${readableDate(date)}`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Confirm",
          // onPress: () => signOut(),
        },
      ]
    );
  }

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  renderInner = () => (
    <View style={styles.panel}>
      <View style={styles.container}>
        <View style={styles.profileInitialContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            //onPress={() => navigation.navigate("TryStory")}
          >
            <ProfilePicture size={70} />
          </TouchableOpacity>
          <View style={[styles.profileNameContainer, { width: width * 0.7 }]}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={styles.profileName}
            >
              {props.places[props.index].name}
            </Text>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{
                fontSize: 14,
                color: "grey",
                width: "90%",
              }}
            >
              {props.places[props.index].address}
            </Text>
          </View>
        </View>
        <View style={styles.profileInfoContainer}>
          <View style={styles.profileInfo}>
            <SimpleLineIcons name="location-pin" size={20} color="#743cff" />
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={{ width: "90%" }}
            >
              {props.places[props.index].address}
            </Text>
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.profileInfo}>
            <EvilIcons name="calendar" size={23} color="#743cff" />
            <Text style={styles.dateTimeInfo}>
              Brian will be playing on 15.05.2021 at 14:00
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#E9E8E8",

              borderRadius: 15,
              height: hsize(40),
              width: wsize(150),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Entypo name="share" size={23} color="black" />
            <Text style={{ fontSize: 20, marginLeft: 10 }}>Share</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setVisibleStart(true)}
          >
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#743cff",
                borderWidth: 1,
                borderColor: "#E9E8E8",
                borderRadius: 15,
                height: hsize(40),
                width: wsize(150),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome name="bookmark-o" size={23} color="white" />
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  marginLeft: 10,
                }}
              >
                {"Confirm"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{ paddingHorizontal: wsize(20), marginVertical: hsize(5) }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "black",
              marginBottom: 5,
            }}
          >
            Next up
          </Text>
        </View>

        <FlatList
          data={people}
          keyExtractor={(item) => item.id}
          //scrollEnabled={false}
          // numColumns={6}
          renderItem={(item) => <EventRow event={item} />}
        />
      </View>
    </View>
  );

  return (
    <>
      <DateTimePickerModal
        isVisible={visibleStart} /*Should have second component for end date */
        mode="datetime"
        display="spinner"
        isDarkModeEnabled={colors.background == "rgb(1, 1, 1)" ? true : false}
        onConfirm={(datum) => (
          // setData to create with time
          setDate(datum), ConfirmAlert()
          // setVisibleStart(false))
        )}
        onCancel={() => setVisibleStart(false)}
      />

      <BottomSheet
        ref={bsMap}
        snapPoints={["37%", "70%", -hsize(5)]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={2}
        //callbackNode={fallMap}
        overdragResistanceFactor={0}
        callbackThreshold={0.5}
      />
    </>
  );
};

const styles = StyleSheet.create({
  panel: {
    height: "100%",
    width: "100%",
    //padding: 20,
    backgroundColor: "white",
    paddingTop: hsize(10),
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    elevation: 2.5,
    paddingTop: hsize(10),
    borderTopLeftRadius: hsize(20),
    borderTopRightRadius: hsize(20),
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: wsize(40),
    height: hsize(6),
    borderRadius: hsize(3),
    backgroundColor: "#00000040",
    marginBottom: hsize(10),
  },
  panelTitle: {
    fontSize: 27,
    height: hsize(35),
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: hsize(30),
    marginBottom: hsize(10),
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    //paddingTop: hsize(44),
  },
  iconContainer: {
    height: hsize(40),
    width: wsize(40),
    borderRadius: hsize(20),
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: 'rgba(0,0,0,0.05)',
    //marginBottom: 15,
    marginHorizontal: wsize(10),
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
    margin: hsize(5),
  },
  textInfo: {
    fontSize: wsize(16),
  },
  dateTimeInfo: {
    fontSize: wsize(16),
    color: "#003569",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    //width: "100%",
    marginVertical: hsize(16),
  },
});

export default BottomSheetMap;

{
  /*<View
            style={{
              flexDirection: "column",
              backgroundColor: "white",
              shadowColor: "#000000",
              shadowOffset: { width: 0, height: 0 },
              shadowRadius: 5,
              shadowOpacity: 0.4,
              elevation: 2.5,
              borderRadius: 10,
              height: "50%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Attendance")}>
              <FlatList
                data={people}
                keyExtractor={(item) => item.id}
                scrollEnabled={false}
                numColumns={6}
                renderItem={(item) => <EventRow event={item} />}
              />
            </TouchableOpacity>
          </View> */
}
