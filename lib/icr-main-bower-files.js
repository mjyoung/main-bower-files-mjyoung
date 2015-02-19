module.exports = function(bowerFile, type) {

	var bowerFilesArray;

	bowerFilesArray = require('main-bower-files')({
		filter: function(file) {
			var dependencyName;
			dependencyName = file.split('bower_components/')[1].split('/')[0];
			if (!bowerFile.dependencies[dependencyName]) {
				return false;
			}
			var filterExp = '.' + type + '$';
			return file.match(filterExp);
		}
	});

}