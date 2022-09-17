const jwt = require("jsonwebtoken");
const http2 = require("http2");
const fs = require("fs");

const IS_PRODUCTION = true;

let nativeDeviceToken =
  "c27fc0552248236bef00394fa324583686cd053eaa007ec59782231206d04824";

export const send = (nativeDeviceToken) => {
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
          title: "Hello",
          body: "This is coming from Ballermap",
          badge: 1,
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
};
