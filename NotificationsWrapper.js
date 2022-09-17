const jwt = require("jsonwebtoken");
const fs = require("fs");
const fetch = require("node-fetch");

let nativeDeviceToken =
  "c27fc0552248236bef00394fa324583686cd053eaa007ec59782231206d04824";

const authorizationToken = jwt.sign(
  {
    iss: "27MXYDTP56",
    iat: Math.round(new Date().getTime() / 1000),
  },
  fs.readFileSync("./AuthKey_UXD37M5K7Q.p8", "utf8"),
  {
    header: {
      alg: "ES256",
      kid: "UXD37M5K7Q",
    },
  }
);

headers = {
  ":method": "POST",
  ":scheme": "https",
  "apns-topic": "com.smbrmoyo.BallerMap",
  ":path": "/3/device/" + nativeDeviceToken, // This is the native device token you grabbed client-side
  authorization: `bearer ${authorizationToken}`, // This is the JSON web token we generated in the "Authorization" step above
};

body = {
  aps: {
    alert: {
      title: "Hello",
      body: "This is coming from Ballermap",
      badge: 1,
    },
  },
  experienceId: "@brianmoyou/BallerMap", // Required when testing in the Expo Go app
  scopeKey: "@brianmoyou/BallerMap", // Required when testing in the Expo Go app
};

fetch("https://api.push.apple.com", {
  method: "POST",
  headers: headers,
  body: JSON.stringify(body),
})
  .then((response) => {
    console.log("Push notifications successful");
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
