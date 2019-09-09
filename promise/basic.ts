function getData(name: string):Promise<string>{
    const myPromise = new Promise<string>(function(resolve, reject) {
        resolve(`We are ${name}`);
    });
    return myPromise;
}

async function main(){
    const data = await getData('HTA');
    console.log(data)
}

main();