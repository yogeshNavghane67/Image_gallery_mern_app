const mongoose =require("mongoose")

const uploadSchema = new mongoose.Schema({
    photo:{
        type: string,
        required: true,
    },
}, {timestamps: true}
);

module.exports = mongoose.model("upload", uploadSchema);