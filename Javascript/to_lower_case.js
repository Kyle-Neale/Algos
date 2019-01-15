/*******************************************************************************

Implement function ToLowerCase() that has a string parameter str, and returns
the same string in lowercase.

Example 1:
  ToLowerCase("Hello");  // => "hello"
  ToLowerCase("here");   // => "here"
  ToLowerCase("LOVELY"); // => "lovely"
*******************************************************************************/


const toLowerCase = function(str) {
  for(let i = 0; i < str.length; i++){
      if(str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91){
          str = str.replace(str.charAt(i), String.fromCharCode(str.charCodeAt(i) + 32));
      }
  }
  return str;
};
