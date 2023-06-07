// IMC = Poids / Taille x Taille
// IMC = (poids en livres / (hauteur en pouces * hauteur en pouces)) * 703

document.addEventListener("DOMContentLoaded", function () {
  const metric = document.getElementById("metric");
  let firstUnit = document.getElementById("unitone");
  let secondUnit = document.getElementById("unittwo");
  metric.onclick = function () {
    firstUnit.innerText = "Height";
    secondUnit.innerText = "Weight";
  };

  const imperial = document.getElementById("imperial");
  imperial.onclick = function () {
    firstUnit.innerText = "Inches";
    secondUnit.innerText = "Pounds";
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
    } else {
        const parsedHeight = parseFloat(heightInput.value);
        const parsedWeight = parseFloat(weightInput.value);
  
        const heightInMeters = parsedHeight / 100;
  
        let result =
          Math.round((parsedWeight / (heightInMeters * heightInMeters)) * 10) /
          10;
          
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
