import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { Image } from "react-native";
import { Asset } from "expo-asset";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  function cacheImages(images) {
    return images.map((image) => {
      if (typeof image === "string") {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync();

        console.log("   Loading Assets...");

        // Load fonts
        await Font.loadAsync({
          Comfortaa: require("../assets/fonts/Comfortaa/Comfortaa-VariableFont_wght.ttf"),
          ComfortaaBold: require("../assets/fonts/Comfortaa/static/Comfortaa-Bold.ttf"),
        });

        // Load images
        const imageAssets = cacheImages([require("../../assets/splash.png")]);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.log(e);
      } finally {
        setLoadingComplete(true);
        await SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
