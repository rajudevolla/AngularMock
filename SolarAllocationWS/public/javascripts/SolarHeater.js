var SolarHeater  = function(shId,distName,pDate,iDate,custId){
    this.solarHeaterId = shId;
    this.distributorName = distName;
    this.purchaseDate = pDate;
    this.installationDate = iDate;
    this.customerId = custId;
}

SolarHeater.toObject = function(result){
    return new SolarHeater(result.solarHeaterId,result.distributorName,result.purchaseDate,result.installationDate,result.customerId);
}

module.exports = SolarHeater;