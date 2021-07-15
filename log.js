/*
Coding in function thinkingAndTesting.
This time I won't explain to you how to do it. You need to look 
at the test cases. Thinking and testing. solve this kata by yourself ;-)
The only hint is: it is related to power.

thinkingAndTesting(2,2),0);
thinkingAndTesting(3,2),1);
thinkingAndTesting(4,2),0);
thinkingAndTesting(5,2),1);
thinkingAndTesting(6,2),2);
thinkingAndTesting(10,2), 2);
thinkingAndTesting(100,2),36);
thinkingAndTesting(1000,2),488);
thinkingAndTesting(111,10),11);
thinkingAndTesting(222,10),122);
thinkingAndTesting(333,10),233);
thinkingAndTesting(1111,10),111);
*/ 

const thinkingAndTesting = (number, base) =>
          number - base ** (Math.log(number) / Math.log(base) ^ 0);

const thinkingAndTesting = (number,base) => number - Math.pow(base, Math.floor(Math.log(number) / Math.log(base)));

var thinkingAndTesting=(number,base)=> { 
          for (i=0;; i++) 

          if (Math.pow(base, i) > number) 
                    return number - Math.pow(base, i - 1)
} 

console.log( thinkingAndTesting(2,2),0) // 0 0
console.log( thinkingAndTesting(3,2),1) // 1 1
console.log( thinkingAndTesting(4,2),0) // 0 0
console.log( thinkingAndTesting(5,2),1) // 1 1
console.log( thinkingAndTesting(6,2),2) // 2 2
console.log( thinkingAndTesting(10,2), 2) // 2 2
console.log( thinkingAndTesting(100,2),36) // 36 36
console.log( thinkingAndTesting(1000,2),488) // 488 488
console.log( thinkingAndTesting(111,10),11) // 11 11
console.log( thinkingAndTesting(222,10),122) // 122 122
console.log( thinkingAndTesting(333,10),233) // 233 233
console.log( thinkingAndTesting(1111,10),111) // 111 111