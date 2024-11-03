const frame = document.querySelector("#js__select");
const items = document.querySelectorAll("#js__select article");
const list = document.querySelector(".list");
const items2 = list.children;
console.log(items2);
console.log(items2[0]);
console.log(items2[1]);
console.log(items2[2]);
console.log(items2[3]);
const item2 = document.querySelector(".item2");
console.log(item2.parentElement);
const li = document.querySelector("li");
console.log("main>>>>", li.closest("main"));
const item3 = document.querySelector(".item3");
console.log(item3.previousElementSibling);
console.log(item3.nextElementSibling);

const box = document.querySelector("#box");
box.style.width = "10%";
box.style.height = "300px";
box.style.backgroundColor = "hotpink";
box.style.border = "none";
box.style.transform = "rotate(10deg)"



for (let item of items) {
    console.log("for of문", item);
}

for (let i = 0; i < items.length; i++) {
    console.log("for문", i, items[i]);
}
const link = document.querySelector("a");

link.addEventListener("click", () => {
    console.log('링크를 클릭했네');

})

box.addEventListener("mouseenter", e => {
    e.currentTarget.style.backgroundColor = "aqua";
});
box.addEventListener("mouseleave", e => {
    e.currentTarget.style.backgroundColor = "hotpink";
});

const list2 = document.querySelectorAll(".list li");

for (let el of list2) {
    el.addEventListener("click", e => {
        e.preventDefault();
        console.log(e.currentTarget.innerText);
    })
}

const btnPlus = document.querySelector(".btnPlus");
const btnMinus = document.querySelector(".btnMinus");

let num = 0; //  제어할 숫자값을 0으로 초기화
btnPlus.addEventListener("click", e => {
    e.preventDefault();
    num++;
    console.log(num);
})
btnMinus.addEventListener("click", e => {
    e.preventDefault();
    num--;
    console.log(num);
})

const myName = "홍 길동";
console.log(`내 이름은 ${myName} 입니다.`);

const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const deg = 45;
let num2 = 0;
btnLeft.addEventListener("click", e => {
    e.preventDefault();
    num--;
    box.style.transform = `rotate(${num * deg}deg`;
})
btnRight.addEventListener("click", e => {
    e.preventDefault();
    num++;
    box.style.transform = `rotate(${num * deg}deg`;
})

const wrap = document.querySelector("#wrap");
const box1 = wrap.querySelector("article");

wrap.addEventListener("click", e => {
    // box1.style.backgroundColor = "hotpink";

    let isOn = wrap.classList.contains("on");
    console.log(isOn);
    // if (isOn) {
    //     wrap.classList.remove("on");
    // } else {
    //     wrap.classList.add("on");
    // }

    //(isOn) ? wrap.classList.remove("on") : wrap.classList.add("on");
    wrap.classList.toggle("on");
});

function plus(num1, num2) {
    console.log(num1 + num2);
}

plus(2, 3);

const btns = document.querySelectorAll(".btns li");
const boxs = document.querySelectorAll(".sameTab article");


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", e => {
        activation(i, btns);
        activation(i, boxs);
    })
}

function activation(index, list) {
    for (let el of list) {
        el.classList.remove("on");
    }

    list[index].classList.add("on");
}

const link_href = link.getAttribute("href");
console.log(link_href);

const new_href = "https://motion2015.github.io/richpub/";
link.setAttribute("href", new_href);


const ver = navigator.userAgent;
console.log(ver);
const isIE = /trident/i.test(ver);
console.log(isIE);
if (isIE) {
    console.log("익스플러로 브라우저로 접속하셨네요. 이 웹 페이지는 익스플로러를 지원하지 않습니다. ");
}