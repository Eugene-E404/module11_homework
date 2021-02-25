let array1 = [2, 0, null, NaN, 'dog', 232, 12, 'ABC', 23, undefined, 12, 0];

function getEvenOdd(array) {
	let even = 0, odd = 0, zero = 0;

	for (i = 0; i < array.length; i++) {
		if (array[i] === array[i] && typeof(array[i]) === 'number') {
			if (array[i] == 0) zero += 1;
			else array[i] % 2 === 0 ? even += 1 : odd += 1;
		}
	}

	console.log(array);
	console.log(`Количество нулей в массиве - ${zero}`);
	console.log(`Количество четных чисел в массиве - ${even}`);
	console.log(`Количество нечетных чисел в массиве - ${odd}`);
}

getEvenOdd(array1);