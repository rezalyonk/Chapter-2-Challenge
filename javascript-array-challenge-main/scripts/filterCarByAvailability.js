function filterCarByAvailability(cars) {
  console.log(cars);

  const result = [];

  // Lakukan filter pada array cars berdasarkan availability
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].availability) {
      result.push(cars[i]);
    }
  }
  console.log(result);
  console.table(result);
  
  return result;
}
