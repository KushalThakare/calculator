//design

let buttons = document.querySelectorAll(".butt, .butt0");

buttons.forEach(button => {
    button.addEventListener("mouseenter", event => {
        event.target.style.backgroundColor = "white";
        event.target.style.color = "rgb(17, 35, 70)";
    })
    button.addEventListener("mouseleave", event => {
        event.target.style.backgroundColor = "rgb(17, 35, 70)";
        event.target.style.color = "white";
    })
});

//working

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".butt0");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let multi = document.querySelector(".multi");
let divide = document.querySelector(".divide");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let per = document.querySelector(".per");

let total = 0;
let no1 = 0;
let currentOp = null;
document.querySelector(".display").textContent = no1;


one.addEventListener("click", function () {
    setNo(1);
})

two.addEventListener("click", function () {
    setNo(2);
})

three.addEventListener("click", function () {
    setNo(3);
})

four.addEventListener("click", function () {
    setNo(4);
})

five.addEventListener("click", function () {
    setNo(5);
})

six.addEventListener("click", function () {
    setNo(6);
})

seven.addEventListener("click", function () {
    setNo(7);
})

eight.addEventListener("click", function () {
    setNo(8);
})

nine.addEventListener("click", function () {
    setNo(9);
})

zero.addEventListener("click", function () {
    setNo(0);
})

plus.addEventListener("click", () => {
    setPlus(no1);
})

minus.addEventListener("click", () => {
    setMinus(no1);
})

equal.addEventListener("click", () => {
    setEqual(no1);
})

multi.addEventListener("click", () => {
    setMulti(no1);
})

divide.addEventListener("click", () => {
    setDivide(no1);
})

clear.addEventListener("click", ()=>{
    setClear();
})
per.addEventListener("click", ()=>{
    setPercent(no1);
})



function setNo(value) {
    result = no1 * 10 + value;
    no1 = result;
    document.querySelector(".display").textContent = no1;
}

function setPlus(value) {
    if (total == 0){
        total = value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = '+'
    }
    else if(currentOp == '+'){
        total += value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = '+';
    }
    else if(currentOp == '-'){
        total -= value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = '+';
    }
    else if(currentOp == '*'){
        total *= value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = '*';
    }
    else if(currentOp == '/'){
        total /= value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = '+';
    }
}

function setMinus(value) {
    if (total == 0){
        total = value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = '-'
    }
    else if(currentOp == '+'){
        total += value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = '-';
    }
    else if(currentOp == '-'){
        total -= value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = '-';
    }
    else if(currentOp == '*'){
        total *= value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = '-';
    }
    else if(currentOp == '/'){
        total /= value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = '-';
    }
}

function setMulti(value) {
    if (total == 0){
        total = value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = '*'
    }
    else if(currentOp == '+'){
        total += value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = '*';
    }
    else if(currentOp == '-'){
        total -= value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = '*';
    }
    else if(currentOp == '*'){
        total *= value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = '*';
    }
    else if(currentOp == '/'){
        total /= value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = '*';
    }
}

function setDivide(value) {
    if (total == 0){
        total = value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = '/'
    }
    else if(currentOp == '+'){
        total += value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = '/';
    }
    else if(currentOp == '-'){
        total -= value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = '/';
    }
    else if(currentOp == '*'){
        total *= value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = '/';
    }
    else if(currentOp == '/'){
        total /= value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = '/';
    }
}

function setEqual(value) {
    if(currentOp == '+'){
        total += value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = null;
    }
    else if(currentOp == '-'){
        total -= value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = null;
    }
    else if(currentOp == '*'){
        total *= value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = null;
    }
    else if(currentOp == '/'){
        total /= value;
        no1 = 0;
        document.querySelector(".display").textContent = total;
        currentOp = null;
    }
}

function setPercent(value){
    value /= 100;
    no1 = value
    document.querySelector(".display").textContent = no1;
}

function setClear() {
    no1 = 0;
    currentOp = null;
    total =0;
    document.querySelector(".display").textContent = total;
}
