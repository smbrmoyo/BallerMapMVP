import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

import styles from "./styles";

const BottomSheetOther = (props) => {
  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  renderInner = () => (
    <View style={styles.panel}>
      <View style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.panelButton}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <AntDesign name="edit" size={30} color="black" />
          <Text style={styles.panelButtonTitle}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.panelButton}>
          <Ionicons name="settings-outline" size={23} color="black" />
          <Text style={styles.panelButtonTitle}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.panelButton}
          onPress={() => bsOtherProf.current.snapTo(1)}
        >
          <Text style={styles.panelButtonTitle}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.panelButton}>
          <Text style={styles.panelButtonTitle}>COVID-19 Information</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.panelButton}>
          <Text style={styles.panelButtonTitle}>Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <BottomSheet
      ref={bsOtherProf}
      snapPoints={["60%", -10]}
      renderContent={renderInner}
      renderHeader={renderHeader}
      initialSnap={1}
      callbackNode={fallOtherProf}
      enabledGestureInteraction={true}
      enabledHeaderGestureInteraction={true}
      enabledContentGestureInteraction={true}
      enabledContentTapInteraction={false}
      overdragResistanceFactor={100}
    />
  );
};

export default BottomSheetOther;
