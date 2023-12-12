const sumAll = function(num1,num2) {
    let sum = 0;
    let counter = 0, small = 0, large = 0;
    if(num1 < num2){
        small = num1;
        large = num2;
    }
    else{
        small = num2;
        large = num1;
    }

    if(small < 0 || large < 0){
        return "ERROR";
    }

    if(typeof small != "number" || typeof large != "number"){
        return "ERROR";
    }
    
    counter = small;
    while(counter >=small && counter <= large){
        sum += counter;
        counter++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
