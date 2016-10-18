var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', function(line) {
    var ans = "";
    for(var i=1; i<line.length; i+=2){
        ans += line[i];
    }

    console.log(ans);
});

reader.on('close', function() {});