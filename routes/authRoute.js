const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");

router.post("/signup", async (req, res) => {
	// Hash Passwords
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password, salt);

	// Create new user
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashPassword,
	});
	try {
		const savedUser = await user.save();
		res.send({user: user._id});
	} catch (err) {
		res.status(400).send(err);
	}
});

module.exports = router;
