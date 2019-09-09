class DataSource {
    query(queryStmt : (n: number) => string) : void {
        console.log(queryStmt(30));
    }
}
var ds = new DataSource();

var selectAllCat = (specificCategory: number) : string => {
    return `SELECT * FROM table WHERE cat = ${specificCategory}`;
}

ds.query(selectAllCat);