//01

function isOneEdit(strA, strB) {

if (Math.abs(strB.length - strA.length) > 1) return false

if (strA.length > strB.length) return strA.includes(strB)
if (strB.length > strA.length) return strB.includes(strA)

let charsDiffCount = 0
for (let i = 0; i < strA.length; i++) {
    if (strA[i] !== strB[i]) charsDiffCount++
}

return charsDiffCount === 1
}

console.log(isOneEdit)
//02

export const stringCompression = (input) => {
    const substrings = [];
    let lastChar = input[0];
    let charCount = 0;
  
    for (const char of input) {
      if (char !== lastChar) {
        substrings.push(lastChar + charCount);
        lastChar = char;
        charCount = 0;
      }
      charCount++;
    }
  
    substrings.push(lastChar + charCount);
    let result = "";
    for (const key of substrings) {
      result += key;
    }
  
    return result.length > input.length ? input : result;
  };