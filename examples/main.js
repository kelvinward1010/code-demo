getCoffee();
singSong();

function getCoffee(){
    console.log('Getting coffee...');
    doAsynStuff(() => {
        console.log('Coffee is here...')
    })
}

function singSong() {
    console.log('Start singing...');
}

function doAsynStuff(callback){
    setTimeout(() => {
        callback();
    },2000)
}


