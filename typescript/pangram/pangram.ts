export function isPangram(str: string): boolean {
  //generate an array of alphabets both upper and lower case
  let alphabetArr: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ]
  //check if the string is empty
  if (str.length === 0) return false
  //remove any character that is not a letter
  var strLower = str.toLowerCase();
  var strStrip = strLower.replace(/[^A-Za-z]/ig, "");
  //convert to an array and filter
  var strArr = new Set(strStrip.split(""));
  return strArr.size === alphabetArr.length ? true : false
}
