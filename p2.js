var fs = require('fs');
fs.readdir(process.argv[2], function (err, list) {
    if(err) {
        throw err;
    }
    for (var i = 0; i < list.length; i++) {
        if(list[i].toString().indexOf("."  + process.argv[3]) !== -1) {
            console.log(list[i].toString());
        }
    }   
});