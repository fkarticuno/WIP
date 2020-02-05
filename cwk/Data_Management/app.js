var firebaseConfig = {
    apiKey: "AIzaSyAQSWHrrXes_C3tMYqhF_dia7C3jI2wMkc",
    authDomain: "starterfka.firebaseapp.com",
    databaseURL: "https://starterfka.firebaseio.com",
    projectId: "starterfka",
    storageBucket: "",
    messagingSenderId: "584403285589",
    appId: "1:584403285589:web:12f58acc15bb74cd6f46dc"
};
// var then = moment();
// var howlong = moment().then.fromNow();

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var name = 0;
var rate = 0;
var date = 0;
var monthly = 0;

//database.ref().on('value',function(snapshot){
    //  On DB change
//});

//$('.submit-button').on('click',function() {
$('.submit-button').on('click',function() {

    alert('yo');

// function clickSubmit() { 
    console.log("clicked");
    event.preventDefault();
    name = $('#user-entry-name').val();
    rate = $('#user-entry-rate').val();
    date = $('#user-entry-start').val();
    monthly = $('#user-entry-monthly').val();

    alert(`Employee: ${name} submitted.`);
// Push new values to 'table'
    function mkp(value){
        return '<p>'+ value + '</p>'
    }
    $('#em-name').append(mkp(name));
    $('#em-rate').append(mkp(rate));
    $('#em-start').append(mkp(date));
    $('#em-worked').append(mkp(5));
    $('#em-monthly').append(mkp(monthly));
    $('#em-total').append(mkp(monthly*5));

    database.ref().push({
        user:{
            name:name,
            rate:rate,
            date:date,
            monthly:monthly,
            dateAdded: firebase.database.ServerValue.TIMESTAMP,
        }    
    });
});