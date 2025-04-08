
window.onload = function () {
    let cosmos = document.querySelectorAll(".cosmos");
    let total = cosmos.length;
    let container = document.querySelector(".container");

    for (let i = 0; i < total; i++) {
        let angle = (360 / total) * i;
        let transform = `rotate(${angle}deg) translate(55vh)`;

        cosmos[i].style.transform = transform;
        let cosmicItems = cosmos[i].querySelectorAll(".cosmic-item");

        for (let j = 0; j < cosmicItems.length; j++) {
            cosmicItems[j].style.animationDelay = `${j * 0.5}s`;
        }
    }
}






















