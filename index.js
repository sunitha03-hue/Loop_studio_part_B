//Construct a for loop that combines two strings together, alternating the characters from each source.  Print the result.

//Example: If string = “1234” and otherString = “5678”, then the output will be “15263748”.

//For now, make sure the two strings contain the same number of characters!

let firstString = 'Rutabagas';
let secondString = 'Chemistry';
let a = firstString.split("");
let b = secondString.split("");
   let mergedString = '';
   for(var i = 0; i < a.length || i < b.length; i++){
      if(i < a.length){
         mergedString += a[i];
      }
      if(i < b.length){
         mergedString += b[i];
      }
   }
console.log(mergedString)