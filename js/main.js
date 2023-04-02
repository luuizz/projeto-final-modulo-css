class Accordion {
    constructor(accordionListQuestions) {
        this.accordionListQuestions = document.querySelectorAll(accordionListQuestions);
        this.activeItemClass = "active";
    }

    toggleAccordion(item) {
        item.classList.toggle(this.activeItemClass);
        item.nextElementSibling.classList.toggle(this.activeItemClass);
    }

    addAccordionEvent() {
        this.accordionListQuestions.forEach((question) => {
            question.addEventListener("click", () => this.toggleAccordion (question));
        });

    }

    init() {
        if (document.getElementById("faqclick"))
    for (var btnContainer = document.getElementById("faqclick"), btns = btnContainer.getElementsByClassName("question"), i = 0, l = btns.length; i < l; i++)
        btns[i].onclick = function() {
            for (var e = 0; e < l; e++)
                btns[e] != this && btns[e].classList.remove("active");
            this.classList.toggle("active")
        }
        ;

        return this;

    }
}

const accordion = new Accordion(".faqclick");
accordion.init();