//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

const stringToArray = string => string.split(" ");
 
//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

const DNAtoRNA = dna => dna.replace(/T/g, "U");

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function(list){
    const sort = (a, b) => a - b;
    list.sort(sort) 
    return list[0];
  }
  
  var max = function(list){
    return Math.max(...list);
  }

  //https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

  function min(arr, toReturn) {
    const sortedArr = arr.slice().sort((a, b) => a - b);
    const minValue = sortedArr[0];
  
    if (toReturn === 'value') {
      return minValue;
    } 
    
    else {
      return arr.indexOf(minValue);
    } 
  }