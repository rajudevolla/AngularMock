var utility = {}

utility.formatDate = function (date) {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    temp = new Date(date).toLocaleDateString('en-US', options);
    console.log("In conversion: ", temp);
    return temp;
}

module.exports = utility;

// utility.getdate = function(date){
//     var temp = new Date(date).toLocaleDateString();
//     console.log(temp);
// }

// utility.getdate(2018-06-13);