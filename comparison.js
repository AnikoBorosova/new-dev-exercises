const a = {
    i: 1,
    toString: function() {
        return a.i++;
    }
}
console.log('111111 ', a == 1)
console.log('222222 ', a == 2)
console.log('333333 ', a == 3)

if (a == 1 && a == 2 && a == 3) {
    console.log('Take that, JS');
}

console.log(a);

// NOTES:
// == will perform a type conversion
// If one of the operands is an object and the other is a primitive, convert the object to a primitive.

// Primitive (such as Number, String, Boolean, Undefined, Null, Symbol)
// Non-primitive (such as Object)

// primitive data types are compared by value.
// non-primitive data types are compared by reference.

/*
const b = {
    i: 1,
    toString: function() {
        return a.i++;
    }
}

let c = {
    i: 1,
    toString: function() {
        return a.i++;
    }
}

console.log(b == c)
console.log(b === c)
c = b;
console.log(b == c)
console.log(b === c)
*/