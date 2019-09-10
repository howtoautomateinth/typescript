//Union Types
function getWord(words: string | any[]): void {
  if (typeof words == "object") {
    console.log(...words);
  } else {
    console.log(words);
  }
}

//Union Types + Generics
function getData<T>(data: string | T[]): string | T[] {
  return data;
}

type ExampleFuncType = (name: string) => string;
function testFuncType(wordFuncType: ExampleFuncType): void {
  console.log(wordFuncType("HTA Web"));
}

function main() {
  getWord("howtoautomate.in.th");
  getWord(["my", "array", "words"]);
  const exampleWorld: string | string[] = getData("example");
  const numbersOrder: string | number[] = getData([1, 2, 3, 4, 5]);
  console.log(exampleWorld, numbersOrder);

  let funcType: ExampleFuncType = (value: string) => {
    return `this is your value ${value}`;
  };
  testFuncType(funcType);
}

main();
