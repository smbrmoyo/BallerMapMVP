const apn = require("apn");

const sendEventNotifications = (users) => {
  let service = new apn.Connection({
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

    service.pushNotification(note, user.devices);
  });

  service.shutdown();
};

let users = [
  {
    name: "Brian",
    devices: [
      "c27fc0552248236bef00394fa324583686cd053eaa007ec59782231206d04824",
    ],
  },
];

sendEventNotifications(users);
