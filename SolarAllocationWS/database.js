var mongojs=require('mongojs');
var db=mongojs('solarHeater_DB')




db.Customer.insert(
[{"customerId": 1001,"name":'Dolly',"location":'Mysore'},
{"customerId": 1002,"name":'Jatin',"location":'Mysore'},
{"customerId": 1003,"name":'Unlord',"location":'Tumkur'},
{"customerId": 1004,"name":'Virna',"location":'Bangalore'},
{"customerId": 1005,"name":'Allegi',"location":'Bangalore'}
]
);



var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();
var day = today.getDate();
today = today.setUTCHours(0,0,0,0);

db.Solarheaterallocation.insert(
[
{solarHeaterId:2001,distributorName:'Suntek',purchaseDate:new Date(year,month+2,day).toLocaleDateString(),installationDate:new Date(year,month+2,day+3).toLocaleDateString(),customerId:1002},
{solarHeaterId:2002,distributorName:'A4solar',purchaseDate:new Date(year,month+3,day).toLocaleDateString(),installationDate:new Date(year,month+3,day+7).toLocaleDateString(),customerId:1001},
{solarHeaterId:2003,distributorName:'Supremesolar',purchaseDate:new Date(year,month+1,day).toLocaleDateString(),installationDate:new Date(year,month+1,day+3).toLocaleDateString(),customerId:1003},
{solarHeaterId:2004,distributorName:'Suntek',purchaseDate:new Date(year,month+2,day+5).toLocaleDateString(),installationDate:new Date(year,month+2,day+8).toLocaleDateString(),customerId:1004},
{solarHeaterId:2005,distributorName:'A4solar',purchaseDate:new Date(year,month+3,day+9).toLocaleDateString(),installationDate:new Date(year,month+3,day+12).toLocaleDateString(),customerId:1005}
]
);


