// vars
var highScore = document.querySelector("#highscores");
var goBack = document.querySelector("#restart");
var clear = document.querySelector("#clearBtn");



clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// getting userInfo and scoreSet
var scoreStorage = localStorage.getItem("scoreStorage");
scoreStorage = JSON.parse(scoreStorage);

// application
if (scoreStorage !== null) {

    for (var i = 0; i < scoreStorage.length; i++) {

        var liNew = document.createElement("li");
        liNew.textContent = scoreStorage[i].userInfo + ": " + scoreStorage[i].scoreSet + "pts"; 
        highScore.appendChild(liNew);
    }
}

goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});