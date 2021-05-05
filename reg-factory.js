// function registrationFactory(){

//     var userReg = []; 
//     var regex = /^((CA|CJ|CY|CL)\s\d{3}\s\d{3})$/;
//     var towns = {
//         "CA" : "Cape Town",
//         "CY" : "Bellville",
//         "CJ" : "Paarl",
//         "CL" : "Stellenbosch"
//     }
    
//     function getRegistration(reg){
//         console.log(reg + "hshshshwhwhh")

//         if(reg.startsWith("CA") || reg.startsWith("CJ") ||
//            reg.startsWith("CY") || reg.startsWith("CL")){
//             userReg.push(reg);
//         }
//     }


//     function filterTown(townFiltered){
 
//         var filteredTown = [];

//         for (var town in towns) {
//            if (towns[town] === townFiltered) {
//               towns = town;
//           }
//         }
       
//         userReg.forEach(function(town) {
//           if(town.startsWith('CA') || town.startsWith('CY') || 
//              town.startsWith('CL') || town.startsWith('CJ')) {
//            filteredTown.push(town);
//            }
//       });
//       return filteredTown;
//     }

//     function townList(){
// return userReg;
//     }

//     function returnErrors(town){
//         if (town === ""){
//             return "Please Enter Your REG Number";
//         }else if(town > 9){
//             return "Please Enter Town With Correct Length!"
//         } if (town !== regex){
//             return "Invalid Town"
//         }
//     }

//     return {
//         getRegistration,
//         returnErrors,
//         filterTown,
//         townList
//     }
   
// }

var validNum = 0;
var invalidNum = 0;
var duplicateRegNums = [];
var invalidRegNums = [];


function regNumFilter() {


    const towns = {
        'CJ' : 'Paarl',
        'CY' : 'Bellville',
        'CL' : 'Stellenbosch',
        'CK' : 'Malmesbury',
        'CA' : 'Cape Town',
        'CF' : 'Kuilsriver'
    }

    function addToList(inputReg) {
        regList.unshift(inputReg);
    }

    function carsForTown(townName) {
        var townPrefix = '';
        var townCars = [];
        var town
          for (town in towns) {
            if (towns[town] === townName) {
              townPrefix = town;
            }
        }
       
      regList.forEach(function(car) {
          if(car.startsWith(townPrefix)) {
           townCars.push(car);
           }
      });
      return townCars;
    }

    function validityTest(reg) {
      var pattern = /^((CJ|CY|CL|CK|CA|CAA|CF)\s\d{3}\s\d{3})$/;
      var validity = true;

      if(pattern.test(reg)) {
        regList.forEach(function(x){
          if(x == reg) {
            invalidNum++;
            duplicateRegNums.push(reg);
            validity = false;
          } else {
            validNum++;
          }
        });
      } else {
        invalidNum++;
        invalidRegNums.push(reg);
        validity = false;
      }
      return validity;
    }

    function spaceCheck(num) {
      var str = num
      num = str.replace(/ /g,'');
      var patNoSpaces = /^((CJ|CY|CL|CK|CA|CF)\d{3}\d{3})$/;
       
        if (patNoSpaces.test(num)) {
            num = num.substring(0,2)+' '+num.substring(2,5)+' '+num.substring(5);
        }
        var patNoSpaces = /^(CAA\d{3}\d{3})$/;
       
        if (patNoSpaces.test(num)) {
            num = num.substring(0,3)+' '+num.substring(3,6)+' '+num.substring(6);
        }
        return num;
    }

    function inputToList(str) {
      str = str.toUpperCase();
      var list = str.split(',');
      list.forEach(function(value,i,list){
        value = value.trim();
        list[i] = spaceCheck(value);
      });
      return list;
    }

    return {
        addToList,
        carsForTown,
        validityTest,
        spaceCheck,
        inputToList
    }
}