import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";
import { hsize, wsize } from "../../utils/Dimensions";

const LoadingScreen = ({ style, fullscreen, ...props }) => {
  /*const TASK_FETCH_LOCATION = "TASK_FETCH_LOCATION";

  // 1 define the task passing its name and a callback that will be called whenever the location changes
  TaskManager.defineTask(
    TASK_FETCH_LOCATION,
    async ({ data: { locations }, error }) => {
      if (error) {
        console.error(error);
        return;
      }
      const [location] = locations;
      try {
        Alert.alert(location);
      } catch (err) {
        console.error(err);
      }
    }
  );

  // 2 start the task
  Location.startLocationUpdatesAsync(TASK_FETCH_LOCATION, {
    accuracy: Location.Accuracy.Highest,
    distanceInterval: 1, // minimum change (in meters) betweens updates
    deferredUpdatesInterval: 1000, // minimum interval (in milliseconds) between updates
    // foregroundService is how you get the task to be updated as often as would be if the app was open
    foregroundService: {
      notificationTitle: "Using your location",
      notificationBody:
        "To turn off, go back to the app and switch something off.",
    },
  });

  // 3 when you're done, stop it
  Location.hasStartedLocationUpdatesAsync(TASK_FETCH_LOCATION).then((value) => {
    if (value) {
      Location.stopLocationUpdatesAsync(TASK_FETCH_LOCATION);
    }
  });*/

  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        zIndex: 0,
      }}
    >
      <ImageBackground
        source={require("../../../assets/splash.png")}
        style={{ height: "100%", width: "100%" }}
        imageStyle={{ height: "100%", width: "100%" }}
        resizeMode="contain"
      >
        <ActivityIndicator
          style={{
            position: "absolute",
            bottom: hsize(150),
            alignSelf: "center",
          }}
          size="large"
          color="#743cff"
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingScreen;
