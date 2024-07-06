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
    let i = 0;

    while (i < str.length) {
        if (str[n] === ' ') {
            newStrArr.push(' ');
            n--;
            increment = false;
        } else if (str[n] === 'z' && increment) {
            newStrArr.push('a');
            n++;
        } else if (newStrArr[newStrArr.length - 1] === 'a' && !increment) {
            newStrArr.push('z');
            n--;
        } else if (increment) {
            newStrArr.push(alphabet[n + 1]);
            n++;
        } else {
            newStrArr.push(alphabet[n]);
            n--;
        }
        i++;
    }
    return console.log(newStrArr.join(''));
}

cypherFunction('zaaaa');            // acdef
cypherFunction('aaaaaa');           // bcdefg
cypherFunction('aaaaaa aaaaaaa');   // bcdefg fedcbaz
