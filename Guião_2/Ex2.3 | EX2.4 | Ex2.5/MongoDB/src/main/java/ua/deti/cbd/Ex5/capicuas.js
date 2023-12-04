capicuas = function(display) {


    return ((display.split("-")[1]) == (display.split("-")[1]).split("").reverse().join(""))

}


db.phones.find({ $expr: { $function: { 
    body: capicuas, 
    args: ["$display"], 
    lang: "js" } } })