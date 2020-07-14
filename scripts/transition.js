var buttons = document.getElementsByClassName('tabs2');
var boxes = document.getElementsByClassName('contentbox');


function content_change(tab) {

    if (tab == 'db') {
        transition(0);

    } else if (tab == 'wp') {
        transition(1);

    } else if (tab == 'vr') {
        transition(2);

    } else {
        transition(3);

    }

}

function transition(num) {
    for (var b = 0; b < buttons.length - 1; b++) {
        if (b == num) {
            boxes[num].style.display = 'block';
            buttons[num].classList.add = 'active';
        } else {
            boxes[b].style.display = 'none';
            buttons[b].classList.remove = 'active';
        }

    }
}