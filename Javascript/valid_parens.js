/******************************************************************************
Given a string containing the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
  Note that an empty string is also considered valid.

******************************************************************************/

var isValid = function(s) {
  const map = {
         "(": ")",
         "{": "}",
         "[": "]"
     }

   let goodS = s.replace(/[^\(\)\{\}\[\]]/gi, "")
   let stack = [];

   for (let i = 0; i < goodS.length; i++) {
       const ele = goodS[i]
       if (map[ele]) {
           stack.push(map[ele]);

       } else if (ele !== stack.pop()) {
           return false;
       }
   }
   return stack.length === 0;
};
