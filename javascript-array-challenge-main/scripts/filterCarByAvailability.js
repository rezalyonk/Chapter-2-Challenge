function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  const result = cars.filter(car => car.available);
  console.log (result);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}