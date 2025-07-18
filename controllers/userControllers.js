const User = require('../models/User');
const ClaimPointsHistory = require('../models/ClaimPointsHistory');

exports.getAllUsers = async(req, res) => {
    const users = await User.find();
    res.status(200).json(users);
};

exports.addUser = async(req, res) => {
    const { name } = req.body;
    const newUser = new User({ name });
    await newUser.save();
    res.status(201).json(newUser);
};

exports.claimPoints = async (req, res) => {
    const { userId } = req.body;
    const points = Math.floor(Math.random() * 10) + 1;

    const user = await User.findById(userId);
    
    if(!user) return res.status(404).json({ message: 'User Not Found!' });
    user.totalPoints += points;
    await user.save();

    const history = new ClaimPointsHistory({ userId, points});
    await history.save();

    res.status(201).json({ points, user });
};

exports.getLeaderBoard = async (req, res) => {
    const leaderBoard = await User.find().sort({ totalPoints: desc });
    res.status(200).json(leaderBoard);
}

exports.getClaimPointsHistory = async (req, res) => {
    const history = await ClaimPointsHistory.find().populate('userId').sort({ claimedAt: desc});
    res.status(200).json(history);
}