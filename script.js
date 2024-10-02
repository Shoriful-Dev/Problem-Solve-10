// Write a Function to reverse a string without using any built-in Methods or libraries. The Function should take a string as input and return the reverse string.

const reverseString = (str) => {
  let r_str = "";
  for (let i = str.length - 1; i >= 0; i--) {
    r_str += str[i]
  }
  return r_str;
}

// Example Usage:
console.log(reverseString("hello")); // Output: olleh
console.log(reverseString("Bangladesh")); // Output: hsedalgnaB
console.log(reverseString("India")); // Output: aidnI

