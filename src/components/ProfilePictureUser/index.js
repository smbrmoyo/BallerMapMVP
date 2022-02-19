import React from "react";
import { Image, View, ImageBackground } from "react-native";
import styles from "./styles";

const ProfilePicture = ({
  //uri = require("../../assets/images/default_profile_picture.png"),
  size = 60,
  uri,
  onEdit = false,
  opacity = 1,
}) => {
  return (
    <View
      style={[
        styles.container,
        { width: size + 3, height: size + 3, borderRadius: size / 1.5 },
      ]}
    >
      <ImageBackground
        source={
          uri == null
            ? require("../../assets/images/default_profile_picture.png")
            : { uri: uri }
        }
        /*source={{
          uri: "https://ballermapmvp2e5fda8e36694dd8807e03dd4ddf2820151750-dev.s3.eu-central-1.amazonaws.com/public/brianmoyou%40gmail.com?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAUSBTQIOLYEO635MZ%2F20220101%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20220101T180530Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaDGV1LWNlbnRyYWwtMSJIMEYCIQCsbBWdbYb2DJCQznNFrda4ZjaSCaX%2FVk7qvwPEPjUx4QIhAPZeRTiF8QVbpX0AyQHtjglVzcFtuOyNenuz1oQYs6JEKtYECDMQABoMMzEzNjQwNjMzMjM5IgwE9bMSPyYv%2BNZ9fY8qswToKI9vV314uHDw%2BVWJdV3si2GuiC9HhZvB2H1wxdjoYKhE3%2FXQyq1rrRNS3W6U9CmFAmm3ftsQS66Qkq%2BK6a5ddVpYDWs2Lt9s4DQy6de3e%2BZtYifDopSBR6EYoprKF4Fsh6kecTyTMTgHw%2Fybm%2BhMtPRVTWNBb5SrBwnIgXFJn1Wrn9ACH5iLt2OZVApt%2BNyFNvgs353W5VfrbYJZE4LtyrkNqLbfGZNXz66VZr0pkUvSPHtRRAXtlxw0eDYjEKub7QQ2Z5GNxil9zsv2KQrtUK1LxiNXtWlW%2F4K%2Bg8hruOcUHp8Y19dtnugWdYX0mUYJMX3MLob1IGQJRsJG1DbYG5%2BhCaIozGTdozwtPS6Khrr%2FFlTNKANRRuAGslemSVLkCIBGaEa%2FdLYxsa7L7XhhK1ADzDmwWGgbbm047o%2BCbXnkkOWgJDAyeoKrSFjk%2Bj8szN0d41MVC2LKUmX0sjLtjS9DBxfRDRByf5rJDcWC6Jmy8V1g9bmYPthO8G0Cfv113SZflZj5HNSAVVss9YCo6seA4NjTc9BY%2FXJx%2BQdLN4D%2BgA97yywVX9iR0IwAtGNHZbfCZKyj1yyWL%2BIQqJqEjgKBGrkyPSdZyjDtgWYDcVKpIAyTqEmd0u3jibUw8PLBhKtDXe%2FJ6VPWaTTN01MXFupoj%2BfkaiBfCC9P5R4yudnoFQSCh%2BV5V3K%2BJzfRw92Ug9103siVAaHJb22zBTuucY668HL5ey5hHJUsGYngDyVJHDDfr8KOBjqEAvRE8Mgr2h3cnQHlzeYgF5CcUjgtmj9r1YSnO9moTTBy5m4xRQtN7J%2F1iplg3yucp36Px0kpc%2FVieIa5gc5lJz3jjol128TdQt%2FTsEtYYBDYQn5WFuZhuTm%2FcpVJaeJpwy3EYCRg9BK9nJEhv8gaFtUAwRYydMRUbRr7VGsNxLMlSMLj0RuDbK80TSS356OWUoUW4ki4q1CAHRl%2B6f3hML5wJ25hV4g25QjyyHY7PYq5qRN%2BuZV%2FD4OiheBuiJU%2FUalGFgBImhCh%2BohYcuTKA9kaQN9dvaY7r5SpICHwiLX0LTJQPs9tm%2BrtQGENuOujqbXLiwLTrofL4Tk6eHP8WEjgC%2Fk6&X-Amz-Signature=06c7dd4a4465445095d5932c64d299a3796288057894551a030c9e2c303cd4f2&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js%2F3.6.1%20os%2Fother%20lang%2Fjs%20md%2Fbrowser%2Funknown_unknown%20api%2Fs3%2F3.6.1%20aws-amplify%2F4.3.10_react-native&x-id=GetObject",
        }}*/
        resizeMode="cover"
        imageStyle={[
          styles.image,
          { width: size, height: size, borderRadius: size / 2, opacity },
        ]}
        style={[
          styles.image,
          { width: size, height: size, borderRadius: size / 2, opacity },
        ]}
      />
    </View>
  );
};

export default ProfilePicture;
