const { scheduleMeeting } = require("../../controllers/meeting/meeting");

module.exports = (app) => {
  app.post("/api/v1/meeting", scheduleMeeting);

  app.get("/api/v1/meeting", (req, res) => {
    res.send("from meeting");
  });
};
