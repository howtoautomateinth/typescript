//overloading function
function reverse(string: string): string;
function reverse<T>(array: T[]): T[];
function reverse<T>(stringOrArray: string | T[]): string | T[] {
  return typeof stringOrArray === "string"
    ? stringOrArray
        .split("")
        .reverse()
        .join("")
    : stringOrArray.slice().reverse();
}

function main() {
  let word: string = "howtoautomate.in.th";
  console.log(reverse([1, 2, 3]));
}

main();
