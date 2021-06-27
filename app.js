


function getValue(num){

var input = document.getElementById("input-screen")

input.value += num


}



function calculation(){


    var input = document.getElementById("input-screen");

    // console.log(input.value)

    input.value = eval(input.value)


}





function allClear(){

var input = document.getElementById('input-screen');

input.value = ""


}





function minusValue(){

var input = document.getElementById("input-screen");

input.value = input.value.slice(0, -1);



}