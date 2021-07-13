/*
Coding in function sortIt. function accept 1 parameters arr, 
it's a number array. Your task is to sort the array according 
to the specified conditions, and returns a new array(should 
not modify the original array).

conditions1: according to the number of elements(in 
ascending order) for example:

sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
because [1,1,1,2,2,3] has one 3, two 2 and three 1
conditions2: If the same number of elements, according to 
the number values(in descending order) for example:

sortIt([1,1,1,2,2,2,3,3,3]) should return [3,3,3,2,2,2,1,1,1]
because number of 3,2 and 1 both are three, then according to 3>2>1
Comprehensive two conditions should be like this:

sortIt([1,2,3,4,4,5,5,6,6]) should return [3,2,1,6,6,5,5,4,4]
*/ 

/*
          p sortIt arr, sort d arr
          r item according to occurence
*/ 

// my soln
// function sortIt(arr) {
//           // find d occurence of individual elemt
//           let arr2 = arr.slice()
//           let emptyArr = []
//           let emptyArr2 = []

//           for(let i = 0; i < arr2.length; i++) {
//                     if(!emptyArr.includes(arr[i]) && arr[i] < 4){
//                               emptyArr.push(arr[i])
//                               emptyArr.sort((a, b) => b - a)
                              
                             
//                     }else{
//                               emptyArr2.push(arr[i])
//                               emptyArr2.sort((a, b) => b - a)
//                     }
//                     //           let k = arr.filter(x => x === x)
                    
//           }
//           console.log(emptyArr + ',' + emptyArr2);

// }

function sortIt(arr){
          let numberOf = {};

          arr.forEach(x => numberOf[x] = (numberOf[x]||0) + 1);

          console.log (arr
                    .slice()
                    .sort((x, y) => numberOf[x] - numberOf[y] || y - x)
          )
}

sortIt([1,1,1,2,2,3])
sortIt([1,1,1,2,2,2,3,3,3])
sortIt([1,2,3,4,4,5,5,6,6]) 