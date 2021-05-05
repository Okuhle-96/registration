// var inputTownElement = document.querySelector(".input");
// var addButtonElement = document.querySelector(".addButton");

// var displayTownElement = document.querySelector(".displayTown");
// var filteredTownElement = document.querySelector(".town");

// var userReg = [];

// // CREATING AN INSTANCE
// var registrationFactoryInstance = registrationFactory();

// // SETTING THE LOCAL STORAGE
// if (localStorage['towns']){
//     town = localStorage['towns'];
//     userReg = localStorage.getItem(town);
//  }
//  displayTownElement.innerHTML = userReg;

// //DISPLAYING REGISTRATIONS
// function displayRegNumber(reg) {

//     var registrations = document.createElement('li');

//     registrations.innerHTML = reg;

//     // registrations.className = 'town-list';
//     // displayTownElement.append(registrations);

//     // let towns = localStorage.getItem('towns');
//     // const regArray = Object.keys(towns)    

//     // regArray.forEach(town => {
//     //     registrations.innerHTML += `<li>${town}</li>`;    
//     // });
//     displayTownElement.insertBefore(registrations,displayTownElement.firstChild)
// }

// userReg.forEach(displayRegNumber);

// //GETTING REGISTRATIONS
// function registration(){

// //     var town = inputTownElement.value;

// //             registrationFactoryInstance.getRegistration(town);
// //             if(localStorage['towns']){
// //                 localStorage.setItem("towns", JSON.stringify(registrationFactoryInstance.townList(town)));

// //             }
       
// //      displayTownElement.innerHTML = registrationFactoryInstance.townList()

// // displayRegNumber();
// if (displayTownElement.firstChild){
//     displayTownElement.removeChild(displayTownElement.firstChild);
// }
// document.querySelector('.town').selectedIndex = 0;
// userReg.forEach(displayRegNumber);
// invalidNum = 0;
// validNum = 0;
// duplicateRegNums = [];
// invalidRegNums = [];
// regEntered = document.querySelector(".input").value;
// if (regEntered == "") {
//     document.querySelector(".input").classList.add("no_value");
//     setTimeout(function(){
//         document.querySelector(".input").classList.remove("no_value");
//     }, 1500)
//     return;
// }
// }

// addButtonElement.addEventListener("click", registration);

var regList = [];
if(localStorage['towns']) {
    regList = localStorage.getItem('towns').split(',')
}

var filter = regNumFilter();
var addBtn = document.querySelector(".addButton");
var regDisplayList = document.querySelector(".displayTown");
var townOptions = document.querySelector(".town");
var resetBtn = document.querySelector(".reset");
var clearBtn = document.querySelector(".clear");

function displayNum(regNum) {
    var plate = document.createElement("LI");
    plate.className = 'reg';
    plate.innerHTML = regNum;
    regDisplayList.insertBefore(plate,regDisplayList.firstChild);
}

regList.forEach(displayNum);

addBtn.addEventListener("click", function(){
    while (regDisplayList.firstChild) {
        regDisplayList.removeChild(regDisplayList.firstChild);
    }
    document.querySelector('.town').selectedIndex = 0;
    regList.forEach(displayNum);
    invalidNum = 0;
    validNum = 0;
    duplicateRegNums = [];
    invalidRegNums = [];
    regEntered = document.querySelector(".input").value;
    if (regEntered == "") {
        document.querySelector(".input").classList.add("no_value");
        setTimeout(function(){
            document.querySelector(".input").classList.remove("no_value");
        }, 1500)
        return;
    }
    
    regEnteredList = filter.inputToList(regEntered);
    regEnteredList.forEach(function(num,i){
    setTimeout(function(){
        if(filter.validityTest(num)) {
            filter.addToList(num);
            displayNum(num);
            document.querySelector(".confirmation").classList.add("valid");
            document.querySelector(".confirmation").innerHTML = num + " was added succesfully!";
        } else {
            document.querySelector(".confirmation").classList.add("invalid");
            document.querySelector(".confirmation").innerHTML = num + " is invalid or a duplicate!" ;
            
        }  
    },2000*i)
})

setTimeout(function(){
    localStorage.setItem('towns', regList.toString());

    if (document.querySelector(".confirmation").classList.contains("invalid")) {
        document.querySelector(".confirmation").classList.remove("invalid");
    }
    if (document.querySelector(".confirmation").classList.contains("valid")) {
        document.querySelector(".confirmation").classList.remove("valid");
    }
    document.querySelector(".confirmation").innerHTML = "";
}, 2000*(regEnteredList.length))
document.querySelector(".input").value = "";
   
});

townOptions.onchange = function() {
    while (regDisplayList.firstChild) {
        regDisplayList.removeChild(regDisplayList.firstChild);
    }
    var townSelected = document.querySelector('.town').selectedIndex;
    var townList = filter.carsForTown(townOptions.options[townSelected].value);
    townList.forEach(displayNum);
}

resetBtn.addEventListener('click', function(){
    while (regDisplayList.firstChild) {
        regDisplayList.removeChild(regDisplayList.firstChild);
    }
    localStorage.setItem('towns', "");
    regList=[];
});
clearBtn.addEventListener('click', function(){
    while (regDisplayList.firstChild) {
        regDisplayList.removeChild(regDisplayList.firstChild);
    }
    document.querySelector('.town').selectedIndex = 0;
    regList.forEach(displayNum);
});

