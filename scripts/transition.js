var buttons = document.getElementsByClassName('tabs2');
var boxes = document.getElementsByClassName('contentbox');


function content_change(tab) {

    if (tab == 'db') {
        // document.body.style.backgroundColor = "black";
        // document.getElementById('databasep').style.backgroundColor = ''
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
    for (var b = 0; b < buttons.length; b++) {
        if (b == num) {
            // console.log('here1');
            boxes[num].style.display = 'block';
            buttons[num].classList.add = 'active';
            buttons[num].style.backgroundColor = "#97a7e7";
            if (screen.width >= 769) {
                buttons[num].style.padding = "0px25px";
            }
            // console.log('here2');
        } else {
            boxes[b].style.display = 'none';
            buttons[b].classList.remove = 'active';
            buttons[b].style.backgroundColor = "#c1caf1";
        }

    }
}