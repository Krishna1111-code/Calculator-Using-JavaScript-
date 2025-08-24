let display = document.querySelector("#display") // Acess
let buttons = document.querySelectorAll(".btn") // Select All button and add it to NodeList
for (let button of buttons) {
    button.addEventListener("click", function () {
        let p = document.createElement("p");
        p.innerText = button.innerText;
        p.style.display = "inline"
        display.appendChild(p);
    });
}


result.addEventListener("click", function () {
    let allPs = document.querySelectorAll("#display p"); // Acess : string like "1" + "2"
    let expression = ""; // String - Empty

    for (let i = 0; i < allPs.length; i++) {
        expression = expression + allPs[i].innerText;
    }

    let finalResult = eval(expression); // Change ! 1+2 = 3
    let p = document.createElement("p");
    p.innerText = " = " + finalResult;
    p.style.display = "inline"
    p.style.textShadow = "1px 1px 15px #00ffcc"
    display.appendChild(p);
});


// clear
let clear_button = document.querySelector("#clear")
clear_button.addEventListener("click", function () {
    display.innerText = ""
})
