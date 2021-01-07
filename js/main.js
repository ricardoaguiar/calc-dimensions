
const colliGrossWeight = document.querySelector('.colli_gw')
const artGrossWeight = document.getElementById('st_gw')
const selectEl = document.querySelector('.select_cl_size')


colliGrossWeight.addEventListener('change', calcStWeight)



function calcStWeight() {
  const clSize = cllSize.selectedOptions[0].value
  const resGW = (colliGrossWeight.value / clSize).toFixed(3);
  artGrossWeight.textContent = resGW + "g";


}

console.log(colliGrossWeight, artGrossWeight);


// const input = document.querySelector('.colli_gw');
// const log = document.getElementById('st_gw');

// input.addEventListener('change', updateValue);

// function updateValue(e) {
//   log.textContent = e.target.value;
// }





// selectEl.addEventListener('change', (event) => {
//   const result = document.querySelector('.displayCllSizes');
//   result.innerText = `The colli size is: ${event.target.value}`;
// });



// stUpdatedGW.addEventListener('change', () => {
//   const colliSize = cllSize.selectedOption[0].value;
//   const carGwVerified = document.getElementById('car_gw_verified')

//   const resSt = (carGwVerified / colliSize);
//   stUpdatedGW.value = resSt.target.value

// })







