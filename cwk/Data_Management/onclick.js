$('.submit-button').on('click',function() {

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
    //$('#em-worked').append().html(`<p>${worked}</p>`);

    database.ref().push({
        user:{
            name:name,
            rate:rate,
            date:date,
            monthly:monthly,
            dateAdded: firebase. database. ServerValue.TIMESTAMP,
        }    
    });
});