const path = require('path');

module.exports = {
    mode: 'development', 
    entry: "./module_index.js",
    output:{
        path: __dirname, 
        filename:"bundle.js"
    },
    watch:true
}
