function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Lakukan perulangan untuk setiap mobil pada input
  for (const car of cars) {
    // Jika mobil tersedia, tambahkan ke dalam hasil
    if (car.available) {
      result.push(car);
    }
  }
  console.log(result);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
