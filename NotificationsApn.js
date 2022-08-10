const apn = require("apn");

const sendEventNotifications = (users) => {
  let service = new apn.Provider({
    token: {
      key: "./AuthKey_UXD37M5K7Q.p8",
      keyId: "UXD37M5K7Q",
      teamId: "27MXYDTP56",
    },
    production: true,
  });

  users.forEach((user) => {
    let note = new apn.Notification();
    note.alert = `Hey ${user.name}, I just sent my first Push Notification`;

    // The topic is usually the bundle identifier of your application.
    note.topic = "com.smbrmoyo.BallerMap";

    console.log(`Sending: ${note.compile()} to ${user.devices}`);

    service.send(note, user.devices).then((result) => {
      console.log("sent:", result.sent.length);
      console.log("failed:", result.failed.length);
      console.log(result.failed);
    });
  });

  service.shutdown();
};

let users = [
  {
    name: "Brian",
    devices: [
      "c47b65f66f1e410eabb5d28e3dad463fe7d7a087f233a085ce83d515fc241063",
    ],
  },
];

sendEventNotifications(users);
