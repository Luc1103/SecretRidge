//const CSVToJSON = require("csvtojson");
//const FileSystem = require("fs")

/*
CSVToJSON().fromFile("data_cleaned.csv").then(source => {
    console.log(source);
    
})*/

var PORT = process.env.PORT || 5000;

var server = http.Server(app);

server.listen(PORT, function() {
    console.log('Running')
});
