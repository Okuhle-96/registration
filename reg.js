// INPUT ELEMENT
var inputTownElement = document.querySelector(".input");

// DISPLAY ELEMENT
var displayTownElement = document.querySelector(".displayTown");
var townOptionsElement = document.querySelector(".town");

// BUTTON ELEMENTS
var addButtonElement = document.querySelector(".addButton");
var resetButtonElement = document.querySelector(".reset");
var refreshBtnElement = document.querySelector(".clear");

// ERROR MESSAGE ELEMENT
var errorMsgElement = document.querySelector(".errors");
var successMsgElement = document.querySelector(".success");

var userReg = [];

// SETTING UP LOCAL STORAGE
if(localStorage['towns']) {
    userReg = localStorage.getItem('towns').split(',')
}

// CREATING AN INSTANCE FOR A FACTORY FUNCTION
var registrationInstanceFactory = registrationFactoryFunction();

// CREATING A FUNCTION THAT WILL DISPLAY REG NUMBERS
function displayRegNumbers(reg) {

    var regNumber = document.createElement("li");

    regNumber.className = 'reg';
    regNumber.innerHTML = reg;

    displayTownElement.insertBefore(regNumber, displayTownElement.firstChild);
}
userReg.forEach(displayRegNumbers);

// CREATING A FUNCTION THAT WILL GET REGISTRATIONS FROM A USER
function getUserRegistrations(){

    while (displayTownElement.firstChild) {
        displayTownElement.removeChild(displayTownElement.firstChild);
     }

    //  ERROR MESSAGES
    //  var exists = " registration already exists!";
     var correctFormat = " is not written in a correct format or is a duplicate."
     var nothingToAdd = "There is no registration to add. Please enter a valid registration.";
     var successMsg = " was registered successfully!"
    reg = inputTownElement.value;
    townList = registrationInstanceFactory.caseFormat(reg);

    if (reg == "") {

        errorMsgElement.innerHTML = nothingToAdd;

                setTimeout(function(){
                    errorMsgElement.innerHTML = "";
                }, 2000)
            }

    townList.forEach(function(reg){
        if(registrationInstanceFactory.checkRegNumbers(reg)) {
            registrationInstanceFactory.regList(reg);
            successMsgElement.innerHTML = reg + successMsg;
            setTimeout(function(){
                successMsgElement.innerHTML = "";
            }, 2000) 
        }else if(userReg.includes(reg)){

            errorMsgElement.innerHTML = reg + correctFormat;
            
            setTimeout(function(){
                errorMsgElement.innerHTML = "";
            }, 2000)             
      }  
    })
 
    localStorage.setItem('towns', userReg);
    // errorMsgElement.innerHTML = "";
    inputTownElement.value = "";
    townOptionsElement.selectedIndex = 0;

    userReg.forEach(displayRegNumbers);
}
addButtonElement.addEventListener("click", getUserRegistrations)

// FILTER EACH TOWN

// townOptionsElement.addEventListener('change', (event) => {
//     var townFiltered = townOptionsElement.selectedIndex;
//     var regAvailable = townOptionsElement.options[townFiltered].value;
//     var filterResults = registrationInstanceFactory.registrations(regAvailable);
//     filterResults.forEach(displayRegNumbers);
//   });

townOptionsElement.onchange = function() {

    while (displayTownElement.firstChild) {
        displayTownElement.removeChild(displayTownElement.firstChild);
        }
    
    var nothingToDisplay = "There are no registrations to display in this";
    var townFiltered = townOptionsElement.selectedIndex;

    var regAvailable = townOptionsElement.options[townFiltered].value;
    var noReg = townOptionsElement.value;

    var filterResults = registrationInstanceFactory.registrations(regAvailable);
   
    if(regAvailable){
        filterResults.forEach(displayRegNumbers);
    }else if (regAvailable === []){
        displayTownElement.innerHTML = nothingToDisplay;
    }
}

// CLEAR TOWNS IN DOM AND STORAGE
function resetReg(){
    displayTownElement.innerHTML = "";
    userReg = [];
    localStorage['towns'] = userReg;
}
resetButtonElement.addEventListener("click", resetReg)

// REFRESH PAGE AND DISPLAY ALL DATA
function refreshPage(){
    while (displayTownElement.firstChild) {
        displayTownElement.removeChild(displayTownElement.firstChild);
    }
    townOptionsElement.selectedIndex = 0;
    userReg.forEach(displayRegNumbers);

}refreshBtnElement.addEventListener('click', refreshPage)

