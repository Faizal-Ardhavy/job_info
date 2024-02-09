const { linkedin } = require('./scrape/linkedin.js');

let data = {}

const home = async (req, res) => {
	data = await linkedin('Web Developer', 'indonesia', data);
	res.status(200).send(data);
}

module.exports = {
	home
};