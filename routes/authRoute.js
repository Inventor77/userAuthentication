const router = require("express").Router();
const User = require("../model/User");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
	// Validate data
	const { error } = registerValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	// is email there
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
router.post("/login", async (req, res) => {
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// email existence
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send("Email not Found");

	// checking password
	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) return res.status(400).send("Invalid Pass");

	// Creating and assigning the token
	const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
	res.header("auth-token", token).send(token);
});

module.exports = router;
