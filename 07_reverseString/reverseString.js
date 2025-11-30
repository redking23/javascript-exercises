const reverseString = function(word) {

    let newWord = [];
    let number = 0;

    for (let i = word.length - 1; i >= 0 ; i--){

        newWord.push(word[i])
        number++;
    }
    return newWord.join("");

};

// Do not edit below this line
module.exports = reverseString;
