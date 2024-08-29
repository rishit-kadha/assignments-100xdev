/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let str1l=[];

  if(str1.length==str2.length){
    for (let i =0 ;i<str1.length; i++ ){
      str1l.push(str1[i].toLowerCase());
    }
    for(let i=0 ; i < str2.length ; i++){
      if(str1l.indexOf(str2[i].toLowerCase()) != -1){

        str1l.splice(str1l.indexOf(str2[i].toLowerCase()),1);

      }
      else{
        return false
      }
      
    }
    return true

  }
  else{
    return false
  }

}

module.exports = isAnagram;
