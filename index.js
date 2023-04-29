
const newsDiv = document.getElementById("newsApp");
let articles = [];

window.onload = async () => {
  const url = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=86654c9198ed4a50bef3ef91d8b1741d"
  );
  console.log(url);
  const jsonData = await url.json();
  console.log(jsonData);
  articles = jsonData.articles;
  articles.map((item, index) => {
    console.log(item);
    const newsEl = document.createElement("div");
    newsEl.innerHTML= `
    <div class="row">
    <div class="card>
    <div class="card-body">
    <img src="${item.urlToImage?item.urlToImage:"https://placehold.co/250x140"}" class="card-img-top" alt="...">
        <h5 class="card-title">${item.title.slice(0,50)}</h5>
        <p class="card-text">${item.description?item.description.slice(0,50):"Lorem ipsum dolor sit amet. Eos deleniti nihil et "}</p>
        <button class="btn-primary"><a href="${item.url}" target="_blank">Read More</a></button>
      </div>
      </div>
    </div>
    `;
    newsDiv.appendChild(newsEl);
  });
}
