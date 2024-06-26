import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../navigation/Providers/AuthProvider";
import styles from "./styles";
import { deleteAccount } from "../../aws-functions/userFunctions";

const BottomSheetProfile = (props) => {
  navigation = useNavigation();
  const { signOut, user, setUser } = useAuth();

  function LogoutAlert() {
    Alert.alert(
      `${props.profileDoc?.username}`,
      "Are you sure you want to log out of BallerMap?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "Logout", onPress: () => signOut(), style: "destructive" },
      ]
    );
  }

  function DeleteAlert() {
    Alert.alert(
      `${props.profileDoc?.username}`,
      "Are you sure you delete this account?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            deleteAccount(props.profileDoc).then((response) => setUser(null));
          },
          style: "destructive",
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
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.panelButton}
        onPress={() => {
          navigation.navigate("EditProfile");
          bsProf.current.snapTo(1);
        }}
      >
        <Ionicons name="pencil-outline" size={23} color="black" />
        <Text style={styles.panelButtonTitle}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} style={styles.panelButton}>
        <Ionicons name="settings-outline" size={23} color="black" />
        <Text style={styles.panelButtonTitle}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={LogoutAlert}
        activeOpacity={0.7}
        style={styles.panelButton}
      >
        <Ionicons name="exit-outline" size={23} color="black" />
        <Text style={styles.panelButtonTitle}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={DeleteAlert}
        style={styles.panelButton}
      >
        <MaterialIcons name="delete-outline" size={23} color="black" />
        <Text style={styles.panelButtonTitle}>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.panelButton}
        onPress={() => bsProf.current.snapTo(1)}
      >
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <BottomSheet
      ref={bsProf}
      snapPoints={["60%", "-10%"]}
      renderContent={renderInner}
      renderHeader={renderHeader}
      initialSnap={1}
      callbackNode={fall}
      enabledGestureInteraction={true}
      enabledHeaderGestureInteraction={true}
      enabledContentGestureInteraction={true}
      enabledContentTapInteraction={false}
      overdragResistanceFactor={100}
    />
  );
};
export default BottomSheetProfile;
