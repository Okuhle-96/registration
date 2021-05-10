
var regex = /^((CJ|CY|CL|CA)\s\d{3}\s\d{3})$/;
var reg = "CA 199 199"
describe("Registration Numbers", function(){

    describe("should be able to take in any registrations from The Western Cape", function(){
        it("should be able to return registration number from Cape Town", function() {
          let reg = registrationFactoryFunction();
          var regex = /^((CJ|CY|CL|CA)\s\d{3}\s\d{3})$/;
          assert.equal("CA 199 299", reg.inputByUser('CA 199 299'));
        });

    it("should be able to return registration number from Bellville", function() {
      let reg = registrationFactoryFunction();
      assert.equal("CY 199 299", reg.inputByUser('CY 199 299'));
    });

    it("should be able to return registration number from Paarl", function() {
      let reg = registrationFactoryFunction();
      assert.equal("CJ 199 299", reg.inputByUser('CJ 199 299'));
    });

    it("should be able to return registration number from Stellenbosch", function() {
      let reg = registrationFactoryFunction();
      assert.equal("CL 199 299", reg.inputByUser('CL 199 299'));
    });
    
    it("should return an empty array if the registration number is not recognised", function() {
      let reg = registrationFactoryFunction();
      assert.deepEqual([], reg.inputByUser('CF 199 299'));
    });
    it("should return a success message if the town is successfully recognised", function() {
      let reg = registrationFactoryFunction();
      assert.deepEqual('CY 199 299 was registered successfully!', reg.returnErrors('CY 199 299'));
    });

    });


  describe("should be able to return errors", function(){

    it("should return an error message if the user input is empty", function() {
      let reg = registrationFactoryFunction();
      
      assert.deepEqual('There is no registration to add. Please enter a valid registration.', reg.returnErrors(''));
    });

    it("should return an error message if the user input is empty", function() {
      let reg = registrationFactoryFunction();
      assert.deepEqual('There is no registration to add. Please enter a valid registration.', reg.returnErrors(''));
    });

    it("should return an error message if the town already exists", function() {
      let reg = registrationFactoryFunction();
      assert.deepEqual('CA 199 199 registration already exists!', reg.returnErrors('CA 199 199'));
    });
  })


  describe("should be able to filter towns", function(){
    it("should be able to return registrations from Cape Town", function(){
      let reg = registrationFactoryFunction();

      reg.inputByUser('CA 884 545');
      reg.inputByUser('CA 333 545');
      reg.inputByUser('CA 444 545');
      reg.inputByUser('CF 884 545');
      reg.inputByUser('CY 884 545');

     assert.deepEqual(['CA 884 545', 'CA 333 545', 'CA 444 545'], reg.registrations('Cape Town'));

    });

    it("should be able to return registrations from Bellville", function(){
      let reg = registrationFactoryFunction();

      
      reg.inputByUser('CY 884 545');
      reg.inputByUser('CY 333 545');
      reg.inputByUser('CY 444 545');
      reg.inputByUser('CF 884 545');
      reg.inputByUser('CA 884 545');
    
      

     assert.deepEqual(['CY 884 545', 'CY 333 545', 'CY 444 545', 'CY 884 545'], reg.registrations('Bellville'));

    });

    it("should be able to return registrations from Paarl", function(){
      let reg = registrationFactoryFunction();

      reg.inputByUser('CJ 884 545');
      reg.inputByUser('CJ 333 545');
      reg.inputByUser('CJ 444 545');
      reg.inputByUser('CQ 884 545');
      reg.inputByUser('CJ 884 545');
    

     assert.deepEqual(['CJ 884 545', 'CJ 333 545', 'CJ 444 545', 'CJ 884 545'], reg.registrations('Paarl'));

    });

    it("should be able to return registrations from Stellenbosch", function(){
      let reg = registrationFactoryFunction();

      reg.inputByUser('');
      reg.inputByUser('');
      reg.inputByUser('');
      reg.inputByUser('');
      reg.inputByUser('');
    
    

     assert.deepEqual([], reg.registrations('Stellenbosch'));

    }); 
  });

});

