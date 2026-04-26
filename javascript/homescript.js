

let dailyVerse = document.getElementById("daily-verse");
let verse = {}

async function getVerse() {
    let rawData = await fetch("https://bible-api.com/data/web/random");
    let randData = await rawData.json();
    console.log(randData);
    
    let verse = {book: randData.random_verse.book, chapter: randData.random_verse.chapter, verse: randData.random_verse.verse, text: randData.random_verse.text}
    
    dailyVerse.textContent = `"${verse.text}" || ${verse.book} ${verse.chapter}:${verse.verse}`
}