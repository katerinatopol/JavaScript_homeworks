  
/* 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100. */

let num = 2;

while (num < 100) {
    let isSimple = true;
    for(let j = 2; j < num; j++){
        let p = num % j;

        if (p == 0) {
            isSimple = false;
            break;
        }
    }
    if (isSimple) {
       console.log(num);
    }
    num += 1;
}
