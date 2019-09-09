function firstDataSource(name: string):Promise<string>{
    const myPromise = new Promise<string>(function(resolve, reject) {
        resolve(`Here is > ${name}`);
    });
    return myPromise;
}

function secondDataSource(name: string): Promise<string>{
    const myPromise = new Promise<string>(function(resolve, reject) {
        resolve(`and this > ${name}`);
    });
    return myPromise;
}

async function getData(firstData:string, secondData:string): Promise<[string,string]>{
    const values = await Promise.all([firstDataSource(firstData), secondDataSource(secondData)]);
    return values;
}

async function main(){
    const data = await getData('Data1','Data2');
    console.log(...data)
}

main();