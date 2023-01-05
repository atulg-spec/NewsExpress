const xhr = new XMLHttpRequest();

let source = 'bbc-news';
let apiKey = '0c4a1a7a7dba4650a2056b814b6fe9a1'

xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0c4a1a7a7dba4650a2056b814b6fe9a1`,true)

let allnews = "";
let thisnews = "";
let spinner = document.getElementById("spinner")

xhr.onprogress = function (){
  console.log("searching")
  console.log(spinner)
}
xhr.onload = function (){
  spinner.classList.toggle("display")
    if(this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles)
        articles.forEach(element => {
            thisnews = `<div class="card d-inline-block mx-5 my-3" style="width: 18rem;">
            <img src="${element.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.content}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${element.description}</li>
              <li class="list-group-item">Author : ${element.author}</li>
              <li class="list-group-item">${element.publishedAt}</li>
            </ul>
            <div class="card-body">
              <a href="${element.url}" class="card-link">Read More</a>
            </div>
          </div>`
          allnews = allnews+thisnews
        });
    }
    else{
        console.log("Some ERROR occured")
    }
    document.getElementById("newsdiv").innerHTML=allnews
}
xhr.send()

