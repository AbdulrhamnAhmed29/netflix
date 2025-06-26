const form = document.getElementById("form");
const input = document.getElementById("input");
const submit = document.getElementById("sumbit");
const space = document.getElementById("space");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value.indexOf("@") === -1) {
        space.innerHTML = " Invalid input! Your text must contain'@'";
    } else {
        space.innerHTML = "";
        input.value = "";
        window.location.href = "index.html";

    }
})
