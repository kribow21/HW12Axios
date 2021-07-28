let randomBtn = document.getElementById('randAct');
function randomActivity(){
    axios.request({
        method : "GET",
        url : "http://www.boredapi.com/api/activity/"
    }).then(seeRandom).catch(uhOh)
}
function seeRandom(response){
    console.log(response);
    let head = document.getElementById('random');
    head.innerHTML= response.data.activity;
}
function uhOh(error){
    console.error(error);

}
randomBtn.addEventListener("click", randomActivity);

let activityForMore = document.getElementById('enterpart');
function seeMore(){
    let a = document.getElementById('menu').value;
    console.log(a);
    axios.request({
        method : "GET",
        url : "http://www.boredapi.com/api/activity?participants="+a
    }).then(seeForMoreP).catch(uhOh)
}


function seeForMoreP(response){
    console.log(response);
    let showMoreAct = document.getElementById('randomForMore');
    showMoreAct.innerHTML= response.data.activity;
}

activityForMore.addEventListener("click", seeMore);