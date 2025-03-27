const pad10rel = Math.random() < 0.5;
const vysledekElement = document.querySelector(".vysledek");
const minceElement = document.querySelector(".mince");

if (pad10rel) {
    vysledekElement.textContent = "Padl orel!";
    minceElement.classList.add("mince--orel");
} else {
    vysledekElement.textContent = "Padla pana!";
    minceElement.classList.add("mince--panna");
};



