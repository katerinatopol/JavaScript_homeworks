/* 7. *Сравнить null и 0. Попробуйте объяснить результат. */

console.log(null > 0)   // False
console.log(null < 0)   // False
console.log(null >= 0)  // True
console.log(null <= 0)  // True
//Сравнения преобразуют null в число, рассматривая его как 0, поэтому <= и >= дают истину

console.log(null == 0)  // False
// Для нестрого равенства действует особое правило, null ни к чему не приводится
// и может быть равен только undefined и ничему другому.
