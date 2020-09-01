var SolarHeater = require('./SolarHeater')
var Customer = require('./Customer');
var connection = require('./Connections');
var utility = require('./Utility')
var AllocatorDAL = {}

AllocatorDAL.generateId = function () {
    return connection.getConnection().then(function (db) {
        var my_collection = db.collection('Solarheaterallocation');
        return my_collection.distinct("solarHeaterId").then(function (ids) {
            var max_solar_Heater_Id = Math.max(...ids);
            return max_solar_Heater_Id + 1;
        })
    })
}

AllocatorDAL.checkCustomer = function (customerId) {
    return connection.getConnection().then(function (db) {
        return db.collection("Customer").findOne({ "customerId": customerId }).then(function (result) {
            return result;
        })
    })
}


AllocatorDAL.allocateHeater = function (solarHeater) {
    console.log("The date: ", solarHeater.purchaseDate)
    var purchaseDate = utility.formatDate(solarHeater.purchaseDate);
    var installDate = utility.formatDate(solarHeater.installationDate);
    return connection.getConnection().then(function (db) {
        var my_collection = db.collection('Solarheaterallocation');
        return AllocatorDAL.generateId().then(function (sId) {
            return my_collection.insert({
                "solarHeaterId": sId, "distributorName": solarHeater.distributorName,
                "purchaseDate": purchaseDate, "installationDate": installDate,
                "customerId": solarHeater.customerId
            }).then(function (result) {
                if (result.insertedCount != 1)
                    throw new Error('Error in saving details');
                else {
                    solarHeater.solarHeaterId = sId;
                    return solarHeater;
                }
            })
        })
    })
}

AllocatorDAL.getAllBooking = function () {
    return connection.getConnection().then(function (db) {
        return db.collection("Solarheaterallocation").find().toArray().then(function (allAllocations) {
            return allAllocations;
        }).catch(function (err) {
            return err;
        })
    })
}

AllocatorDAL.getSolarHeaterIds = function () {
    return connection.getConnection().then(function (db) {
        return db.collection("Solarheaterallocation").distinct("solarHeaterId").then(function (solarHeaterIds) {
            return solarHeaterIds; //Returns an array of Solar heater ids
        })
    })
}

AllocatorDAL.getDataOfId = function (sId) {
    console.log("value sent: ",sId);
    return connection.getConnection().then(function (db) {
        return db.collection("Solarheaterallocation").findOne({ "solarHeaterId": sId }).then(function (data) {
            console.log("In DAL: ",data)
            return SolarHeater.toObject(data); // Return the data of the particular Id.
        })
    })
}          

module.exports = AllocatorDAL;
