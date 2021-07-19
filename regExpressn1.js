/*
Coding in function findSimilarity. function accept two parameters: 
str, a sentence contains some words, separated by spaces; word, 
a sample word.
Your task is to keep the words that are similar to the sample word, 
and to remove the other words.

The similarity is defined as: the same length as the sample; the 
letter at the beginning and the end of word are same as the 
sample too.

If there are no similar words in the sentence, should return an 
empty string.
Examples

findSimilarity("bag dog dig dot doog dogs","dog") should return "dog dig"
findSimilarity("bag dog dig dot doog dogs","dig") should return "dog dig"
findSimilarity("bag dog dig dot doog dogs","dot") should return "dot"
findSimilarity("bag dog dig dot doog dogs","god") should return ""

Hint: Use filter() will make your work easier; If you don't know how 
to solve the kata, please refer to the examples of lesson.
*/ 

function findSimilarity(str, word){
          var reg=new RegExp("^"
                                        +word
                                        .replace(/\B.\B/g,".")+"$"); 
                                         // \B match non character boundary
          
          return str.split(/ /).filter(x=>reg.test(x)).join(" ");
}

const findSimilarity=(str, w)=>str
                                                  .split(' ')
                                                  .filter(a => a.length 
                                                                      == w.length&&a[0]
                                                                      ==w[0]&&a.slice(-1)
                                                                      ==w.slice(-1))
                                                  .join(' ')

function findSimilarity(s,w){
          return (s.match(new RegExp('\\b'
                                                  +w[0]
                                                  +'.'.repeat(w.length-2)
                                                  +w[w.length-1]
                                                  +'\\b','g'))||[]
                    ).join(' ')
}

