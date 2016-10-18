var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', function(line) {
    var words = line
        .replace(new RegExp(",","g"),"")
        .replace(new RegExp("\\.","g"),"")
        .split(" ");
    
    for(var i=0; i<words.length; i++){
        console.log(words[i].length);
    }
});

reader.on('close', function() {});