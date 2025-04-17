const image = document.querySelector("img");
const boutton = document.querySelector("#new");
const search = document.querySelector("#search");
const searchT = document.querySelector("input");

search.addEventListener("click", searchGif);
boutton.addEventListener("click", newFetch);

fetch('https://api.giphy.com/v1/gifs/translate?api_key=jCUtpiCEEnK3GjtPG3MjC9bh4aRM4v4W&s=dab', {
    mode: 'cors',
    cache: 'no-cache'
}).then(response => response.json()).then(response => image.src = response.data.images.original.url);

function newFetch() {
    image.src = "";
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=jCUtpiCEEnK3GjtPG3MjC9bh4aRM4v4W&s=dab', {
    mode: 'cors'
    }).then(response => response.json()).then(response => image.src = response.data.images.original.url).catch(err => console.log(err));
}

function searchGif() {
    const what = searchT.value;
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=jCUtpiCEEnK3GjtPG3MjC9bh4aRM4v4W&s=${what}`, {
    mode: 'cors'
    }).then(response => response.json()).then(response => image.src = response.data.images.original.url).catch(err => console.log(err));
}
