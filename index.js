var computed='';
var pos=0;
        for (let i = 0; i < original.length; i++) {
            if (isNaN(original[i]) == false) { 
                computed = computed + original[i]; }

            else if (pos % 3 == 0 && pos % 5 == 0) {
                x = original[i].charCodeAt(0) - 3;
                x = String.fromCharCode(x);
                computed = computed + x;
            }
            else if (pos%3==0){
                x = original[i].charCodeAt(0) - 5;
                x = String.fromCharCode(x);
                computed = computed + x;
            }
            else if (pos%5==0){
                x = original[i].charCodeAt(0) - 9;
                x = String.fromCharCode(x);
                computed = computed + x;
            }
            else{
                x = original[i].charCodeAt(0) - 2;
                x = String.fromCharCode(x);
                computed = computed + x;
            }

            pos=pos+1;
        }