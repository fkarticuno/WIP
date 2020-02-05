$.ajax({
    url: pokemon-go1.p.rapidapi.com+'&apikey=1bb40a3f2cmsh737e756f49ff562p1d4980jsn6537251a9bc1',
    method: 'Get',
    })
    .then(function(res){
        console.log(res);
        $('#info').text(JSON.stringify(res));
    })
    


