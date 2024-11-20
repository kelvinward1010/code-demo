getCoffee();
singSong();

function getCoffee(){
    console.log('Getting coffee...');
    doAsynStuff(() => {
        console.log('Coffee is here...')
    })
}

function singSong() {
    // setTimeout(() => {
    //     console.log('Start singing...');
    // },2000)
}

function doAsynStuff(callback){
    setTimeout(() => {
        callback();
        //console.log('Coffee is here...')
        console.log('Start singing...');
    },2000)
}


