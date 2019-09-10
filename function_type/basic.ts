class DataSource {
  query(queryStmt: (n: number) => string): void {
    console.log(queryStmt(30));
  }
}
var ds = new DataSource();

var selectAllCat = (specificCategory: number): string => {
  return `SELECT * FROM table WHERE cat = ${specificCategory}`;
};

ds.query(selectAllCat);

type ExampleFuncType = (name: string) => string;
function testFuncType(wordFuncType: ExampleFuncType): void {
  console.log(wordFuncType("HTA Web"));
}

function main() {
  let funcType: ExampleFuncType = (value: string) => {
    return `this is your value ${value}`;
  };
  testFuncType(funcType);
}

main();
