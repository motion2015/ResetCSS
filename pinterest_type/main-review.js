const frame = "section";
const box = "article";
const speed = '0.5s';
const activeClass = "on";
const lists = document.querySelectorAll("article");
const btns = document.querySelectorAll("main ul li");
let grid;

window.addEventListener("load", () => {
    init();
    filter(btns);
})



function init() {
    grid = new Isotope(frame, {
        itemSelector: box,
        columnWidth: box,
        transitionDuration: speed
    });
    lists.forEach((element, index) => {
        ((index + 1) % 2 === 1)
            ? element.classList.add("odd")
            : element.classList.add("even");
    });
}

function filter(arr) {
    for (let el of arr) {
        el.addEventListener("click", e => {
            e.preventDefault();
            const sort = e.currentTarget.querySelector("a").getAttribute("href");

            grid.arrange({
                filter: sort
            });

            for (let el of arr) {
                el.classList.remove("on");
            }

            e.currentTarget.classList.add("on")
        });


    }
}


