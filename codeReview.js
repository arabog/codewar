var arr = ['', 'a', 'ab', 'aba', 'abab', 'ababa'];




function splitVal(ack) {
          b = ack.filter(x => {
                    if(x.length < 2) {
                             return true;
                    }

                    y = x.split("").reverse().join("");
                    // console.log(x, y);

                    return x == y;
          })

          console.log(b);
}

console.log(splitVal(arr));