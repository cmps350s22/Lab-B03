import mongoose from "mongoose";
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    acctType : {
        type : String,
        required : [true, 'acctType is a required field'],
        enum : ['Current', 'Saving']
    },
    balance : {
        type : Number,
        required : [true, 'balance is a required field'],
        min: [0, 'minimum balance is 0']
    }
})
