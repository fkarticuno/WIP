var primesFound = [];
var notPrime = [];
var number = 1;

function start() {
    for (var i = 0; i< 100; number++) {
        if (number % 1 == 0 && number % number == 0 || number ==1) {
            notPrime += number;
        }
        else {
        primesFound += number;
        $('.primesfound').append("> "+number);
        };
        i++;
    };
};

start();