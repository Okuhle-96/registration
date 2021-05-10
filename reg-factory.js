function registrationFactoryFunction() {

    // var userReg = [];
    var regex = /^((CJ|CY|CL|CA)\s\d{3}\s\d{3})$/;
    var capeCities = [];

    var towns = {
      'CJ' : 'Paarl',
      'CY' : 'Bellville',
      'CL' : 'Stellenbosch',
      'CA' : 'Cape Town',
    }

    // SETTING ERROR MESSAGES
    var exists = " registration already exists!";
    var correctFormat = " is not written in a correct format."
    var nothingToAdd = "There is no registration to add. Please enter a valid registration.";
    var successMsg = " was registered successfully!"

    // VALIDATIONS
    var validRegistrations;
    var invalidRegistrations;
    var duplicates = [];
    var invalidRegNums = [];

    function regList(inputReg) {
      userReg.unshift(inputReg);
    }

    function inputTown(town){
      if(town.startsWith("CA") || town.startsWith("CJ") ||
         town.startsWith("CL") || town.startsWith("CY")){
          capeCities.push(town);
         }
         return capeCities;
    }

    function registrations(inputReg) {

        var str = '';
        var townFiltered = [];
  
          for (var town in towns) {
            if (towns[town] === inputReg) {
              str = town;
            }
        }
       
      userReg.forEach(function(car) {
          if(car.startsWith(str)) {
           townFiltered.push(car);
           }

      });
 
      return townFiltered;
      
    
    }

  
    function returnErrors(town){
        if(regex.test(reg)) {
              if(reg === town){
                return reg + exists;        
              }if (town === ""){
                return nothingToAdd;        
              }if(reg !== town){
                return town + successMsg;           
              }
        }else {
          return correctFormat;   
        }
    }

 
    function checkRegNumbers(reg) {
      var regex = /^((CJ|CY|CL|CA)\s\d{3}\s\d{3})$/;
      var isValid = true;

      if(regex.test(reg)) {
        userReg.forEach(function(car){
          if(car == reg) {
            invalidRegistrations++;
            duplicates.push(reg);
            isValid = false;
            return exists;
          } else {
            validRegistrations++;
          }
        });
      } else {
        invalidRegistrations++;
        invalidRegNums.push(reg);
        isValid = false;
        return reg + correctFormat;
      }
      return isValid;
    }


    function caseFormat(str) {

      str = str.toUpperCase();
    
      var list = str.split(',');
        list.forEach(function(regValue, index ,list){
        regValue = regValue.trim();
        list[index] = spaceCheck(regValue);
      });
      return list;
    }


    function spaceCheck(reg) {
      
      var str = reg
      reg = str.replace(/ /g,'');
      var regex = /^((CJ|CY|CL|CA)\d{3}\d{3})$/;
      
      if (regex.test(reg)) {
        reg = reg.substring(0,2) + " " + reg.substring(2,5) + " " + reg.substring(5);
        }
        
        return reg;
    }

    return {
        regList,
        checkRegNumbers,
        registrations,
        returnErrors,
        spaceCheck,
        inputTown,
        caseFormat
    }
}