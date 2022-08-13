const jwt = require("jsonwebtoken");
const http2 = require("http2");
const fs = require("fs");

const expo_push_token = "ExponentPushToken[vzVWrGKf78eBc2ACnPYO1x]";

const IS_PRODUCTION = true;

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

const client = http2.connect(
  IS_PRODUCTION
    ? "https://api.push.apple.com"
    : "https://api.sandbox.push.apple.com"
);

let nativeDeviceToken =
  "c47b65f66f1e410eabb5d28e3dad463fe7d7a087f233a085ce83d515fc241063";

headers = {
  ":method": "POST",
  ":scheme": "https",
  "apns-topic": "com.smbrmoyo.BallerMap",
  ":path": "/3/device/" + nativeDeviceToken, // This is the native device token you grabbed client-side
  authorization: `bearer ${authorizationToken}`, // This is the JSON web token we generated in the "Authorization" step above
};

const request = client.request(headers);
request.setEncoding("utf8");

request.write(
  JSON.stringify({
    aps: {
      alert: {
        title: "📧 You've got mail!",
        body: "Hello world! 🌐",
      },
    },
    experienceId: "@brianmoyou/BallerMap", // Required when testing in the Expo Go app
    scopeKey: "@brianmoyou/BallerMap", // Required when testing in the Expo Go app
  })
);

request.on("response", (headers, flags) => {
  for (const name in headers) {
    console.log(`${name}: ${headers[name]}`);
  }
});

let data = "";
request.on("data", (chunk) => {
  data += chunk;
});

request.on("end", () => {
  console.log(`\n${data}`);
  client.close();
});

request.end();
