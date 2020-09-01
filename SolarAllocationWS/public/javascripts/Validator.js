var Validator = {}

Validator.validateCustomer = function(customerId){
    if(new String(customerId).length != 4){
        throw new Error("Invalid! Customer Id should be a 4 digit number");
    }
}

Validator.validateDate = function(pDate,iDate){
    if(iDate < pDate){
        console.log("In validate:",pDate);
        throw new Error("Installation Date cannot be before Purchase Date.")
    }
}

module.exports = Validator;