function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (const car of cars) {
    // Jika mobil tersedia, tambahkan ke dalam hasil
    if (car.available) {
      result.push(car);
    }
  }
  console.log (result);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}