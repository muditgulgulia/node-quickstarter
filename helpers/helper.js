const path = require('path');


module.exports = {
    DIR: (...paths) => path.join(__dirname, paths.join('/'))
}