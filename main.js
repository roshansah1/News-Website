
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
    getNews("general", name)
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


async function getNews(category, country) {
    let res = await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json`)
    let jsonData = await res.json()
    console.log(jsonData)
    let data = await jsonData.articles;
            let html = ""
            for(let i = 0; i< 20;i++){
                html += ` <div class="news_card"> <img src="${data[i].urlToImage}"> <div class="news_text"> <span class="title"> ${data[i].title} </span> 
                <span class="author"> <b>source:</b> ${data[i].source.name} / ${data[i].publishedAt}</span> 
                <div class="lower_text"><span class="description"> ${data[i].description} </span><span class="read_more"> Read more at <a href="${data[i].url}" target="_blank"> ${data[i].source.name}</a> </span></div></div>
                </div>`
            }
            content.innerHTML = html
}
getNews("general", "in")
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
