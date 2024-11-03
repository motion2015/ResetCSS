const circle = document.querySelector("#circle");
const article = circle.querySelectorAll("article");
console.log('ggg');

for (let el of article) {
    el.addEventListener("mouseenter", e => {
        circle.style.animationPlayState = "paused";
    })
}