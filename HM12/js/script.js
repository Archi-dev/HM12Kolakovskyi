






// Запрашиваем число у пользователя

// Нужно найти минимальный делитель переданного числа.

// Для этого достаточно последовательно проверять делимость, начиная с двойки.Если делитель не найден, значит число простое, и делителем является само число.

// Если переданное число меньше единицы, то вывести в консоль должна вернуть NaN.иначе вывести наименьший делитель числа



let num1 = Number(prompt("Введите число"));
let del = num1;

if (num1 > 1) {

    for (let i = 2; i < num1; i++) {

        if (num1 % i === 0) {
            // console.log(i);
            del = i;
            break;

        } else {
            del = num1;
        }
    }
    console.log(`${del}`);
} else {

    del *= 'Число меньше 1';
    console.log(del);

}

