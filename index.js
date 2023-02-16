const input = document.getElementById("searchText")
const inputValue = input.value
const result= document.getElementById("result")
const key = "c04300f7"

const link1 = `https://www.omdbapi.com/?s=${inputValue}&apikey=c04300f7`




 function SearchMovie(){
    // console.log(input.value)

    fetch(`https://www.omdbapi.com/?s=${input.value}&apikey=c04300f7`).
    then((data)=>{return data.json()}).then((res)=>{
    const movies = []
    for(let key in res){
        movies.push(res[key])
    }
    if(movies[2]=== "True"){
        let data = movies[0][0]
        //console.log(data)
        //console.log(typeof(movies[0][0]))
            const HTML = `<div class="result">
                        <img src="${data.Poster}" alt="${data.Title}">
                        <div>
                        <p>Title: ${data.Title}</p>
                        <p>Year of Release: ${data.Year}</p>
                        <p>Imdb id: ${data.imdbID}</p>
                        <p>Type: ${data.Type}<p/>    
                        </div>            
            </div>`
            result.innerHTML = HTML
    }
    else{
        result.innerHTML = `<p style="color:red;font-size:25px">No data Found!!</p>`
    }
    
          })
}




