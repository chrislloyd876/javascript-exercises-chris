const reverseString = function(string) {
    let newString = [];
    string = string.split("");
    let len = string.length;
    for(let num = 0; num < len; num++){
        newString[num] = string.pop();
    }
    return newString.join("");
};

// Do not edit below this line
module.exports = reverseString;
