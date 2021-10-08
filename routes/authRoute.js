const router = require("express").Router();
const User = require("../model/User");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcryptjs");

router.post("/signup", async (req, res) => {
	// Validate data
	const { error } = registerValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const emailExist = await User.findOne({ email: req.body.email });
	if (emailExist) return res.status(400).send("Email already exist");

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
		res.send({ user: user._id });
	} catch (err) {
		res.status(400).send(err);
	}
});

// Login
router.post("/login", (req, res) => {});

module.exports = router;
