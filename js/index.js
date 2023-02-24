var x = new XMLHttpRequest();
var z =[];
x.open('GET','https://newsapi.org/v2/everything?q=egy&from=2022-12-16&sortBy=publishedAt&apiKey=eb07bb6351784344849265396af97be3')
x.send()

x.addEventListener('readystatechange',function(){
    if(x.readyState==4)
    {
        z=JSON.parse(x.response).articles

        console.log(z)
        hello()
    }
    
})
function hello()
{
    cartonna=``
    for( var i =0 ; i<z.length ; i++ )
    {
        cartonna+=`  <div class="col-md-3  ">
        <div class="items ">
          <h4>${z[i].author}</h4>
          <h5>${z[i].title}</h5>
          <p>${z[i].description}</p>
          <a href="${z[i].url}">click-here</a>

          <img class="w-100" src="${z[i].urlToImage}" alt="">


        </div>
      </div>`
    }
    document.getElementById('demo').innerHTML=cartonna
}
