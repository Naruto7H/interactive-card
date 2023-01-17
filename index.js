
let cardNum= document.querySelector(".card-number");
let response= document.querySelector(".response");
let nameField=document.querySelector("#name");
let numberField=document.querySelector("#number");
let monthField= document.querySelector("#month");
let yearField=document.querySelector("#year");
let cvcField= document.querySelector("#cvc");
document.getElementById("number").addEventListener("keyup",getNumber);
function getNumber(){
let num = document.querySelector("#number").value;
let firstFour= num.toString().slice(0,4)||"0000";
let secondFour=num.toString().slice(4,8)||"0000";
let thirdFour = num.toString().slice(8,12)||"0000";
let forthFour=num.toString().slice(12,16)||"0000";
// let number=`${firstFour} ${secondFour} ${thirdFour} ${forthFour}`;
cardNum.childNodes[0].innerHTML=firstFour;
cardNum.childNodes[1].innerHTML=secondFour;
cardNum.childNodes[2].innerHTML=thirdFour;
cardNum.childNodes[3].innerHTML=forthFour;

}

document.getElementById("name").addEventListener("keyup",getName);
function getName(){
    let name=document.querySelector("#name").value||"Jane Appleseed";
    document.querySelector(".card-name").innerHTML=name;
}

document.getElementById("month").addEventListener("keyup",getMonth);
function getMonth(){
    let month=document.getElementById("month").value||"00";
    document.querySelector(".card-month").innerHTML=month
}
document.getElementById("year").addEventListener("keyup",getYear);
function getYear(){
    let year=document.getElementById("year").value||"00";
    document.querySelector(".card-year").innerHTML=year
}

document.getElementById("cvc").addEventListener("keyup",getCvc);
function getCvc(){
    let cvc=document.getElementById("cvc").value||"000";
    document.querySelector(".card-cvc").innerHTML=cvc;
}

document.querySelector(".btn").addEventListener("click", (event)=>{
    event.preventDefault();
    formValidate();
})
function formValidate(){
    if (nameField.value.length<3){
        document.querySelector("small").innerHTML= "Name should be atleast 3 Characters long";
    }
    else if(nameField.value.length>2){
        document.querySelector("small").innerHTML="";

    }
    if (numberField.value.toString().length<16){
            document.querySelectorAll("small")[1].innerHTML="Card Number should be 16 digits"
        }
        
    if (numberField.value.toString().length==16 && isNaN(numberField.value)){
        document.querySelectorAll("small")[1].innerHTML="Please enter Numbers only"

    }
    else if(numberField.value.toString().length==16 && (isNaN(numberField.value)==false)){
        document.querySelectorAll("small")[1].innerHTML="";
    }
    if((monthField.value<1 || monthField.value>12) && yearField.value.toString().length<2){
        document.querySelectorAll("small")[2].innerHTML='Enter a valid Date'
   
    }
        else if((Number(monthField.value)>0 && Number(monthField.value)<13)&& yearField.value.toString().length>1){
            document.querySelectorAll("small")[2].innerHTML="";
     
        }
    if (cvcField.value.toString().length<3){
        document.querySelectorAll("small")[3].innerHTML="Enter a valid cvc"
    
    }
    else if(cvcField.value.toString().length==3){
        document.querySelectorAll("small")[3].innerHTML=""
    }
    let allSmall=document.querySelectorAll("small");
    let g=0;
    let result= allSmall.forEach( function lengthOfSmall(e) {
    g=g+(e.innerHTML.length);
    return g})
    if(g==0){
    submitForm();
    }
    }
    
function submitForm(){
        document.querySelector(".container-form").classList.toggle("hidden");
        response.classList.toggle("hidden")}
