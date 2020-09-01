var Customer = require('../javascripts/AllocatorDAL');

describe('Check CustomerId', function () {
    it('Customer is present', function(done){
        var cId = 1001;
        var result;
        Customer.checkCustomer(cId).then(function(customer){
            result = customer;
            return result;
        }).then(function(data){
            done()
            expect(data).toMatch({"customerId": 1001,"name":"Dolly","location":"Mysore"});
        })
    })

    it('Customer is not present', function(done){
        var cId = 1009;
        var result;
        Customer.checkCustomer(cId).then(function(customer){
            result = customer;
            return result;
        }).then(function(data){
            done()
            expect(data).toBeFalsy();
        })
    })    

  
})
