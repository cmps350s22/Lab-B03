import mongoose from "mongoose";

const Schema = mongoose.Schema;

const options = {
    toJSON: {
        virtuals: true
    }
}
const accountSchema = new Schema({
    acctType: {
        type: String,
        required: [true, 'acctType is a required field'],
        enum: ['Current', 'Saving']
    },
    balance: {
        type: Number,
        required: [true, 'balance is a required field'],
        min: [0, 'minimum balance is 0']
    }
}, options)

accountSchema.virtual('minBalance').get(function () {
    if (this.acctType == "Saving")
        return 1000
})

accountSchema.virtual('monthlyFee').get(function () {
    if (this.acctType == "Current")
        return 15
})

accountSchema.virtual('acctNo').get(function () {
    if (this.acctType == "Current")
        return this._id
})

export default mongoose.model('Account', accountSchema)
