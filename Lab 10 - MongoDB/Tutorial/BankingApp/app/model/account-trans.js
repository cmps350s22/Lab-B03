import mongoose from "mongoose";
const Schema = mongoose.Schema;

const transSchema = new Schema({
    acctNo :{
        type : Schema.Types.ObjectId,
        ref: 'Account',
        required: [true, 'acctNo is a required field']
    },
    transType : {
        type : String,
        enum : ['Withdraw', 'Deposit'],
        required: [true, 'transType is a required']
    },
    amount : {
        type : Number,
        min : [0, 'amount can not be negative'],
        required: [true, 'amount is a required field']
    }
})

export default mongoose.model('Transaction', transSchema)
