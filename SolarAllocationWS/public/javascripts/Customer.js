var Customer = function (custId,name,loc){
    this.customerId = custId;
    this.name = name;
    this.location = loc;
}

Customer.toObject = function(result){
    return new Customer(result.customerId,result.name,result.location)
}

module.exports = Customer;