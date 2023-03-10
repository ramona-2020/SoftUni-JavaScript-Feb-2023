// console.log(
//     ['5', '8', '1'].map((a) => Number(a) + 5)
// )

const result = [14, '50', 3, 16]
        .map((a) => Number(a))
        .filter((a) => a > 3)
        .every((a) => a % 2 === 1)

// Destruction only third element from the array
const vehicles = ['mustang', 'f-150', 'expedition'];
const [,,suv] = vehicles;
console.log(suv);

// Spread operator
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021,
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
console.log(myUpdatedVehicle);