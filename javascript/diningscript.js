
// Dining Options

let diningOptions = {
    breakfast: ["French Toast", "Suasage Links", "Hash Browns"],
    lunch: ["Grilled Chicken", "Green Beans", "White Rice"],
    dinner: ["Steak", "Mashed Potatoes", "Steamed Broccoli"]
}

let breakfast = document.getElementById("breakfast");
let lunch = document.getElementById("lunch");
let dinner = document.getElementById("dinner");
let diningImage = document.getElementById("dining-image");
let image = []
async function getGiphy(input) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=Yx6XGgR82TTVTcjl0oXFs93u7rzvXL27&q=${input}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
    const data = await response.json();
    image.push(data.data[0].images.original.url)
}



async function loadDiningOptions() {
    breakfast.innerHTML = `
        <h5 class="subheader">Breakfast</h5>
            <ul>
                <li>${diningOptions.breakfast[0]}</li>
                <li>${diningOptions.breakfast[1]}</li>
                <li>${diningOptions.breakfast[2]}</li>
            </ul>`
    lunch.innerHTML = `
        <h5 class="subheader">Lunch</h5>
            <ul>
                <li>${diningOptions.lunch[0]}</li>
                <li>${diningOptions.lunch[1]}</li>
                <li>${diningOptions.lunch[2]}</li>
            </ul>`
    dinner.innerHTML = `
        <h5 class="subheader">Dinner</h5>
            <ul>
                <li>${diningOptions.dinner[0]}</li>
                <li>${diningOptions.dinner[1]}</li>
                <li>${diningOptions.dinner[2]}</li>
            </ul>`


    await getGiphy(diningOptions.breakfast[0]);
    diningImage.innerHTML = `
        <img src="${image[0]}"
            class="img-fluid rounded shadow" alt="Dining Hall">`
}