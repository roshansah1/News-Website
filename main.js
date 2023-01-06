
let content = document.getElementById("content")
let navMenu = document.getElementById('nav_menu')
let button = document.getElementById("button")


let business = document.getElementById("business")
let entartainment = document.getElementById("entartainment")
let general = document.getElementById("general")
let health = document.getElementById("health")
let science = document.getElementById("science")
let sports = document.getElementById("sports")
let technology = document.getElementById("technology")
let countryCode = document.getElementById("country_code")

countryCode.addEventListener("click", () => {
    let name = countryCode.value;
    getNews("", name)
})

business.addEventListener("click", () => {
    let name = countryCode.value;
    getNews("business", name)
})

entartainment.addEventListener("click", () => {
    let name = countryCode.value;
    getNews("entertainment", name)
})

general.addEventListener("click", () => {
    let name = countryCode.value;
    getNews("general", name)
})

health.addEventListener("click", () => {
    let name = countryCode.value;
    getNews("health", name)
})
science.addEventListener("click", () => {
    let name = countryCode.value;
    getNews("science", name)
})
sports.addEventListener("click", () => {
    let name = countryCode.value;
    getNews("sports", name)
})
technology.addEventListener("click", () => {
    let name = countryCode.value;
    getNews("technology", name)
})

getNews("", "in")

function getNews(category, country) {
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=f52c41c05a714fe69c99aa9999c6a7c6`)
        .then((res) => res.json())
        .then((data) => {

            let array = data.articles
            let articles = array.splice(0, 20)
            let html = ""
            articles.forEach(element => {
                html += ` <div class="news_card"> <img src="${element.urlToImage}"> <div class="news_text"> <span class="title"> ${element.title} </span> 
            <span class="author"> <b>source:</b> ${element.source.name} / ${element.publishedAt}</span> 
            <div class="lower_text"><span class="description"> ${element.description} </span><span class="read_more"> Read more at <a href="${element.url}" target="_blank"> ${element.source.name}</a> </span></div></div>
            </div>`
            });
            content.innerHTML = html
        })
}

let deleteMenu = document.getElementById("header_menu")

button.addEventListener("click", () => {
    navMenu.style.display = "flex"
})
deleteMenu.addEventListener("mouseup", () => {
    navMenu.style.display = "none"
})


let nightIcon = document.getElementById('night_icon')

nightIcon.addEventListener("click", () => {
    document.body.classList.toggle("dark_mode")
    if (document.body.classList.contains("dark_mode")) {
        nightIcon.innerHTML = `<i class="uil uil-sun"></i>`
    } else {
        nightIcon.innerHTML = `<i class="uil uil-moon"></i>`
    }
})
