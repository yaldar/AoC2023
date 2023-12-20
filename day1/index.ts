import { fileToStringArr, getFirstAndLast, parseIntsFromStrArr } from "../util";

const day1star1 = () => {
  const strArr = fileToStringArr("./day1/input");
  const intsArr = parseIntsFromStrArr(strArr);
  const twoDigitsArr = intsArr.map(getFirstAndLast);
  const sol = twoDigitsArr.reduce((a: number, b: number) => a + b);
  return sol;
};

export { day1star1 };
