//Code Your DNA!

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2nd array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

//input string
//output nested array

function pairElement(str) {
  var dna = str.split('')
  var array = [];
  for (var i = 0; i < dna.length; i++){
    if (dna[i].toUpperCase() === "C"){
      var basePair = ["C", "G"];
      array.push(basePair);
    } else if (dna[i].toUpperCase() === "G"){
      var basePair = ["G", "C"];
      array.push(basePair);
    } else if (dna[i].toUpperCase() === "A"){
      var basePair = ["A", "T"];
      array.push(basePair);
    } else {
      var basePair = ["T", "A"];
      array.push(basePair);
    }
  }
  return array
}

var element = pairElement("GCG");
console.log(element);

//TEST CASES
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]