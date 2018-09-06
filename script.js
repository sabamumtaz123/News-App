
function initiaize(){
    $.ajax({
        url:`
https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e11e1c913e514137a1e5f70e2301072b`,

        success: function(data){
            

            for(let i = 0; i < data.articles.length; i++){
                document.querySelector(".news-discription").innerHTML += ` <div class="divs">
    
                <div class="body">
                    <h5 class="title">
                    <a href="${data.articles[i].url}" target="_blank">
                    <img class="card-img-top" src="${data.articles[i].urlToImage}" alt="news image">
                    ${data.articles[i].title}
                    </a></h5>
                    <p class="card-text">${data.articles[i].description}</p>
                    <p class="card-text">Author: ${data.articles[i].author}</p>
                </div>
            </div>`;
            }
        },

        error: function(err){
            document.querySelector(".news-group").innerHTML += `Something Went Wrong`;            
        }
    });
}