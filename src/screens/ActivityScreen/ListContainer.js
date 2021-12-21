import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { View, Text, Dimensions, FlatList, RefreshControl } from "react-native";
import styles from "./styles";
import NotifRow from "./NotifRow";
import { hsize, wsize } from "../../utils/Dimensions";
import { onCreateNotification } from "../../graphql/subscriptions";
import { API, graphqlOperation } from "aws-amplify";
import { useAuth } from "../../components/navigation/Providers/AuthProvider";

const ListContainer = (props) => {
  const [refreshing, setRefreshing] = useState(false);
  const { user } = useAuth();
  const [notifExtraData, setNotifExtraData] = useState(false);
  const [data, setData] = useState(props.myNotifs);
  const { width, height } = Dimensions.get("window");
  const onRefresh = React.useCallback(() => {
    const wait = (timeout) => {
      return new Promise((resolve) => setTimeout(resolve, timeout));
    };

    setRefreshing(true);
    wait(1500).then(() => {
      setRefreshing(false);
    });
  }, []);

  useEffect(() => {
    let subscribeToCreateNotification = API.graphql(
      graphqlOperation(onCreateNotification, {
        profileID: user,
      })
    ).subscribe({
      next: ({ value }) => {
        // setNotifExtraData(!notifExtraData);
        setData((old) => [value.data.onCreateNotification, ...old]);
      },
      error: (error) =>
        console.log(
          "   ERROR on onCreateNotification : " + JSON.stringify(error)
        ),
    });
    return () => subscribeToCreateNotification.unsubscribe();
  }, []);

  return (
    <>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={[
              styles.textHeader,
              { marginVertical: hsize(5), marginLeft: wsize(10) },
            ]}
          >
            Latest
          </Text>
          <View
            style={{
              backgroundColor: "red",
              height: wsize(5),
              width: wsize(5),
              borderRadius: wsize(2.5),
              marginLeft: wsize(5),
            }}
          />
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          extraData={notifExtraData}
          style={{
            flex: 1,
            backgroundColor: "white",
            width: width,
          }}
          renderItem={({ item }) => <NotifRow notif={item} />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </>
  );
};

export default ListContainer;
