let num = +prompt('Введите число');

function checkPrimeNum(num) {
	if (num > 1000) {
		return 'данные неверны';
	}
	
	for (let i = 2; i < num; i++) {
		if (num % i == 0) return 'число составное';
	}
	
	return  num == 0 || num != num ? 'число не составное и не простое, а возможно и вовсе не число' : 'число простое';

}

alert(num + ' - ' + checkPrimeNum(num));