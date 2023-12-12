const removeFromArray = function(array, ...items) {
        let operator = Array.from(items);
        for(let i = 0; i < operator.length; i++){
            for(let num = 0; num < array.length; num++){
                if(operator[i] === array[num]){
                    array.splice(array.indexOf(operator[i]),1);
                    break;
                }
            }
        }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
