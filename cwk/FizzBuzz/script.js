var num = 0;
var fizz = "fizz"
var buzz = "buzz"

for (var i = 101; i > 0; i--) {
    if (num%3==0 && num%5==0 && num!=0) {
        newrow = $('<div>');
        newrow.text(num + ': ' + fizz + buzz);
        $('.fizzbuzz').append(newrow);
    }
    else if (num%3==0 && num%5!=0) {
        newrow = $('<div>');
        newrow.text(num + ': ' + fizz);
        $('.fizzbuzz').append(newrow);
    }
    else if (num%3!=0 && num%5==0) {
       
        newrow = $('<div>');
        newrow.text(num + ': ' + buzz);
        $('.fizzbuzz').append(newrow);
    }
    else if (num%3!=0 && num%5!=0) {
        newrow = $('<div>');
        newrow.text(num + ': ' + "skip");
        $('.fizzbuzz').append(newrow);
    }
    num++;
};
