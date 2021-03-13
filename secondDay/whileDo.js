/* Coding in function padIt, function accept 2 parameters:
str, it's a string representing the string to pad, we need pad some
 "*" at leftside or rightside of str
n, it's a number, how many times to pad the string.
Behaviour
You need to write a loop statement within the function that loops n times. 
Each time through the loop it will add one * to str, alternating on which side it 
is padded: the first time will add a * to the left side of str, the second time will add 
a * to the right side, and so on.

Finally, return the padded string. */
let padIt = function (str, n) {
          // for(let i = 0; i < n; i++) {
          //           if(str.length % 2 != 0){
          //                     str = '*' + str;                           
                              
          //                     if(str.length % 2 == 0){
          //                               str = str + '*'
          //                     }
                              
          //           }
          // }

          let str1; 
          // str1 = '*' + str;

          while(n > 1){

                  
                    
                    if(str1.length % 2 == 0) {
                              str1 += '*';
                    }
                    // else 
                    
                    if (str1.length % 2 != 0){
                              str1 = '*' + str1;
                    }

                    n--
                    console.log(n);
          }

          return str1;
};

console.log(padIt('Hoe', 4));