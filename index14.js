const grades = [
    { name: 'Nastya', mark: Math.round(Math.random() * 100) },
    { name: 'Ann', mark: Math.round(Math.random() * 100) },
    { name: 'Alex', mark: Math.round(Math.random() * 100) },
    { name: 'Edward', mark: Math.round(Math.random() * 100) },
    { name: 'Kristina', mark: Math.round(Math.random() * 100) },
    { name: 'Jonny', mark: Math.round(Math.random() * 100) },
    { name: 'Bob', mark: Math.round(Math.random() * 100) },
    { name: 'Charly', mark: Math.round(Math.random() * 100) },
    { name: 'Victor', mark: Math.round(Math.random() * 100) },
    { name: 'Julia', mark: Math.round(Math.random() * 100) },
    { name: 'Molly', mark: Math.round(Math.random() * 100) },
    { name: 'David', mark: Math.round(Math.random() * 100) }
]
console.log(grades);

const students = document.querySelector('.ol');
students.innerHTML = "";
grades.forEach((item) => {
    students.innerHTML += `
        <li class="list"> ${item.name}   -   ${item.mark} points 
        </li> `;
});

//Средний балл
const scores = grades.map(function (grade) {
    return grade.mark;
});
console.log(scores);
const averageScore = document.querySelector('.average');
let calculateAverage = scores.reduce((a, b) => a + b, 0);
let result = calculateAverage / grades.length;
console.log("Среднее значение баллов: " + (result.toFixed(2)));
averageScore.innerHTML = "Среднее значение баллов студентов: " + result.toFixed(2) + ' points';

//Максимальный балл
const maximumScore = document.querySelector('.max');
let calculateMax = Math.max.apply(null, scores);
maximumScore.innerHTML = "Максимальный балл: " + calculateMax + ' points';
console.log(Math.max.apply(null, scores));

//Минимальный балл 
const minimumScore = document.querySelector('.min');
let calculateMin = Math.min.apply(null, scores);
minimumScore.innerHTML = "Минимальный балл: " + calculateMin + ' points';

console.log(Math.min.apply(null, scores));

//Cтуденты, получившие положительный балл

const positiveScore = document.querySelector('.positive');
let max = grades.filter(function (a) {
    if (a.mark >= 60) {
        return a.name;
    };
});
positiveScore.innerHTML = "Студенты, получившие положительный балл (>=60): ";
max.forEach((pos) => {
    positiveScore.innerHTML += `
        <li class="point"> ${pos.name}   -   ${pos.mark} points
        </li>`;

});
console.log(max);


//Cтуденты, получившие отрицательный балл
const negativeScore = document.querySelector('.negative');
let min = grades.filter(function (b) {
    if (b.mark < 60) {
        return b.name;
    }
});
negativeScore.innerHTML = "Студенты, получившие отрицательный балл (<60): ";
min.forEach((neg) => {
    negativeScore.innerHTML += `
        <li class="ball"> ${neg.name}   -   ${neg.mark} points
        </li>`;

});
console.log(min);

//Преобразование баллов
const transformationScore = document.querySelector('.transformaition');
transformationScore.innerHTML = "";

let transformation = grades.map(function (c) {
    if (c.mark >= 80) {
        return c.name + '- ' + "A";
    }
    else if ((c.mark >= 60) && (c.mark < 80)) {
        return c.name + '- ' + "B";
    }
    else if ((c.mark >= 40) && (c.mark < 60)) {
        return c.name + '- ' + "C";
    }
    else if ((c.mark >= 20) && (c.mark < 40)) {
        return c.name + '- ' + "D";
    }
    else {
        return c.name + '- ' + "E";
    }
})

transformationScore.innerHTML = "Преобразование баллов: ";
transformation.forEach((letter) => {
    transformationScore.innerHTML += `
        <li class="score"> ${letter}   
        </li>`;
});







console.log(letter);






