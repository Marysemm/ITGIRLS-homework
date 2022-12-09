function searchGif() {
    let searchGif = document.getElementById("searchGif").value;

    fetch("https://api.giphy.com/v1/gifs/search?api_key=uUkfvlgPFoRIRTy3sKQ1yRVNHN7HyjZR&q=cat&limit=5&offset=&rating=g&lang=en" + searchGif)
        .then(response => response.json())
        .then(getGif => {
            let resultGif = '';
            for (let i = 0; i < getGif.data.length; i++) {
                resultGif += `<img class="img" src="${getGif.data[i].images.original.url}">`;
            }
            document.getElementById("result").innerHTML = resultGif;
        })
        .catch(error => console.log(error));
};