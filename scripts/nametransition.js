var timing = setInterval(setText, 900);

var texts = ["a Student", "a Problem Solver", "a Traveler", "a Dreamer", "a Web Developer", "a Fast Learner", "a Team Member"];

var prevword;
var currentword;
var count;

function setText() {
    if (prevword == null || (count >= texts.length)) {
        count = 0;
        currentword = texts[count];
        console.log(currentword)
        document.getElementById("profileoption").innerHTML = currentword;
        prevword = currentword;
        count += 1;
    } else {
        document.getElementById("profileoption").innerHTML = texts[count];
        currentword = texts[count];
        prevword = currentword;
        count += 1;
    }
}