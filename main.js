const checkWeight = document.getElementById("checkGW");

console.log(checkWeight);

checkDiff.addEventListener("click", => console.log(calcPercentage())

console.log(checkDiff);

// console.log(calcPercentage());

// function calcWeight(result) {
//   const cartonGW = document.getElementById("carton_gw").value;
//   const inspectionGW = document.getElementById("inspection_gw").value;
//   const verifiedGW = document.getElementById("verified_gw").value;

//   let labelDiff = document.getElementById("label_diff");
//   let sapDiff = document.getElementById("sap_diff");

//   let upperLimit = document.getElementById("upper_limit");
//   let lowerLimit = document.getElementById("lower_limit");

//   if (cartonGW >= verifiedGW || cartonGW <= verifiedGW) {
//     result = (verifiedGW - cartonGW) / verifiedGW;
//   }
//   return;
// }
// // ((input - min) * 100) / (max - min);

// console.log(calcWeight());

// (function () {
//   "#carton_gw".on("input", function () {
//     calculate();
//   });
//   "#inspection_gw".on("input", function () {
//     calculate();
//   });

//   function calculate() {
//     var pPos = parseInt($("#carton_gw").val());
//     var pEarned = parseInt($("#inspection_gw").val());
//     var perc = "";
//     if (isNaN(pPos) || isNaN(pEarned)) {
//       perc = " ";
//     } else {
//       perc = ((pEarned / pPos) * 100).toFixed(3);
//     }

//     "#label_diff".val(perc);
//   }
// });

/**
 * Calculates in percent, the change between 2 numbers.
 * e.g from 1000 to 500 = 50%
 *
 * @param oldNumber The initial value
 * @param newNumber The value that changed
 */

const cartonGW = document.getElementById("carton_gw").value;
const inspectionGW = document.getElementById("inspection_gw").value;
const verifiedGW = document.getElementById("verified_gw").value;

function calcPercentage(cartonGW, inspectionGW, verifiedGW) {
  var decreaseValue = cartonGW - verifiedGW;

  return (decreaseValue / cartonGW) * 100;
}

// console.log(calcPercentage());
