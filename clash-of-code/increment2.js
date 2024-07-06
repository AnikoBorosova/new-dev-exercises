/**
You are given a string to cypher: starting at n = 0, increment n and add it to the letter to transform it. 
Transformed letters should wrap around when reaching either end of the alphabet: a - 1 becomes z and z + 1 becomes a
When you encounter one or more whitespaces, if you were incrementing, start decrementing instead, and if you were decrementing, 
start incrementing instead.
Example: zaaaa becomes acdef, aaaaaa aaaaaaa becomes bcdefg fedcbaz
 **/
const cypherFunction = function (str) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let newStrArr = [];
    let increment = true;
    let n = 0;

    for (let i = 0; i < str.length; i++) {
        
        if (str[i] === ' ') {
            increment = !increment;
            newStrArr.push(' ');
        } else {
            const charIndex = alphabet.findIndex((character) => character === str[i]);
            n = increment ? n + 1 : n - 1;

            if (increment) {
                if (charIndex + n > alphabet.length - 1) {
                    newStrArr.push(alphabet[charIndex + n - alphabet.length]);
                } else {
                    newStrArr.push(alphabet[charIndex + n]);
                }
            } else {
                if (charIndex + n < 0) {
                    newStrArr.push(alphabet[charIndex + n + alphabet.length]);
                } else {
                    newStrArr.push(alphabet[charIndex + n]);
                }
            }
        }
        
    }
    return console.log(newStrArr.join(''));
}

cypherFunction('zaaaa');            // acdef
cypherFunction('aaaaaa');           // bcdefg
cypherFunction('aaaaaa aaaaaaa');   // bcdefg fedcbaz