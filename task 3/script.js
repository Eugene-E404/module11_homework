function sumInt(int1) {
	return function (int2) {
		console.log(alert(`Сумма данных чисел, полученная с помощью функции высшего порядка, равна ${int1 + int2}`));
	}
}
let result = sumInt(+prompt('Введите первое число'));

result(+prompt('Введите второе число'));