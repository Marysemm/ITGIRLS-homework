fetch('https://api.nasa.gov/planetary/apod?api_key=pk62loFt5Qk1DzcLoFlmmXAiVPq3HbgofVpTc5gY').then(response => response.json())
    .then(data => renderHtml(data))
    .catch(error => console.log(error));


function renderHtml(data) {
    document.getElementById('wrapper').innerHTML = `<div>${data.title}</div>
                        <div><img src="${data.hdurl}"</div>
                        <div>${data.date}</div>
                        <div>${data.explanation}</div>`
}