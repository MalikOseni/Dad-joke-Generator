let jokeSection = document.getElementById('joke');
let getJoke = document.getElementById('btn');

const apikey = 'YeM11AaJHEjHJmFDuuPrS7m2gd9fB5YBzNUE5xKX';


const options = {
    method: "GET",
    headers: {
        'X-Api-Key': apikey,
    },
};

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

async function dadJokes() {
    try {
        jokeSection.innerText = "Updating...";
        getJoke.disabled = true;
        getJoke.innerText = "Loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();
        getJoke.disabled = false;
        getJoke.innerText = "Tell me a joke";

        jokeSection.innerText = data[0].joke;
        const text = jokeSection.innerText;
        const speech = new SpeechSynthesisUtterance(text);
        speech.pitch = 2;
        window.speechSynthesis.speak(speech);

        // console.log(data[0])
    }
    catch (error) {
        jokeSection.innerText = "An error occurred, try again later";
        getJoke.disabled = false;
        getJoke.innerText="Tell me a joke"
        console.log(error);
    }
};
    
getJoke.addEventListener('click', dadJokes);