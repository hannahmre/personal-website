const texts = ["a Student", "a Problem Solver", "a Traveler", "a Dreamer", "a Web Developer", "a Fast Learner", "a Team Member"];
var count = 0;
var timer;

function typeWriter() {
    let text = texts[count].split("");
    var addingtext = function() {
        if (text.length > 0) {
            document.getElementById('profileoption').innerHTML += text.shift();
        } else {
            deletetext();
            return false;
        };
        timer = setTimeout(addingtext, 200);
    };
    addingtext();
};



function deletetext() {
    let text = texts[count].split("");
    var deletingtext = function() {
        if (text.length > 0) {
            text.pop();
            document.getElementById('profileoption').innerHTML = text.join("");
        } else {
            if (texts.length > (count + 1)) {
                count++;
            } else {
                count = 0;
            };
            typeWriter();
            return false;
        };
        timer = setTimeout(deletingtext, 100);
    };

    deletingtext();

};

typeWriter();