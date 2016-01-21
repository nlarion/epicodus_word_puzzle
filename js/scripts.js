var vowels = ["a", "e", "i", "o", "u"];


var isVowel = function(char){
    if(vowels.indexOf(char) !== -1){
      return true;
    }
    return false;
}

var replaceVowel = function(char){
  if (isVowel(char)){
    return "-";
  }else {
    return char;
  }
}

var puzzleParser = function(string){
  string = string.split("");
  for (var i = 0; i < string.length; i++) {
    string[i] = replaceVowel(string[i]);
  }
  return string.join("");
};



 // var regEx = /[aeiouAEIOU]/g;
 // string =  string.replace(regEx,"-");
