const grades = [
    { mark: Math.round(Math.random() * 100) },
    { mark: Math.round(Math.random() * 100) },
    { mark: Math.round(Math.random() * 100) },
    { mark: Math.round(Math.random() * 100) },
    { mark: Math.round(Math.random() * 100) },
    { mark: Math.round(Math.random() * 100) },
    { mark: Math.round(Math.random() * 100) },
    { mark: Math.round(Math.random() * 100) },
    { mark: Math.round(Math.random() * 100) },
    { mark: Math.round(Math.random() * 100) },
    { mark: Math.round(Math.random() * 100) },
    { mark: Math.round(Math.random() * 100) }
]
console.log(grades);

//Средний балл
const scores = grades.map(function (grade) {
    return grade.mark;
});
console.log(scores);
let calculateAverage = scores.reduce((a, b) => a + b, 0);
let result = calculateAverage / grades.length;
console.log("Среднее значение баллов: " + (result.toFixed(2)));

//Максимальный балл

console.log(Math.max.apply(null, scores));

//Минимальный балл 

console.log(Math.min.apply(null, scores));

//Cтуденты, получившие положительный балл

let max = scores.filter(function (a) {
    return a >= 60;
});
console.log(max);

//Cтуденты, получившие отрицательный балл

let min = scores.filter(function (b) {
    return b < 60;
});
console.log(min);

//Преобразование баллов

let transformation = grades.map(function (c) {
    if (c >= 80) {
        return "A";
    }
    else if ((c >= 60) && (c < 80)) {
        return "B";
    }
    else if ((c >= 40) && (c < 60)) {
        return "C";
    }
    else if ((c >= 20) && (sc < 40)) {
        return "D";
    }
    else {
        return "E";
    }
})

console.log(transformation);






