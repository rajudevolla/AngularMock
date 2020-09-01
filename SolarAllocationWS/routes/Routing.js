//Insert the required piece of code

var express = require('express');
var routing = express.Router();
var AllocationBL = require('../public/javascripts/AllocatorBL')
var SolarHeater = require('../public/javascripts/SolarHeater')

routing.post('/allocate', function (req, res, next) {
    var assign = SolarHeater.toObject(req.body);
    AllocationBL.allocate(assign).then(function (solarHeater) {
        // console.log(solarHeater);
        res.json({ "message": "Solar Heater " + solarHeater.solarHeaterId + " successfully allocated to customer " + solarHeater.customerId })
    }).catch(function (err) {
        next(err);
    })
})

routing.get('/getallocations', function (req, res, next) {
    // console.log("req recived")
    AllocationBL.getAllBooking().then(function (allocations) {
        res.json(allocations)
    }).catch(function () {
        next(err)
    })
})

routing.get('/getSolarHeaterIds', function (req, res, next) {
    AllocationBL.getSolarHeaterIds().then(function (ids) {
        res.json(ids);
    }).catch(function () {
        next(err);
    })
})

routing.get('/getSolarHeaterIds/:ids', function (req, res, next) {
    AllocationBL.getDataOfId(req.params.ids).then(function (data) {
        res.json(data);
    }).catch(function (err) {
        next(err);
    })
})

module.exports = routing;