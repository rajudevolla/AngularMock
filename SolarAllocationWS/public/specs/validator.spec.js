var Validator = require('../javascripts/Validator');

describe('Validate customer Id', function(){
    it('Entered invalid length of customer Id', function(){
        try {
            Validator.validateCustomer(77);
        }catch(error){
            expect(error.message).toEqual("Invalid! Customer Id should be a 4 digit number");
        }
    });

    it('Entered valid length of customer Id', function(){
        expect(Validator.validateCustomer(1004)).toBeUndefined();
    });

})
