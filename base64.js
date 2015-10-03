module.exports = function(str) {
	// All boils down to...
	return Buffer(str).toString('base64');
};
