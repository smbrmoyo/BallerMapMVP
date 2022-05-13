import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Storage } from "aws-amplify";
import ImagePicker from "react-native-image-crop-picker";
import BottomSheet from "reanimated-bottom-sheet";

import styles from "./styles";

const BottomSheetSet = (props) => {
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
        // console.log(image);
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
        const uploadUrl = await uploadImage(props.user, img);
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
      contentType: "image/jpeg",
    })
      .then((response) => {
        return response.key;
      })
      .catch((error) => {
        console.log(error);
        return error.response;
      });
  };

  downloadImage = (uri) => {
    Storage.get(uri)
      .then((result) => {
        props.setImageUri(result);
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
          bsSetProf.current.snapTo(1);
          pickImage();
        }}
      >
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bsSetProf.current.snapTo(1)}
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
      ref={bsSetProf}
      snapPoints={["50%", -5]}
      renderContent={renderInner}
      renderHeader={renderHeader}
      initialSnap={1}
      callbackNode={fallSetProf}
      enabledGestureInteraction={true}
    />
  );
};

export default BottomSheetSet;
