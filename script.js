

var numarA = $("#numarA");
var numarB = $('#numarB');
var total1 = $('#raspuns1');
var total2 = $('#raspuns2');
var total3 = $('#raspuns3');
var mesaj = $('#msg');
var next = $('#refresh');

var scorCont = $('#scor');
var scor = 0;
scorCont.html("Scor: 0");

var randomA = randomPlus(1);
numarA.html(randomA);

var randomB = randomPlus(1);
numarB.html(randomB);



function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;    
    }
    return a;
}

function randomTotal() {
    var correctValue = randomA + randomB;
    var resultArr = [correctValue, (randomA + randomB) + randomSmall(), (randomA + randomB) - randomSmall()];
    var shuffledArr = shuffle(resultArr);
    
    console.log(shuffledArr);
    
    var selectorRaspuns;
    for (var i = 1; i <= shuffledArr.length; i++) {
        selectorRaspuns = $('#raspuns'+i);
        
        if (correctValue == shuffledArr[i-1]) {
            selectorRaspuns.click(function() { 
                clickTotal(true);
            });
        }
        else {
            selectorRaspuns.click(function() { 
                clickTotal(false); 
            });
        }
        
        selectorRaspuns.html(shuffledArr[i-1]);
    }  
}
randomTotal();

// apasa pe raspunsul corect

function clickTotal(flag) { 
    if(flag) { 
        mesaj.html("Corect");
        next.show();
        return;
    } else
        mesaj.html("Gresit");
        next.hide();
    return;
}


/* apasa pe raspunsul gresit
total2.onclick = function() {
    mesaj.innerHTML = "mai incearca";
    next.style.display = "none";
}
*/

//apasa pe next 
next.click(function() {
    //                 
    if (randomA >= 4 && randomB >= 4) { 
       randomA = randomPlus(5);
       numarA.html(randomA);
       randomB =  randomPlus(5);
       numarB.html(randomB);
       randomTotal();
        
    } else {
      randomA = randomPlus(1);
        numarA.html(randomA);
      randomB = randomPlus(1);
        numarB.html(randomB);
      randomTotal()
    };
    
    next.hide();
    mesaj.html("");
    // update scor
    scor += 5;
    scorCont.html("Scor: " + scor);
});

function randomSmall() {
    for (i = 0; i < 2; i++) {
        random = Math.floor((Math.random() * i) +1);
    };
    return random;
}

function randomPlus(n) {
    for (i = 0; i <= 6; i++) {
        random = (Math.floor((Math.random() * i) +n));
    };
    return random;
}