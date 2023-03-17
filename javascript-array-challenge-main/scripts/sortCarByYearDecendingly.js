function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
   // sorting secara descending menggunakan method .sort()
   result.sort((a, b) => b.year - a.year);
   console.log(result);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
