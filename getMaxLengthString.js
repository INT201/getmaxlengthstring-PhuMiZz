const { template } = require("@babel/core");

function getMaxLengthString(arrayOfString) {
  //code here
  let longestStr = arrayOfString[0];
  if (arrayOfString === null || arrayOfString === undefined) return undefined;

  for (const maxi of arrayOfString) {
    if (maxi.length >= longestStr[0].length) {
      if (maxi.length === longestStr[0].length) {
        longestStr.push(maxi);
      } else {
        longestStr = [maxi];
      }
    }
  }
  return longestStr;
}
console.log(
  getMaxLengthString(["hello", "hi", "hey", "Good Evening", "Good Morning"])
);
module.exports = getMaxLengthString;
