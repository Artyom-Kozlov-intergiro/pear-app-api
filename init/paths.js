const path = require('path');
const { addPath } = require('app-module-path');

module.exports.init = () => {
    let repositoryRoot = path.join(__dirname, '../');
    let coreProjectRoot = path.join(repositoryRoot, '../');

    addPath(coreProjectRoot);
    addPath(repositoryRoot);
};
