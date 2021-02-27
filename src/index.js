module.exports = function check(str, bracketsConfig) {
  const bracketPairs = bracketsConfig.map((item) => item.join(""));

  let reducedStr = str;
  let prevStr;
  do{
      prevStr = reducedStr;
      bracketPairs.forEach((item) => reducedStr = reducedStr.replace(item,""));
  } while (reducedStr.length < prevStr.length);

  return (reducedStr.length === 0);
}
