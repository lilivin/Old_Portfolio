let comunicate = document.getElementById("moreAboutSkills");
let html = document.getElementById("html");
let css = document.getElementById("css");
let javaScript = document.getElementById("js");
let react = document.getElementById("react")
let git = document.getElementById("git")
let npm = document.getElementById("npm");

html.addEventListener("click", function() {
    comunicate.textContent = "Dobra znajomość HTML";
})

css.addEventListener("click", function() {
    comunicate.textContent = "Dobra znajomość CSS";
})

javaScript.addEventListener("click", function() {
    comunicate.textContent = "Znajomość JavaScript";
})

react.addEventListener("click", function() {
    comunicate.textContent = "Znajomość React'a";
})

git.addEventListener("click", function() {
    comunicate.textContent = "Początkowa znajomość systemu kontroli wersji";
})

npm.addEventListener("click", function() {
    comunicate.textContent = "Chętnie korzystam z managera plików podczas pracy w React.js";
})

let softCommunicate = document.getElementById("moreAboutSoftSkills");
let task = document.getElementById("task");
let graduate = document.getElementById("graduate");
let cooperating = document.getElementById("cooperating");
let friendly = document.getElementById("friendly")
let kind = document.getElementById("kind")

task.addEventListener("click", function() {
    softCommunicate.textContent = "Jestem osobą zadaniową i zawsze wywiązuje się z powierzonych mi obowiązków."
})

graduate.addEventListener("click", function() {
    softCommunicate.textContent = "Uwielbiam uczyć się nowych rzeczy."
})

cooperating.addEventListener("click", function() {
    softCommunicate.textContent = "Chętnie współpracuje z innymi i dbam o wspólne relacje."
})

friendly.addEventListener("click", function() {
    softCommunicate.textContent = "Jestem osobą kulturalną i nie dążącą do konflików."
})

kind.addEventListener("click", function() {
    softCommunicate.textContent = "Bardzo lubie rozmawiać z ludźmi oraz dzielić się doświadczeniem."
})
