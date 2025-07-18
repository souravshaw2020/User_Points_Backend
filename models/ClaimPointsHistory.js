const mongoose = require('mongoose');

const claimPointsHistorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    points: {
        type: Number
    },
    claimedAt: {
        type: Date,
        default: Date.now
    }
});

const ClaimPointsHistory = new mongoose.model('ClaimPointsHistory', claimPointsHistorySchema);

module.exports = ClaimPointsHistory;