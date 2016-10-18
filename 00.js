var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', function(line) {
    var invline = "";
    for(var i=0; i<line.length; i++){
        invline += line[line.length-i-1];
    }
    console.log(invline);
});

reader.on('close', function() {});