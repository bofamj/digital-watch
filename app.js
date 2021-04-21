

function digitalCock(){

let newDayeTime = new Date ();
let corentHouers = newDayeTime.getHours();
let corentMinutes = newDayeTime.getMinutes();
let corentSeconds = newDayeTime.getSeconds();

const houers = document.getElementById ('houres');
const minutes = document.getElementById ('munets');
const seconds = document.getElementById ('second');
if ( corentHouers < 10){
    corentHouers = "0 "+ corentHouers;
}if ( corentMinutes < 10){
    corentMinutes = "0 " + corentMinutes;
}if ( corentSeconds < 10){
    corentSeconds = "0 " + corentSeconds;
}

houers.innerHTML = corentHouers ;
minutes .innerHTML =  corentMinutes;
seconds .innerHTML =  corentSeconds;

}

setInterval(digitalCock , 1000);
