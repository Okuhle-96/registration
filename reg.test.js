describe("Registration Numbers", function(){

    describe("should be able to take in any registrations from The Western Cape", function(){
        it("should be able to return registration number from Cape Town", function() {
          let reg = regNumFilter();
          assert.equal("CA 199 299", reg.inputToList('CA 199 299'));
        });

    it("should be able to return registration number from Bellville", function() {
      let reg = regNumFilter();
      assert.equal("CY 199 299", reg.inputToList('CY 199 299'));
    });

    it("should be able to return registration number from Paarl", function() {
      let reg = regNumFilter();
      assert.equal("CJ 199 299", reg.inputToList('CJ 199 299'));
    });

    it("should be able to return registration number from Stellenbosch", function() {
      let reg = regNumFilter();
      assert.equal("CL 199 299", reg.inputToList('CL 199 299'));
    });

    });


  // describe("should be able to return errors", function(){
  //   it("should return an empty array if the registration number is not recognised", function() {
  //     let reg = regNumFilter();
  //     assert.deepEqual([], reg.inputToList('CF 199 299'));
  //   });

  //   it("should return an error message if the user input is empty", function() {
  //     let reg = regNumFilter();
  //     assert.deepEqual('Please Enter Your REG Number', reg.returnErrors(''));
  //   });

  //   it("should return an error message if the town is not recognised", function() {
  //     let reg = regNumFilter();
  //     assert.deepEqual('Invalid Town', reg.returnErrors('CF 199 299'));
  //   });
  // })


  describe("should be able to filter towns", function(){
    it("should be able to return registrations from Cape Town", function(){
      let reg = regNumFilter();

      regList = [ 'CA 884 545', 'CA 333 545','CA 444 545', 'CF 884 545','CK 884 545']
      ;
    

     assert.deepEqual(['CA 884 545', 'CA 333 545', 'CA 444 545'], reg.carsForTown('Cape Town'));

    });

    it("should be able to return registrations from Bellville", function(){
      let reg = regNumFilter();

      regList = [
        'CY 884 545','CY 333 545','CY 444 545','CF 884 545','CY 884 545'
      ]

     assert.deepEqual(['CY 884 545', 'CY 333 545', 'CY 444 545', 'CY 884 545'], reg.carsForTown('Bellville'));

    });

    it("should be able to return registrations from Paarl", function(){
      let reg = regNumFilter();

      regList = ['CJ 884 545','CJ 333 545','CJ 444 545','CF 884 545','CJ 884 545'
    ]

     assert.deepEqual(['CJ 884 545', 'CJ 333 545', 'CJ 444 545', 'CJ 884 545'], reg.carsForTown('Paarl'));

    });

    it("should be able to return registrations from Stellenbosch", function(){
      let reg = regNumFilter();

      regList = ['CL 884 545','CL 333 545','CL 444 545', 'CF 884 545','CL 884 545'
    ]

     assert.deepEqual(['CL 884 545', 'CL 333 545', 'CL 444 545', 'CL 884 545'], reg.carsForTown('Stellenbosch'));

    }); 
  });

});

