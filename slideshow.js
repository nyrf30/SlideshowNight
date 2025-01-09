let matrix = [["Ben", "Andrew", "Evan", "Colton", "Richard", "Jesse"],
            ["Ben", "Andrew", "Evan", "Jesse", "Richard", "Colton"],
            ["Ben", "Andrew", "Evan", "Richard", "Colton", "Jesse"],                    
            ["Ben", "Andrew", "Jesse", "Colton", "Richard", "Evan"],                    
            ["Ben", "Andrew", "Jesse", "Richard", "Colton", "Evan"],
            ["Ben", "Andrew", "Jesse", "Richard", "Evan", "Colton"],                    
            ["Ben", "Andrew", "Richard", "Colton", "Evan", "Jesse"],                    
            ["Ben", "Andrew", "Richard", "Jesse", "Colton", "Evan"],
            ["Ben", "Andrew", "Richard", "Jesse", "Evan", "Colton"],                    
            ["Ben", "Colton", "Andrew", "Jesse", "Richard", "Evan"],                    
            ["Ben", "Colton", "Andrew", "Richard", "Evan", "Jesse"],
            ["Ben", "Colton", "Evan", "Andrew", "Richard", "Jesse"],                    
            ["Ben", "Colton", "Evan", "Jesse", "Richard", "Andrew"],                    
            ["Ben", "Colton", "Evan", "Richard", "Andrew", "Jesse"],
            ["Ben", "Colton", "Jesse", "Andrew", "Richard", "Evan"],                    
            ["Ben", "Colton", "Jesse", "Richard", "Andrew", "Evan"],                    
            ["Ben", "Colton", "Jesse", "Richard", "Evan", "Andrew"],
            ["Ben", "Colton", "Richard", "Andrew", "Evan", "Jesse"],                    
            ["Ben", "Colton", "Richard", "Jesse", "Andrew", "Evan"],                    
            ["Ben", "Colton", "Richard", "Jesse", "Evan", "Andrew"],
            ["Ben", "Jesse", "Andrew", "Colton", "Richard", "Evan"],                    
            ["Ben", "Jesse", "Andrew", "Richard", "Colton", "Evan"],                    
            ["Ben", "Jesse", "Andrew", "Richard", "Evan", "Colton"],
            ["Ben", "Jesse", "Evan", "Andrew", "Richard", "Colton"],                    
            ["Ben", "Jesse", "Evan", "Colton", "Richard", "Andrew"],                    
            ["Ben", "Jesse", "Evan", "Richard", "Andrew", "Colton"],
            ["Ben", "Jesse", "Evan", "Richard", "Colton", "Andrew"],                    
            ["Ben", "Jesse", "Richard", "Andrew", "Colton", "Evan"],                    
            ["Ben", "Jesse", "Richard", "Andrew", "Evan", "Colton"],
            ["Ben", "Jesse", "Richard", "Colton", "Andrew", "Evan"],                    
            ["Ben", "Jesse", "Richard", "Colton", "Evan", "Andrew"],                    
            ["Colton", "Andrew", "Ben", "Jesse", "Richard", "Evan"],
            ["Colton", "Andrew", "Ben", "Richard", "Evan", "Jesse"],                    
            ["Colton", "Andrew", "Evan", "Richard", "Ben", "Jesse"],                    
            ["Colton", "Andrew", "Jesse", "Richard", "Ben", "Evan"],
            ["Colton", "Andrew", "Richard", "Jesse", "Ben", "Evan"],                    
            ["Colton", "Jesse", "Andrew", "Richard", "Ben", "Evan"],                    
            ["Colton", "Jesse", "Ben", "Andrew", "Richard", "Evan"],
            ["Colton", "Jesse", "Ben", "Richard", "Andrew", "Evan"],                    
            ["Colton", "Jesse", "Ben", "Richard", "Evan", "Andrew"],                    
            ["Colton", "Jesse", "Evan", "Richard", "Ben", "Andrew"],
            ["Colton", "Jesse", "Richard", "Andrew", "Ben", "Evan"],                    
            ["Evan", "Andrew", "Ben", "Colton", "Richard", "Jesse"],                    
            ["Evan", "Andrew", "Ben", "Jesse", "Richard", "Colton"],
            ["Evan", "Andrew", "Ben", "Richard", "Colton", "Jesse"],                    
            ["Evan", "Andrew", "Jesse", "Richard", "Ben", "Colton"],                    
            ["Evan", "Andrew", "Richard", "Colton", "Ben", "Jesse"],
            ["Evan", "Andrew", "Richard", "Jesse", "Ben", "Colton"],                    
            ["Evan", "Colton", "Andrew", "Richard", "Ben", "Jesse"],                    
            ["Evan", "Colton", "Ben", "Andrew", "Richard", "Jesse"],
            ["Evan", "Colton", "Ben", "Jesse", "Richard", "Andrew"],                    
            ["Evan", "Colton", "Ben", "Richard", "Andrew", "Jesse"],                    
            ["Evan", "Colton", "Jesse", "Richard", "Ben", "Andrew"],
            ["Evan", "Colton", "Richard", "Andrew", "Ben", "Jesse"],                    
            ["Evan", "Colton", "Richard", "Jesse", "Ben", "Andrew"],                    
            ["Evan", "Jesse", "Andrew", "Richard", "Ben", "Colton"],
            ["Evan", "Jesse", "Ben", "Andrew", "Richard", "Colton"],                    
            ["Evan", "Jesse", "Ben", "Colton", "Richard", "Andrew"],                    
            ["Evan", "Jesse", "Ben", "Richard", "Andrew", "Colton"],
            ["Evan", "Jesse", "Ben", "Richard", "Colton", "Andrew"],                    
            ["Evan", "Jesse", "Richard", "Andrew", "Ben", "Colton"],
            ["Evan", "Jesse", "Richard", "Colton", "Ben", "Andrew"],                    
            ["Jesse", "Andrew", "Ben", "Colton", "Richard", "Evan"],                    
            ["Jesse", "Andrew", "Ben", "Richard", "Colton", "Evan"],
            ["Jesse", "Andrew", "Ben", "Richard", "Evan", "Colton"],                    
            ["Jesse", "Andrew", "Evan", "Richard", "Ben", "Colton"],                    
            ["Jesse", "Andrew", "Richard", "Colton", "Ben", "Evan"],
            ["Jesse", "Colton", "Andrew", "Richard", "Ben", "Evan"],                    
            ["Jesse", "Colton", "Ben", "Andrew", "Richard", "Evan"],                    
            ["Jesse", "Colton", "Ben", "Richard", "Andrew", "Evan"],
            ["Jesse", "Colton", "Ben", "Richard", "Evan", "Andrew"],                    
            ["Jesse", "Colton", "Evan", "Richard", "Ben", "Andrew"],
            ["Jesse", "Colton", "Richard", "Andrew", "Ben", "Evan"],                    
            ["Richard", "Andrew", "Ben", "Colton", "Evan", "Jesse"],                    
            ["Richard", "Andrew", "Ben", "Jesse", "Colton", "Evan"],
            ["Richard", "Andrew", "Ben", "Jesse", "Evan", "Colton"],                    
            ["Richard", "Andrew", "Evan", "Colton", "Ben", "Jesse"],                    
            ["Richard", "Andrew", "Evan", "Jesse", "Ben", "Colton"],
            ["Richard", "Andrew", "Jesse", "Colton", "Ben", "Evan"],                    
            ["Richard", "Colton", "Andrew", "Jesse", "Ben", "Evan"],                    
            ["Richard", "Colton", "Ben", "Andrew", "Evan", "Jesse"],
            ["Richard", "Colton", "Ben", "Jesse", "Andrew", "Evan"],                    
            ["Richard", "Colton", "Ben", "Jesse", "Evan", "Andrew"],
            ["Richard", "Colton", "Evan", "Andrew", "Ben", "Jesse"],
            ["Richard", "Colton", "Evan", "Jesse", "Ben", "Andrew"],                    
            ["Richard", "Colton", "Jesse", "Andrew", "Ben", "Evan"],                    
            ["Richard", "Jesse", "Andrew", "Colton", "Ben", "Evan"],
            ["Richard", "Jesse", "Ben", "Andrew", "Colton", "Evan"],                    
            ["Richard", "Jesse", "Ben", "Andrew", "Evan", "Colton"],                    
            ["Richard", "Jesse", "Ben", "Colton", "Andrew", "Evan"],
            ["Richard", "Jesse", "Ben", "Colton", "Evan", "Andrew"],                    
            ["Richard", "Jesse", "Evan", "Andrew", "Ben", "Colton"],                    
            ["Richard", "Jesse", "Evan", "Colton", "Ben", "Andrew"]];
const index = 8472588 % 93;
var andrew = matrix[index][0];
var ben = matrix[index][1];
var colton = matrix[index][2];
var evan = matrix[index][3];
var jesse = matrix[index][4];
var richard = matrix[index][5];
const names = ["Andrew", "Ben", "Colton", "Evan", "Jesse", "Richard"];
const assignments = [andrew, ben, colton, evan, jesse, richard];
const images = ["images/andrew.png", "images/ben.png", "images/colton.png", "images/evan.png", "images/jesse.png", "images/richard.png"];
const presenters = ["", "", "", "", "", ""];
for (let i = 0; i < assignments.length; i++) {
    for (let j = 0; j < names.length; j++) {
        if (names[j]== assignments[i]) {
            presenters[i] = images[j];
            break;
        }
    }
}
function test() {
    console.log("Hello world!");
    const form = document.getElementById("form");
    const pass = form.elements["name"];
    const password = pass.value;
    form.addEventListener("submit", function (e) {
        e.preventDefault();
    })
    document.getElementById("assign").innerHTML = "";
    document.getElementById("fig1").style.display = "block";
    document.getElementById("fig2").style.display = "block";
    if (password == "nhtmtiom") {
        document.getElementById("crecaption").innerHTML = "CREATOR: Andrew";
        document.getElementById("precaption").innerHTML = "PRESENTER: " + andrew;
        document.getElementById("creator").src = images[0];
        document.getElementById("presenter").src = presenters[0];

    }
    else if (password == "Benvejjie") {
        document.getElementById("crecaption").innerHTML = "CREATOR: Ben";
        document.getElementById("precaption").innerHTML = "PRESENTER: " + ben;
        document.getElementById("creator").src = images[1];
        document.getElementById("presenter").src = presenters[1];
    }
    else if (password == "Biggest Man") {
        document.getElementById("crecaption").innerHTML = "CREATOR: Colton";
        document.getElementById("precaption").innerHTML = "PRESENTER: " + colton;
        document.getElementById("creator").src = images[2];
        document.getElementById("presenter").src = presenters[2];
    }
    else if (password == "Evanschmevan") {
        document.getElementById("crecaption").innerHTML = "CREATOR: Evan";
        document.getElementById("precaption").innerHTML = "PRESENTER: " + evan;
        document.getElementById("creator").src = images[3];
        document.getElementById("presenter").src = presenters[3];
    }
    else if (password == "D00kien!mrod") {
        document.getElementById("crecaption").innerHTML = "CREATOR: Jesse";
        document.getElementById("precaption").innerHTML = "PRESENTER: " + jesse;
        document.getElementById("creator").src = images[4];
        document.getElementById("presenter").src = presenters[4];
    }
    else if (password == "Rickyricky") {
        document.getElementById("crecaption").innerHTML = "CREATOR: Richard";
        document.getElementById("precaption").innerHTML = "PRESENTER: " + richard;
        document.getElementById("creator").src = images[5];
        document.getElementById("presenter").src = presenters[5];
    }
    else {
        document.getElementById("assign").innerHTML = "Seriously? I know that you know this isn't the code I fucking sent you. You probably think you're soooo funny, don't you dickface? Either that or you're that fucking dense to mistype the simple ass password I gave you. I know this shit is you Ben.";
        document.getElementById("fig1").style.display = "none";
        document.getElementById("fig2").style.display = "none";
    }
}