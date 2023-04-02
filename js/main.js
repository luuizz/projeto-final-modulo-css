if (document.getElementById("faqclick"))
    for (var btnContainer = document.getElementById("faqclick"), btns = btnContainer.getElementsByClassName("question"), i = 0, l = btns.length; i < l; i++)
        btns[i].onclick = function() {
            for (var e = 0; e < l; e++)
                btns[e] != this && btns[e].classList.remove("active");
            this.classList.toggle("active")
        }
        ;