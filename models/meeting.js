const mongoose = require("mongoose")

const schema = mongoose.Schema({
	meetingDateTime: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model("meetings", schema)