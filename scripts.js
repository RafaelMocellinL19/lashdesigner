function menuToggle() {
    let menuArea = document.getElementById("menu-area");

    if (menuArea.style.width == '200px') {
        menuArea.style.width = '0px';
    } else {
        menuArea.style.width = '200px';
    }

}

var acc = document.getElementsByClassName("accordion");
var i 

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

    });
};