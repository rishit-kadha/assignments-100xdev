/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let alpha ="abcdefghijklmnopqrstuvwxyz";
  let al=alpha.split("");
  str=str.toLowerCase();
  let list=str.split("");
  let nlist =str.split("")

  for( let i =0 ; i<list.length ; i++){
    if(al.includes(list[i]) == false){
      nlist.splice(nlist.indexOf(list[i]) ,1);
    }
  }
  for (let i=0,j=nlist.length-1 ; i<j ; i++,j--){
    if(nlist[i] !== nlist[j]){
      return false
    }
  }
  return true
}

module.exports = isPalindrome;
