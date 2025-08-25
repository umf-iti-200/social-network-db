
const favoriteBook = document.getElementById("favorite-book");
const favoriteMovie = document.getElementById("favorite-movie");

async function getData(){

    const url = "http://localhost/api/about-me";
 
    const request = await fetch(url);
 
    const response = await request.json();
 
    favoriteBook.innerText = response.favorite.book;
    favoriteMovie.innerText = response.favorite.movie;
 }
 
 getData();