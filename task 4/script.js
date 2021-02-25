let counter = 0;

function getIntervalInt(int1, int2) {
	if (int1 + counter <= int2) {
		console.log(int1 + counter);
		counter++;
	} else {
		clearInterval(timerId);
	}
}

let timerId = setInterval(getIntervalInt, 1000, +prompt('Введите первое число'), +prompt('Введите второе число'));
