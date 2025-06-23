var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        const img = this.querySelector("img");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            img.src = "./assets/images/icon-plus.svg";
            this.style.borderBottom = "2px solid hsl(275, 100%, 97%)";
            panel.style.display = "none";
        } else {
            img.src = "./assets/images/icon-minus.svg";
            this.style.borderBottom = "0px solid hsl(275, 100%, 97%)";
            panel.style.display = "block";
        }
    });
}