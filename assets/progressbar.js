function move() {
    var elem = document.getElementById("myBar");
    var height = 100;
    var id = setInterval(frame, 10);

    function frame() {
        if (height >= 0) {
            clearInterval(id);
        } else {
            height--;
            elem.style.height = height + '%';
        }


    }
}