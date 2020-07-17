//feetToMail
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}


//woodCalculator
function woodCalculator(chair, table, bed){
    var chairCount = chair * 3;
    var tableCount = table * 4;
    var bedCount = bed * 6;
    var totalwood = chairCount + tableCount + bedCount;
    return totalwood;
}


//brickCalculator
function brickCalculator (storied){
    if (storied <=10){
        var feet1 = storied * 15;
        var brick = feet1 * 1000;
    }
  
    else if (storied <= 20){
        var feet2 = storied * 13;
        var brick = feet2 * 100;

    } 

else if (storied > 20){
    var feet3 = storied * 10;
    var brick = feet3 * 1000;
}
return brick;
}
var first = brickCalculator(8);
console.log(first);



//tinyFriend
function tinyFriend(numbers){
    var tiny =numbers[0];
    for(var i=0; i<numbers.length; i++){
        var flist = numbers[i];
        if(flist.length < tiny.length){
            tiny = flist;
        }
    }
    return tiny;
}
var friendsList = ['akib', 'masud', 'almamun']
console.log(tinyFriend(friendsList));




