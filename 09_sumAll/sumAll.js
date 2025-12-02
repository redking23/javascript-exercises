const sumAll = function(a,b) {

    let min = Math.min(a,b);
    let max = Math.max(a,b);
    let sum = 0;

    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR";
    }

    while(min <= max){
        sum += min;
        min++;
    } 
    if(sum < 0){
        return "ERROR";

    }
    else{
        return sum;
    }
    

};

// Do not edit below this line
module.exports = sumAll;
