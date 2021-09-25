import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar,
  Animated,
  Alert,
} from "react-native";
import * as TaskManager from "expo-task-manager";
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from "react-native-maps";
import { Feather } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
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
  const [counter, setCounter] = useState(0);
  const [userLocation, setUserLocation] = useState({
    prevCoords: { latitude: 0, longitude: 0 },
    currentCoords: { latitude: 0, longitude: 0 },
  });
  const [camera, setCamera] = useState({
    latitude: 48.872008,
    longitude: 2.3120161,
    pitch: 90,
    heading: 90,
    zoom: 18,
    altitude: 18,
  });

  const initialMapState = {
    people,
    events: [],
    places,
    region: {
      latitude: 48.872008,
      longitude: 2.3120161,
      latitudeDelta: 0.003,
      longitudeDelta: 0.0021,
    },
    camera,
  };

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

  useEffect(() => {
    setState({
      ...state,
      places: places,
    });
  }, [places]);

  const _onMapReady = async () => {
    // console.log("places in the map : " + JSON.stringify(places[0]));
    let location = await Location.getLastKnownPositionAsync();

    setCamera({
      ...camera,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
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

  const [state, setState] = useState(initialMapState);

  let mapIndex = 0;
  const _mapAnimation = useRef(new Animated.Value(0)).current;

  /*for (let i = 0; i < places.length; i++) {
    let coords = {
      latitude: places[i].coordinate.latitude,
      longitude: places[i].coordinate.longitude,
    };
    console.log(haversine(MaxCoords, coords, { unit: "mile" }));
    console.log(i);
  }*/

  useEffect(() => {
    _mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if (index >= state.places.length) {
        index = state.places.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const { coords } = state.places[mapIndex]; //  Try people and see if the map is initialized on a marker

          _map.current.animateCamera({
            center: { latitude: coords.lat, longitude: coords.long },
            heading: 90,
            pitch: 90,
            zoom: 18,
            altitude: 18,
          }),
            2000;
        }
      }, 10);
    });
  });

  const interpolations = state.places.map((person, index) => {
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

  const addEvent = () => {
    if (route.params.tags) {
      //Alert.alert("exists");
      console.log(route.params.tags);

      initialMapState.places.push({
        id: route.params.description,
        name: route.params.description,
        coordinate: {
          latitude: route.params.address.lat,
          longitude: route.params.address.lng,
        },
        heading: 0,
      });

      setState(initialMapState);

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
            onLayout={() => {
              route.params
                ? addEvent()
                : _map.current.animateCamera({
                    center: {
                      latitude: camera.latitude,
                      longitude: camera.longitude,
                    },
                    heading: 90,
                    pitch: 90,
                    zoom: 18,
                    altitude: 18,
                  });
            }}
            initialCamera={camera}
          >
            {state.places.map((place, index) => {
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
            {/*state.events.map((person, index) => {
            console;
          })*/}
            {state.people.map((location, index) => (
              <Marker key={index} coordinate={location.coordinate}>
                <Bitmoji avatarId={"99397600010_1-s5"} />
              </Marker>
            ))}
          </MapView>

          <Animated.FlatList
            ref={_scrollView}
            data={state.places}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH + 20}
            snapToAlignment="start"
            decelerationRate={"fast"}
            style={styles.scrollView}
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
                      <View style={styles.button}>
                        <Text
                          style={[
                            styles.textSign,
                            {
                              color: "#743cff",
                            },
                          ]}
                        >
                          Info
                        </Text>
                      </View>
                    </View>
                  </Animated.View>
                </TouchableOpacity>
              );
            }}
          />

          <View style={[styles.buttonContainer, { right: 10, bottom: 140 }]}>
            <TouchableOpacity activeOpacity={0.7} onPress={goToAdd}>
              <View style={styles.buttonAdd}>
                <Feather name="plus" size={40} color="#743cff" />
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default HomeMap;
