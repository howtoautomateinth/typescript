class SimpleCounter{
    public count(){
        let count = 5;

        for (let i = 1;i<=7; i++){
            document.write(i.toString + '<br/>');
        }

        console.log('All done!');
    }
}
let count = new SimpleCounter();
count.count();