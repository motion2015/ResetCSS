window.addEventListener("load", () => {
    const grid = new Isotope("section", {
        itemSelector: "article",
        columnWidth: "article",
        transitionDuration: ".5s"
    });
    const lists = document.querySelectorAll("article");
    const btns = document.querySelectorAll("main ul li");


    lists.forEach((element, index) => {
        console.log(element);

        ((index + 1) % 2 === 1)
            ? element.classList.add("odd")
            : element.classList.add("even");
    });

    for (let el of btns) {
        el.addEventListener("click", e => {
            e.preventDefault();
            const sort = e.currentTarget.querySelector("a").getAttribute("href");

            grid.arrange({
                filter: sort
            });

            for (let el of btns) {
                el.classList.remove("on");
            }

            e.currentTarget.classList.add("on")
        });


    }
})

