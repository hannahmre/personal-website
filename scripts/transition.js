var buttons = document.getElementsByClassName('tabs2');
var boxes = document.getElementsByClassName('contentbox');


function content_change(tab) {

    if (tab == 'db') {
        // document.body.style.backgroundColor = "#ffccff";
        transition(0);

    } else if (tab == 'wp') {
        // document.body.style.backgroundColor = "#ccccff";
        transition(1);

    } else if (tab == 'vr') {

        // document.body.style.backgroundColor = "green";
        transition(2);

    } else {
        // document.body.style.backgroundColor = "black";
        transition(3);

    }

}

function transition(num) {
    for (var b = 0; b < buttons.length - 1; b++) {
        if (b == num) {
            // console.log('here1');
            boxes[num].style.display = 'block';
            buttons[num].classList.add = 'active';
            // console.log('here2');
        } else {
            boxes[b].style.display = 'none';
            buttons[b].classList.remove = 'active';
        }

    }
}