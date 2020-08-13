var count2 = 0;
var timing = setInterval(start, 200);

var texts = ["a Student", "a Problem Solver", "a Traveler", "a Dreamer", "a Web Developer", "a Fast Learner", "a Team Member"];

var prevword;
var currentword;
var count;

// function setText() {
//     if (prevword == null || (count >= texts.length)) {
//         count = 0;
//         currentword = texts[count];
//         typeWriter(currentword);
//         prevword = currentword;
//         count += 1;
//     } else {
//         currentword = texts[count];
//         typeWriter(currentword);
//         prevword = currentword;
//         count += 1;
//     }
// }

var w = 0;


function setText() {
    // if (w < wrd.length) {
    //     typeWriter(wrd);
    //     // console.log(texts[w]);
    //     w++;
    // }

    for (var w = 0; w < texts.length; w++) {
        typeWriter(texts[w]);
        // console.log(texts[w])
    }
}

var i = 0;
var speed = 50;
var word = '';
var temp = '';

function typeWriter(txt) {
    // console.log(txt);
    if (i < txt.length) {
        temp = document.getElementById("profileoption").innerHTML;
        document.getElementById("profileoption").innerHTML = temp.substring(0, temp.length - 1);
        word = document.getElementById("profileoption").innerHTML += txt[i];
        // console.log(word);
        var neww = document.getElementById("profileoption").innerHTML = word + '|';
        i++;
        setTimeout(typeWriter(), speed);

    } else if (i >= word.length) {
        word = word.substring(0, word.length - 1);
        document.getElementById("profileoption").innerHTML = word;
        document.getElementById("profileoption").innerHTML = word + '|';
        setTimeout(typeWriter(), speed);
    }


}



function start() {
    count++;
    console.log(count2);
    if (count2 < texts.length) {
        // console.log(texts[count2]);
        setTimeout(setText(texts[count2]), speed);
        // setText(texts[count2]);
        // count2 = count2 + 1;

    }
    // count2++;

}