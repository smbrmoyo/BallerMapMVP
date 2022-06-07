import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import { Storage } from "aws-amplify";
import ImagePicker from "react-native-image-crop-picker";

import styles from "./styles";

const BottomSheetEdit = (props) => {
  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      cropperCircleOverlay: true,
      forceJpg: true,
      mediaType: "photo",
    })
      .then((image) => {
        handleImagePicked(image);
      })
      .catch((e) => alert(e));
  };

  handleImagePicked = async (pickerResult) => {
    try {
      if (pickerResult == null || pickerResult == undefined) {
        Alert.alert("Upload cancelled");
        return;
      } else {
        const img = await fetchImageFromUri(pickerResult.path);
        let uriParts = pickerResult.path.split(".");
        let fileType = uriParts[uriParts.length - 1];
        const uploadUrl = await uploadImage(
          `${props.user}/photo.${fileType}`,
          img
        );
        downloadImage(uploadUrl);
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Upload failed");
    }
  };

  uploadImage = async (filename, img) => {
    return Storage.put(filename, img, {
      level: "public",
      // acl: "public-read",
      expires: new Date("December 31, 2022 22:00:00"),
      contentType: "image/jpeg",
    })
      .then((response) => {
        return response.key;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  /**
   *
   * Set current profile pic with current link in S3 before
   * Editing it
   */

  downloadImage = (uri) => {
    Storage.get(uri)
      .then((result) => {
        props.setUserProfile({ ...props.userProfile, profilePicture: result });
      })
      .catch((err) => console.log(err));
  };

  const fetchImageFromUri = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  };

  renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>

      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => {
          bsEditProf.current.snapTo(1);
          pickImage();
        }}
      >
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bsEditProf.current.snapTo(1)}
      >
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  return (
    <BottomSheet
      ref={bsEditProf}
      snapPoints={["50%", "-10%"]}
      renderContent={renderInner}
      renderHeader={renderHeader}
      initialSnap={1}
      callbackNode={fallEditProf}
      enabledGestureInteraction={true}
    />
  );
};

export default BottomSheetEdit;
