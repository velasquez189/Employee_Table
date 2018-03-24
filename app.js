$(document).ready(function(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCby4FDJqvYu3mlpZHLSZIWHQZhLz_Nntg",
        authDomain: "gt201802-livingnight.firebaseapp.com",
        databaseURL: "https://gt201802-livingnight.firebaseio.com",
        projectId: "gt201802-livingnight",
        storageBucket: "gt201802-livingnight.appspot.com",
        messagingSenderId: "813454024382"
    };
    $(document).on("click", "button", function(event){
        event.preventDefault();
        var name = $("#employeeName").val().trim();
        var role = $("#employeeRole").val().trim();
        var start = $("#startDate").val().trim();
        var rate = $("#monthlyRate").val().trim();



    });

    firebase.initializeApp(config);
});
