// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let directors = arr.map(movie => movie.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let dramaMovies = arr.filter( movies => movies.genre.includes('Drama'));
  let spielbergDramaMOvies = dramaMovies.filter((movie) => movie.director === 'Steven Spielberg');
  return spielbergDramaMOvies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals


function scoresAverage(arr) {
  let scoredMovies = arr.filter((movie) => movie.score);
  let sumOfScores = scoredMovies.reduce(function(acc, value) { return acc + value.score}, 0);
  let avgScores = sumOfScores / arr.length; //It should be scoredMovies.length but it didnt work.
  if (!arr.length) { return 0;
  } else {
  return Number(avgScores.toFixed(2));
  }
};


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let dramaMovies = arr.filter( movies => movies.genre.includes('Drama'));
  let sumOfScores = dramaMovies.reduce(function(acc, value) { return acc + value.score}, 0);
  let avgDramaScores = sumOfScores / dramaMovies.length;
  if (!dramaMovies.length) { return 0;
  } else {
  return Number(avgDramaScores.toFixed(2));
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  let newArrMovies = [...arr]
  let orderedMovies = newArrMovies.sort(function (a,b) {
           /* if (a.year === b.year) { 
            let sameYearMovies = newArrMovies.sort(function (a,b) {
              if (a.title < b.title) {return -1};
              if (a.title > b.title) {return 1};
              if (a.title === b.title) {return 0};
            }) return sameYearMovies;
          } else {  */
          return a.year - b.year});
          //}
  return orderedMovies;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
   let newList = [...arr]
   let orderedTitles = newList.sort(function (a,b) {
    if (a.title < b.title) {return -1};
    if (a.title > b.title) {return 1};
    if (a.title === b.title) {return 0};
  }); 
  let twentyMovies = orderedTitles.slice(0, 20);
  let twentyTitles = twentyMovies.map((movie) => movie.title);
  return twentyTitles;
  };

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  let newList = [...arr]
  let minutesList = newList.map((movie) => {
    movie.duration.slice(0,1)*60 + movie.duration.slice(3,4);
    //console.log(movie.duration.slice(0,1)*60)
  })
  return minutesList;
}

turnHoursToMinutes(movies)


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
