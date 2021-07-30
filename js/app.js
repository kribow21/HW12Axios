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
//Bonus: tried a text input to display type activity
let typeBtn = document.getElementById('typeBtn');
const activityType = ["cooking", "recreation", "social", "diy", "charity", "cooking", "relaxing", "music", "busywork"];
function actType(){
    var b = document.getElementById('searchType').value;
    console.log(b);
    var c = activityType.indexOf(b);
    axios.request({
        method : "GET",
        url : "http://www.boredapi.com/api/activity?type="+b
    }).then(typeP).catch(uhOh)
}
typeBtn.addEventListener("click", actType);
var showMoreType = document.getElementById('typeAct');
function typeP(response){
    console.log(response);
    if (response.data.activity !== undefined){
    showMoreType.innerHTML= response.data.activity;
    }else{
    showMoreType.innerHTML= "Not a valid search term";
    }    
}