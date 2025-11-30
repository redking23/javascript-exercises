const repeatString = function(word, number) {
    let newWord = "";

    for(let i= 0; i < number; i++){
        newWord += word;
    }
    return newWord;
};

// Do not edit below this line
module.exports = repeatString;
