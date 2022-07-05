import React, { useLayoutEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import Loading from "./Loading";
import ListContainer from "./ListContainer";
import NewDataContainer from "./NewDataContainer";
import { hsize } from "../../utils/Dimensions";
import { useActivity } from "../../navigation/Providers/ActivityProvider";

const ActivityScreen = ({ navigation }) => {
  const { loadingNotif, activity } = useActivity();
  const [newData, setNewData] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      //headerTitleAlign: 'left',
      //headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: "white",
        shadowColor: "#F4F4F4",
        //elevation: 5,
        height: hsize(80),
      },
      headerTitle: () => (
        <View style={styles.headerTitle}>
          <TouchableOpacity activeOpacity={0.7} style={styles.iconHeaderTitle}>
            <Text style={styles.textHeader}>Activity</Text>
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <>
      <StatusBar
        //translucent
        backgroundColor="white" /*transparent*/
        barStyle="dark-content"
      />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "white", justifyContent: "center" }}
      >
        {loadingNotif ? (
          <Loading />
        ) : (
          <>
            <NewDataContainer newData={newData} setNewData={setNewData} />

            <ListContainer myNotifs={activity} setNewData={setNewData} />
          </>
        )}
      </SafeAreaView>
    </>
  );
};

export default ActivityScreen;
