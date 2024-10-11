function geometricMean() {
    let a = prompt("Введите число a (неотрицательное):");
    let b = prompt("Введите число b (неотрицательное):");

    a = Number(a);
    b = Number(b);

    {let result = Math.sqrt(a * b);
        alert("Среднее геометрическое: " + result);}
}

function firstDigit() {
    let num = prompt("Введите трёхзначное число:");

    num = Number(num);

    {let firstDigit = Math.floor(num / 100);
        alert("Первая цифра: " + firstDigit);}
}