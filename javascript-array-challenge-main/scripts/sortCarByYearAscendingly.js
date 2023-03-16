function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // Fungsi komparator untuk sorting secara ascending berdasarkan tahun (year)
  result.sort((a, b) => a.year - b.year);
  // // Lakukan sorting dengan method sort() pada array dan gunakan fungsi komparator compare()
  // result.sort(compare);

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
