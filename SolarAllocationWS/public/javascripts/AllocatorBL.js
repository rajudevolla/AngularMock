var SolarHeater = require('./SolarHeater');
var AllocatorDAL = require('./AllocatorDAL')
var Validator = require('./Validator');

var AllocatorBL = {}
AllocatorBL.allocate = function (solarHeater) {
    console.log("In Bl: ", solarHeater.installationDate)
    Validator.validateCustomer(solarHeater.customerId);
    Validator.validateDate(solarHeater.purchaseDate, solarHeater.installationDate)
    return AllocatorDAL.checkCustomer(solarHeater.customerId).then(function (customer) {
        if (customer == null) {
            throw new Error("The given Customer ID is not available")
        } else {
            promise = AllocatorDAL.allocateHeater(solarHeater);
            console.log(promise);
            return promise;
        }
    }).then(function (solarHeaterFromDL) {
        return solarHeaterFromDL;
    })
}

AllocatorBL.getAllBooking = function () {
    return AllocatorDAL.getAllBooking().then(function (allAllocations) {
        //console.log("got bookings", bookings)
        return allAllocations;
    }).catch(function (err) {
        return err
    })
}

AllocatorBL.getSolarHeaterIds = function () {
    return AllocatorDAL.getSolarHeaterIds().then(function (ids) {
        if (ids == null) {
            throw new Error("Error in fetching Solar Heater Ids!");
        }
        else {
            return ids;
        }
    })
}

AllocatorBL.getDataOfId = function (sId) {
    return AllocatorDAL.getDataOfId(Number(sId)).then(function (data) {
        if (data == null) {
            throw new Error("Error in fetching data for " + sId);
        }
        else {
            return data;
        }
    })
}

module.exports = AllocatorBL;