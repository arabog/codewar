/* Coding in function pickIt, function accept 1 parameter:arr, it's a number array, 
we need traverse arr by using for loop, if element is odd number, push it to array odd, 
if it's a even number, push it to array even.
I've defined two array odd and even in the function, and also wrote the return 
statement. your work is write a for loop.
If you forgot how to push an element to array, please refer to lesson 4. */

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function pickIt(arr) {
          let odd = [];
          let even = [];

          for(let key of arr){
                    if(key % 2 == 0){
                              even.push(key);
                    }else {
                              odd.push(key);
                    }

          }

          console.log(`even: ${even}; odd: ${odd}`);
}

pickIt(numArr);