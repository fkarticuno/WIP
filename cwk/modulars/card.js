var card, title, cardSubtitle, cardText;

``
''
""
cardTitle = 'Favorites';
cardSubtitle = 'My Favs';
cardText = "Some quick example text to build on the card title and make up the bulk of the card's content.";
card =`<!--Create Card taking up 4 Columns-->
                <div class="card mt-2">
                    <div class="card-body">
                        <h5 class="card-title">${cardTitle}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${cardSubtitle}</h6>
                        <p class="card-text">${cardText}</p>
                    </div>
                </div>`

$('document').ready(function(){
    $('#card').addClass('col-md-4');
    $('#card').html(card);
});