const HomeModel = require("./home.schema");

exports.addToHome = async (req, res, next) => {
	const addToHome = new HomeModel({ ...req.body});
	await addToHome.save();

	res.status(200).send(addToHome);
}

exports.getSpecificObject = async (req, res, next) => {
	try {
        const encodedName = req.params.name;
        const name = decodeURIComponent(encodedName);
		const specificObject = await HomeModel.findOne({name})
		res.status(200).send(specificObject);
	} catch (error) {
		next(error);
	}
};