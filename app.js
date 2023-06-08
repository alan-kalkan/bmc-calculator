document.addEventListener("DOMContentLoaded", function () {
  const metric = document.getElementById("metric");
  const imperial = document.getElementById("imperial");
  const firstUnit = document.getElementById("unitone");
  const secondUnit = document.getElementById("unittwo");
  const switchFirstUnit = document.getElementsByClassName("unitone");
  const switchSecondtUnit = document.getElementsByClassName("unittwo");
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");

  metric.onclick = function () {
    firstUnit.innerText = "Height";
    secondUnit.innerText = "Weight";
    switchFirstUnit[0].innerText = "cm";
    switchSecondtUnit[0].innerText = "kg";
    heightInput.value = "";
    weightInput.value = "";
  };

  imperial.onclick = function () {
    firstUnit.innerText = "Inches";
    secondUnit.innerText = "Pounds";
    switchFirstUnit[0].innerText = "in";
    switchSecondtUnit[0].innerText = "lb";
    heightInput.value = "";
    weightInput.value = "";
  };

  const calculateButton = document.getElementById("calculate");
  calculateButton.addEventListener("click", function () {
    if (
      firstUnit.innerText == "Height" &&
      secondUnit.innerText == "Weight" &&
      !isNaN(heightInput.value) &&
      !isNaN(weightInput.value)
    ) {
      const parsedHeight = parseFloat(heightInput.value);
      const parsedWeight = parseFloat(weightInput.value);
      const heightInMeters = parsedHeight / 100;

      let result =
        Math.round((parsedWeight / (heightInMeters * heightInMeters)) * 10) /
        10;

      const resultOutput = document.getElementById("result");
      resultOutput.innerText = result;
    } else if (
      firstUnit.innerText == "Inches" &&
      secondUnit.innerText == "Pounds" &&
      !isNaN(heightInput.value) &&
      !isNaN(weightInput.value)
    ) {
      const parsedHeight = parseFloat(heightInput.value / 39.37);
      const parsedWeight = parseFloat(weightInput.value / 2.2046);

      let result =
        Math.round((parsedWeight / (parsedHeight * parsedHeight)) * 10) / 10;

      const resultOutput = document.getElementById("result");
      resultOutput.innerText = result;
    }
  });
});
