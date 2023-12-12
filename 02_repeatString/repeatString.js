const repeatString = function(string, num) {
    let newString = '';
    if (num < 0) return "ERROR";
    
    for(let repeats = 0; repeats < num; repeats++){
        newString += string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
