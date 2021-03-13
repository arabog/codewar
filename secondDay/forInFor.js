/* Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.
You need to traverse the obj, if the length of the object key equals to 5, then push 
the key value to the array (you need to define the array by yourself, this time I won't help you). 
Additionally push the value to the array as well, if the length of the value is equal to 5.
Return the five after works finished.
You should use for..in in your code, otherwise, your solution may not pass this kata. Don't learn 
bad habits from those lazy guys ;-) */



let obj = {
          ibadan: "Ogbomoso",
          lagos: "Agidigbi",
          warri: "Oma",
          oshogbo: "Ipetumodu",
          abeokuta: "Ibarapa",
          onit: "Abakaliki",
          ife: 'Ogboo',
          modakeke: 'Iraye'
}

function giveMeFive(input) {
          let arr = [];

          for(let key in input) {

                    if(key.length == 5){
                              arr.push(key);                              
                    } 
                    
                    if (input[key].length == 5) {
                              arr.push(input[key]);
                    }

          }
          
          console.log(arr);
}

giveMeFive(obj);
