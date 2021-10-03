import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
  Dimensions,
  TextInput,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar,
  Animated,
  Alert,
} from "react-native";
import * as TaskManager from "expo-task-manager";
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from "react-native-maps";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation, useTheme } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/stack";
import * as Location from "expo-location";
import haversine from "haversine";

import { mapBlueGreyStyle } from "../../styles/MapStyles";
import ProfilePicture from "../ProfilePicture";
import Bitmoji from "../Bitmoji";
import people from "../../assets/data/people";
import Stories from "../Stories";
import styles from "./styles";
import BottomSheetMap from "./BottomSheet";
import { wsize, hsize } from "../../utils/Dimensions";
import { useMap } from "../navigation/Providers/MapProvider";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 100;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const HomeMap = ({ props }) => {
  bsMap = useRef(null);
  fallMap = useRef(new Animated.Value(1)).current;
  const { places, status } = useMap();
  const route = useRoute();
  const navigation = useNavigation();
  const RADIUS = 20;
  const { colors, dark } = useTheme();
  const [searchState, setSearchState] = useState(false);
  const [userLocation, setUserLocation] = useState({
    prevCoords: { latitude: 0, longitude: 0 },
    currentCoords: { latitude: 0, longitude: 0 },
  });
  const [camera, setCamera] = useState({
    latitude: 48.872008,
    longitude: 2.3120161,
    pitch: 90,
    heading: 90,
    zoom: 19,
    altitude: 18,
  });

  useEffect(() => {
    _onMapReady();
  }, [places]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  const _onMapReady = async () => {
    // console.log("places in the map : " + JSON.stringify(places[0]));
    let location = await Location.getLastKnownPositionAsync();

    setCamera({
      ...camera,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      heading: location.coords.heading,
    }),
      setUserLocation({
        ...userLocation,
        currentCoords: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      });
  };

  useEffect(() => {
    //  Compare a user's currentCoords and a place with prevCoords and the same place
    //  If distance < 10 m, user can send notification

    const positionUpdate = setInterval(() => {
      Location.watchPositionAsync(
        { enableHighAccuracy: true, distanceFilter: 5 },
        (position) => {
          setUserLocation({
            ...userLocation,
            prevCoords: {
              latitude: userLocation.currentCoords.latitude,
              longitude: userLocation.currentCoords.longitude,
            },
            currentCoords: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          });

          setCamera({
            ...camera,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });

          if (
            !haversine(userLocation.currentCoords, userLocation.prevCoords, {
              threshold: 0.02,
              unit: "mile",
            }) &&
            haversine(userLocation.currentCoords, userLocation.prevCoords, {
              threshold: 2,
              unit: "mile",
            })
          ) {
            Alert.alert(
              "Tu as bougé de " +
                haversine(userLocation.currentCoords, userLocation.prevCoords, {
                  unit: "meter",
                }) +
                "m"
            );
          }
          console.log(
            "Tu as bougé de " +
              haversine(userLocation.currentCoords, userLocation.prevCoords, {
                unit: "meter",
              }) +
              " m"
          );
        }
      );
    }, 600000); // Should adjust maybe to 2 or 3 mins

    return () => {
      clearInterval(positionUpdate);
    };
  });

  let mapIndex = 0;
  const _mapAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    _mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if (index >= places.length) {
        index = places.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const { coords } = places[mapIndex]; //  Try people and see if the map is initialized on a marker
          _map.current.animateCamera({
            center: { latitude: coords.lat, longitude: coords.long },
            heading: 90,
            pitch: 90,
            zoom: 18,
            altitude: 18,
          }),
            2000;
        }
      }, 50);
    });
  });

  const interpolations = places.map((person, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];

    const scale = _mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: "clamp",
    });

    return { scale };
  });

  const createdEvent = () => {
    if (route.params.createdEvent) {
      _map.current.animateCamera({
        center: {
          latitude: route.params.address.lat,
          longitude: route.params.address.lng,
        },
        heading: 90,
        pitch: 90,
        zoom: 18,
        altitude: 18,
      });

      //console.log(JSON.stringify(route.params.tags));
    } else {
      return null;
    }
  };

  const searchedPlace = () => {
    if (route.params.searchedPlace) {
      _map.current.animateCamera({
        center: {
          latitude: route.params.address.lat,
          longitude: route.params.address.lng,
        },
        heading: 90,
        pitch: 90,
        zoom: 18,
        altitude: 18,
      });

      //console.log(JSON.stringify(route.params.tags));
    } else {
      return null;
    }
  };

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;

    let x = markerID * CARD_WIDTH + markerID * 20;
    if (Platform.OS === "ios") {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollToOffset({ x: x, y: 0, animated: true });
  };

  const _map = useRef(null);
  const _scrollView = useRef(null);

  const heightAnim = useRef(new Animated.Value(0)).current;
  const lowAnim = useRef(new Animated.Value(1)).current;

  function animate() {
    setSearchState(!searchState);

    let coords = {
      coordinate: {
        latitude: places[0].coords.lat,
        longitude: places[0].coords.long,
      },
    };

    _map.current.setCamera({
      center: coords.coordinate,
      heading: 90,
      pitch: 90,
      zoom: 18,
      altitude: 18,
    });

    Animated.timing(heightAnim, {
      toValue: 200,
      duration: 250,
      useNativeDriver: true,
    }).start();

    Animated.timing(lowAnim, {
      toValue: -200,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }

  function undoAnimate() {
    Keyboard.dismiss();
    setSearchState(!searchState);

    _map.current.setCamera({
      center: {
        latitude: camera.latitude,
        longitude: camera.longitude,
      },
      heading: 90,
      pitch: 90,
      zoom: 18,
      altitude: 18,
    });

    Animated.timing(lowAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
    Animated.timing(heightAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }

  const goToAdd = () => {
    //setAddPressed(true);
    navigation.navigate("Add");
  };

  const goToStory = () => {
    navigation.navigate("Story");
    //userId
  };

  return (
    <>
      <BottomSheetMap />
      <TouchableWithoutFeedback onPress={() => bsMap.current.snapTo(2)}>
        <Animated.View
          style={{
            width: "100%",
            height: "100%",
            //opacity: Animated.add(0.05, Animated.multiply(this.fall, 1.0)),
          }}
        >
          <MapView
            ref={_map}
            style={styles.mapContainer}
            provider={PROVIDER_GOOGLE}
            //showsMyLocationButton={true}
            showsUserLocation={true}
            isFromMockProvider={false}
            customMapStyle={mapBlueGreyStyle}
            loadingEnabled={true}
            onMapReady={_onMapReady}
            followUserLocation={true}
            onUserLocationChange={(event) => {
              if (!searchState) {
                _map.current.animateCamera({
                  center: {
                    latitude: event.nativeEvent.coordinate.latitude,
                    longitude: event.nativeEvent.coordinate.longitude,
                  },
                  heading: event.nativeEvent.coordinate.heading,
                  pitch: 90,
                  zoom: 18,
                  altitude: 18,
                });
              }
            }}
            onLayout={() => {
              route.params
                ? (createdEvent(), searchedPlace())
                : _map.current.setCamera({
                    center: {
                      latitude: camera?.latitude,
                      longitude: camera?.longitude,
                    },
                    heading: 90,
                    pitch: 90,
                    zoom: 18,
                    altitude: 18,
                  });
            }}
            initialCamera={camera}
          >
            {places.map((place, index) => {
              const scaleStyle = {
                transform: [
                  {
                    scale: interpolations[index].scale,
                  },
                ],
              };

              let coords = {
                coordinate: {
                  latitude: place.coords.lat,
                  longitude: place.coords.long,
                },
              };

              return (
                <Marker
                  key={place.id}
                  coordinate={coords.coordinate}
                  onPress={(e) => onMarkerPress(e)}
                >
                  <Animated.View style={[styles.markerWrap]}>
                    <Animated.Image
                      source={require("../../assets/images/map_marker.png")}
                      style={[styles.marker, scaleStyle]}
                      resizeMode="contain"
                    />
                  </Animated.View>
                </Marker>
              );
            })}
            {people.map((location, index) => (
              <Marker key={index} coordinate={location.coordinate}>
                <Bitmoji avatarId={"99397600010_1-s5"} />
              </Marker>
            ))}
          </MapView>
          <Animated.View
            style={{
              position: "absolute",
              paddingLeft: wsize(10),
              flexDirection: "row",
              height: "6%",
              width: "90%",
              top: "-25%",
              borderRadius: hsize(10),
              alignSelf: "center",
              transform: [
                {
                  translateY: heightAnim,
                },
              ],
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
              elevation: 2,
              color: colors.text,
              backgroundColor: "white",
              borderColor: colors.border,
              borderWidth: dark ? 1 : 0.5,
            }}
          >
            <TextInput //autoFocus
              //autoFocus
              //onChangeText={props.onChangeTextDebounced}
              //value={props.text}
              placeholder="Search"
              placeholderTextColor="#CDCDCD"
              style={{
                //padding: hsize(10),
                //backgroundColor: "#eee",
                //marginVertical: hsize(5),
                //marginRight: wsize(5),
                flex: 1,
              }}
            />
            <TouchableOpacity
              style={{
                justifyContent: "center",
                marginRight: wsize(5),
              }}
              activeOpacity={0.7}
              onPress={undoAnimate}
            >
              <Feather name="x" size={20} color="grey" />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={[
              styles.buttonContainer,
              {
                right: 15,
                top: "6.5%",
                transform: [
                  {
                    translateY: lowAnim,
                  },
                ],
              },
            ]}
          >
            <TouchableOpacity activeOpacity={0.7} onPress={animate}>
              <View
                style={[
                  styles.buttonAdd,
                  {
                    height: 40,
                    width: 40,
                    backgroundColor: "#eee",
                    borderWidth: 0,
                  },
                ]}
              >
                <Ionicons name="search" size={25} color="#743cff" />
              </View>
            </TouchableOpacity>
          </Animated.View>
          <Animated.FlatList
            ref={_scrollView}
            data={places}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH + 20}
            snapToAlignment="start"
            decelerationRate={"fast"}
            style={[
              styles.scrollView,
              {
                transform: [
                  {
                    translateY: lowAnim,
                  },
                ],
              },
            ]}
            contentInset={{
              // IOS Only
              top: 0,
              left: SPACING_FOR_CARD_INSET,
              bottom: 0,
              right: SPACING_FOR_CARD_INSET,
            }}
            contentContainerStyle={{
              alignItems: "center",
              paddingRight: SPACING_FOR_CARD_INSET,
            }}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: _mapAnimation,
                    },
                  },
                },
              ],
              { useNativeDriver: true }
            )}
            renderItem={({ item, index }) => {
              const inputRange = [
                (index - 1) * CARD_WIDTH,
                index * CARD_WIDTH,
                (index + 1) * CARD_WIDTH,
              ];

              const translateY = _mapAnimation.interpolate({
                inputRange,
                outputRange: [50, 0, 50],
                extrapolate: "clamp",
              });

              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.7}
                  onPress={() => {
                    bsMap.current.snapTo(0);
                  }}
                >
                  <Animated.View style={[styles.card]}>
                    <TouchableOpacity activeOpacity={0.7} onPress={goToStory}>
                      <ProfilePicture />
                    </TouchableOpacity>
                    <View style={styles.textContent}>
                      <Text numberOfLines={1} style={styles.cardDescription}>
                        {item.name}
                      </Text>

                      <Text
                        style={[
                          styles.textSign,
                          {
                            color: "grey",
                          },
                        ]}
                      >
                        {item.address}
                      </Text>
                    </View>
                  </Animated.View>
                </TouchableOpacity>
              );
            }}
          />

          <Animated.View
            style={[
              styles.buttonContainer,
              {
                right: 10,
                bottom: 60,
                transform: [
                  {
                    translateY: heightAnim,
                  },
                ],
              },
            ]}
          >
            <TouchableOpacity activeOpacity={0.7} onPress={goToAdd}>
              <View style={styles.buttonAdd}>
                <Feather name="plus" size={40} color="#743cff" />
              </View>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default HomeMap;
