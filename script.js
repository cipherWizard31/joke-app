const url = "https://v2.jokeapi.dev/joke/Any?type=single"
const btn = document.getElementById("btn")
const jokeContainer = document.getElementById("joke")

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
    });
}
btn.addEventListener("click", getJoke)
getJoke();