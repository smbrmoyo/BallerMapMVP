let pushTokens = [1, 2, 3];
creator = "1";
eventId = "1";

let notifications = pushTokens.map((token) => {
  return {
    to: token,
    sound: "default",
    title: "New Event",
    body: `${creator} has invited you to a new event`,
    data: {
      eventId: eventId,
    },
  };
});

console.log(notifications);
