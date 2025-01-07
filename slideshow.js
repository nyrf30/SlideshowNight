function test() {
    console.log("Hello world!");
    const form = document.getElementById("form");
    const pass = form.elements["name"];
    const password = pass.value;
    if (password == "Andrew") {
        document.getElementById("demo").innerHTML = "Love you Andrew <3";
    }
    else {
        document.getElementById("demo").innerHTML = "JUST KIDDING FUCK YOUUUU";
    }
    form.addEventListener("submit", function (e) {
        e.preventDefault();
    })
}