$(document).ready(function () {

    //var employeeData = {
    /*     EmployeeName: p,
        role: p,
        startDate: p,
        monthsWorked: p,
        monthlyRate: p,
        totalBilled: p
    }; */

    const firebaseConfig = {
        apiKey: "AIzaSyArTLRiWO4GOhh6_KV423xkPIsSOA9uKJQ",
        authDomain: "amills3-2999f.firebaseapp.com",
        databaseURL: "https://amills3-2999f.firebaseio.com",
        projectId: "amills3-2999f",
        storageBucket: "",
        messagingSenderId: "300716488689",
        appId: "1:300716488689:web:95799a4f551ea457"
    };

    firebase.initializeApp(config);

    // Create a variable to reference the database.
    var database = firebase.database();

    // Initial Values
    var employeeName = " ";
    var role = " ";
    var startDate = " ";
    var monthsWorked = " ";
    var monthlyRate = " ";
    var totalBilled = " ";

    // Capture Button Click
    $("#add-user").on("click", function(event) {
      event.preventDefault();

      // Grabbed values from text boxes
      employeeName = $("#employeeName-input").val().trim();
      role = $("#role-input").val().trim();
      startDate = $("#startDate-input").val().trim();
      monthsWorked = $("#monthsWorked-input").val().trim();
      monthlyRate = $("#monthlyRate-input").val().trim();
      totalBilled = $("#totalBilled-input").val().trim();

      // Code for handling the push
      database.ref().push({
        employeeName: employeeName,
        role: role,
        startDate: startDate,
        monthsWorked: monthsWorked,
        monthlyRate: monthlyRate,
        totalBilled: totalBilled,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });

});