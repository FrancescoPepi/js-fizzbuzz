// Dichiarazzioni
const Container = document.getElementById("container-main");

// PER OGNI numero controlla:
for (let i = 1; i < 101; i++) {
  // SE sono multipli di 3:
  if (i % 3 == 0 && !(i % 5 == 0)) {
    Container.innerHTML += `<div id="box-${i}" class="d-flex align-items-center justify-content-center">Fizz</div>`;
    console.log("Fizz");
    const box = document.getElementById(`box-${i}`);
    console.log(box);
    box.style.backgroundColor = "#8cb369";
    box.style.border = "1px solid yellow";

    // SE sono multipli di 5:
  } else if (i % 5 == 0 && !(i % 3 == 0)) {
    Container.innerHTML += `<div id="box-${i}" class="d-flex align-items-center justify-content-center">buzz</div>`;
    console.log("Buzz");
    const box = document.getElementById(`box-${i}`);
    console.log(box);
    box.style.backgroundColor = "#f3a259";
    box.style.border = "1px solid yellow";

    // SE sono multipli sia di 3 che di 5:
  } else if (i % 5 == 0 && i % 3 == 0) {
    Container.innerHTML += `<div id="box-${i}" class="d-flex align-items-center justify-content-center">FizzBuzz</div>`;
    console.log("FizzBuzz");
    const box = document.getElementById(`box-${i}`);
    console.log(box);
    box.style.backgroundColor = "#bc4b51";
    box.style.border = "1px solid yellow";

    // Stampare una serie di numeri in console da 1 a 100
  } else {
    Container.innerHTML += `<div id="box-${i}" class="d-flex align-items-center justify-content-center">${i}</div>`;
    console.log(i);
    const box = document.getElementById(`box-${i}`);
    console.log(box);
    box.style.backgroundColor = "#7dd0b6";
    box.style.border = "1px solid yellow";
  }
}
