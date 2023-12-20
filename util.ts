import fs from "node:fs";

const fileToStringArr = (filePath: string) => {
  const file = fs.readFileSync(filePath, "utf-8");
  const inputArr = file.split("\n");

  return inputArr;
};

const _parseIntFromString = (str: string) => {
  let res = "";

  for (const char of str) {
    const parsed = parseInt(char);
    if (!Number.isNaN(parsed)) {
      res += parsed;
    }
  }

  return res;
};

const parseIntsFromStrArr = (strArr: string[]) =>
  strArr.map(_parseIntFromString);

const getFirstAndLast = (str: string) => {
  let res = str.charAt(0);

  str.length >= 2
    ? (res += str.charAt(str.length - 1))
    : (res += res.charAt(0));
  return parseInt(res);
};

export { fileToStringArr, parseIntsFromStrArr, getFirstAndLast };
