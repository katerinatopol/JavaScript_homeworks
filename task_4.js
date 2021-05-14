/* 4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке,
только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/

for (let i = 1; i <= 20; console.log('*'.repeat(i++))){}

for (let i = 1; i <= 20; i++){
    console.log('*'.repeat(i));
}
