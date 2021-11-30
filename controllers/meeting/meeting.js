const Meeting = require("../../models/meeting");
const moment = require("moment");

const scheduleMeeting = async (req, res) => {
  let meetingTimings = req.body;
  meetingTimings.forEach((element) => {});

  for (meeting of meetingTimings) {
    var date = new Date(meeting.dateTime);
    
    var timezoneOffset = date.getMinutes() + date.getTimezoneOffset();
    var timestamp = date.getTime() + timezoneOffset * 1000;
    var correctDate = new Date(timestamp);
    console.log(correctDate)
    correctDate.setUTCHours(0, 0, 0, 0);
    let query = {
      meetingDateTime: {
        $gt: new Date(startDate).toISOString(),
        $lt: new Date(endDate).toISOString(),
      },
    };

  }

  try {
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  scheduleMeeting,
};
