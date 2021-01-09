
const colliGrossWeight = document.getElementById('colli_gw')

const artGrossWeight = document.getElementById('st_gw')

const cllDropDown = document.getElementById('cllSize')

// const selectEl = document.querySelector('.select_cl_size')


colliGrossWeight.addEventListener('change', calcStWeight)

cllDropDown.addEventListener('change', calcStWeight)



function calcStWeight() {
  const selectColiSize = cllSize.selectedOptions[0].value
  const calculatedWeight = (colliGrossWeight.value / selectColiSize).toFixed(3);
  artGrossWeight.textContent = calculatedWeight + "g";


}

console.log(colliGrossWeight, artGrossWeight);











