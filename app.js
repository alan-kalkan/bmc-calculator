// IMC = Poids / Taille x Taille
// IMC = (poids en livres / (hauteur en pouces * hauteur en pouces)) * 703

document.addEventListener("DOMContentLoaded", function () {
  const metric = document.getElementById("metric");
  const imperial = document.getElementById("imperial");
  let firstUnit = document.getElementById("unitone");
  let secondUnit = document.getElementById("unittwo");
  let switchFirstUnit = document.getElementsByClassName("unitone");
  let switchSecondtUnit = document.getElementsByClassName("unittwo");

  metric.onclick = function () {
    firstUnit.innerText = "Height";
    secondUnit.innerText = "Weight";
    switchFirstUnit[0].innerText = "cm";
    switchSecondtUnit[0].innerText = "kg";
  };

  imperial.onclick = function () {
    firstUnit.innerText = "Inches";
    secondUnit.innerText = "Pounds";
    switchFirstUnit[0].innerText = "in";
    switchSecondtUnit[0].innerText = "lb";
  };

  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");

  const calculateButton = document.getElementById("calculate");
  calculateButton.addEventListener("click", function () {
    if (firstUnit.innerText == "Height" && secondUnit.innerText == "Weight") {
      const parsedHeight = parseFloat(heightInput.value);
      const parsedWeight = parseFloat(weightInput.value);
      const heightInMeters = parsedHeight / 100;

      let result =
        Math.round((parsedWeight / (heightInMeters * heightInMeters)) * 10) /
        10;
      // console.log(result);
      const resultOutput = document.getElementById("result");
      resultOutput.innerText = result;
    } else if (
      firstUnit.innerText == "Inches" &&
      secondUnit.innerText == "Pounds"
    ) {
      const parsedHeight = parseFloat(heightInput.value / 39.37);
      const parsedWeight = parseFloat(weightInput.value / 2.2046);

      let result =
        Math.round((parsedWeight / (parsedHeight * parsedHeight)) * 10) / 10;

      const resultOutput = document.getElementById("result");
      resultOutput.innerText = result;
    }
  });

  //fin du domcontentloaded
});

// const bmcMetricCalc = (weigth, height) => {
//     const resultBmc = Math.round((weigth / (height * height)) * 10) / 10;
//     return resultBmc;}

// const bmcImperialCalc = (pounds, feet, inches) => {
//   const resultBmc = Math.round((weigth / (height * height)) * 10) / 10;
//   return resultBmc;
// }
