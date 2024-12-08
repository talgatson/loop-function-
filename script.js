//1th task
const numbers = [52, 31, 9, 85, 31, 45];
let sum = 0;
const numbersLength = numbers.length;
let i =0;
while(i<numbersLength) {
    sum+=numbers[i];
    i++;
}
console.log(`Сумма чисел: ${sum}`);
//2nd task
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
    { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
    { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
    { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
  ];
  for (let i=0; i<books.length; i++) {
    console.log(`Название: ${books[i].title}, Автор: ${books[i].author}, Количество страниц: ${books[i].numberOfPages}, Жанр; ${books[i].genre}`);
    console.log("Награды:");
    for (let j = 0; j<books[i].awards.length; j++) {
        console.log(`-${books[i].awards[j]} \n`);
    }
    console.log("----------\n");
  }
//3rd task
let sumOfArray = 0;
function calculateAveragePages(array) {
    for (let k = 0; k<books.length;k++) {
        sumOfArray+=books[k].numberOfPages;
    }
    return sumOfArray;
}
console.log(calculateAveragePages(books));
//4th task
const str = prompt("Text here!");
const num = prompt("Number here!");

function repeatString (str, num) {
    let result = "";
    for (let z=0; z<num; z++) {
        result+=str;
    }
    return result;
}
console.log(repeatString(str, num));
//5th task
array = [12,13,14,15,16];

function calculateAverage(array) {
    let q=0;
    for(let p=0; p<array.length; p++) {
        q+=array[p];
    }
    return q/array.length;
    
}
console.log(calculateAverage(array));
//6th task
countArray = [1, 2, 3, 4, 5, 6];
function countEvenNumbers (array) {
    let newArray = [];
    for (let num = 0; num < array.length; num++) {
        if (array[num] % 2 === 0) {
            newArray.push(array[num]);
        }
    }
    return newArray;
}
const evenNumbers = countEvenNumbers(countArray);
console.log(evenNumbers);
