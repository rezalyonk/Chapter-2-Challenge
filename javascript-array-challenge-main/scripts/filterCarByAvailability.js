function filterCarByAvailability(cars) {
  // Definisi tipe cars
  // type Car = {
  //   id: string;
  //   plate: string;
  //   transmission: string;
  //   manufacture: string;
  //   model: string;
  //   available: boolean;
  //   type: string;
  //   year: number;
  //   options: string[];
  //   specs: string[];
  // };
  
  // type Cars = Array<Car>;


  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (const car of cars) {
    if (car.available) {
      result.push(car);
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
