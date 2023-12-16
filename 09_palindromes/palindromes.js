const palindromes = function (phrase) {
    const newPhrase = phrase.toLowerCase().replace(/[^a-z0-9]/g,'');
    const reversePhrase = newPhrase.split('').reverse().join('');
    return newPhrase == reversePhrase;
};

// Do not edit below this line
module.exports = palindromes;
