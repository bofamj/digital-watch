
// digital watch
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

houers.innerHTML = "( " + corentHouers ;
minutes .innerHTML = ". " + corentMinutes;
seconds .innerHTML = ". " + corentSeconds + " )";

}

setInterval(digitalCock , 1000);


// backgroundColor = hexCoor

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('subment');
const clockDiv = document.getElementById('main');


btn.addEventListener('click', function(){
    let hexCoor = "#";
    for (let c = 0 ; c < 6 ; c++){
        hexCoor += hex[getRandomColor()];
    }

    clockDiv.style.backgroundColor = hexCoor;
});

function getRandomColor(){
    return Math.floor(Math.random() * hex.length);
}