$(function() {


    var userData;
    var emailIds="";

    var getData = function() {

        return new Promise(function(resolve, reject) {
            $.ajax({
                url: "https://jsonplaceholder.typicode.com/users", 
                dataType: "json",
                success: function(data) {
                    console.log("#Data", data);
                    userData = data;
                    resolve('Data fetched sucessfully');
                },
                error: function(data) {
                    reject("Data cannot be fetched");
                },
                /*
            complete: function(xhr, data) {
                if (xhr.status != 0)
                    alert('success');
                else
                    alert('fail');
            }*/
            });
        });
    };

    var extractEmails = function(prevMsg){

        return new Promise(function(resolve, reject){
            if ( userData == null || userData === ""){  //userData == 'undefined' ||
                reject(prevMsg + " - No data found");
            }

            for(i in userData) {
                emailIds = emailIds.concat(userData[i].email +",");
            }
            console.log("Emails extracted: ", emailIds);
            resolve(prevMsg + " - email ids extracted successfully");
        });

    };

    var showResult = function(prevMsg) {

        return new Promise(function(resolve, reject){

            if (emailIds == null || emailIds === "") {
                $("#promise").append("<div>" + prevMsg + " - No emails to display</div>");
                reject(prevMsg + " - No email ids to display");
            } else {
                console.log("<div>" + emailIds + "</div>");
                $("#promise").append("<div>" + emailIds + "</div>");

                resolve(prevMsg + " - Email ids displayed successfully")
            }

        });
    };


    // Execution parallelly (random order) ....
    /*
    getData().then(function(resolve){
        console.log("1.getData Result:", userData);
        //console.log("Now calling extractEmails ...");
    }).catch(function(reject) {
        console.log("1.getData Result:", reject);
    });

    extractEmails().then(function(resolve){
        console.log("2.extractEmails result: ", resolve) ;
    }).catch(function(reject){
        console.log("2.extractEmails result: ", reject) ;
    });

    showResult().then(function(resolve){
        console.log("3.showResult result: ", resolve) ;
    }).catch(function(reject){
        console.log("3.showResult result: ", reject) ;
    });
*/

    // Execution sequentially.
    getData().then(function(result){
        console.log("1.getData Result:", userData);
        return extractEmails(result);
    }).then(function(result){
         console.log("2.extractEmails result: ", result) ;
        return showResult(result);
    }).then(function(result){
        console.log("3.showResult result: ", result) ;
    }).catch(function(result){
        console.log("Error : ", result) ;
    });

});