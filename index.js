//Declare variable computed as empty string
var computed = '';
//Declare variable pos which gives position of string original
var pos = 0;
//Iterate through string original
//If string is a digit, let it stay same, append to computed
for (let i = 0; i < original.length; i++) {
    if (isNaN(original[i]) == false) {
        computed = computed + original[i];
    }
//If divisible by 3 and 5 shift by 3
    else if (pos % 3 == 0 && pos % 5 == 0) {
        x = original[i].charCodeAt(0) - 3;
        x = String.fromCharCode(x);
        computed = computed + x;
    }
//if divisible by 3 only
//shift by 5
    else if (pos % 3 == 0) {
        x = original[i].charCodeAt(0) - 5;
        x = String.fromCharCode(x);
        computed = computed + x;
    }
//if divisible by 5 only
//shift by 9
    else if (pos % 5 == 0) {
        x = original[i].charCodeAt(0) - 9;
        x = String.fromCharCode(x);
        computed = computed + x;
    }
//For every all other cases,shift by 2
    else {
        x = original[i].charCodeAt(0) - 2;
        x = String.fromCharCode(x);
        computed = computed + x;
    }
//iterate pos by 1 after each loop
    pos = pos + 1;
}