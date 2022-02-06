var key="febea5c0";




let container=document.getElementById("container");

async function getMovieData(){

   try{

    let movie=document.getElementById("movie").value
    let res=await fetch(`http://www.omdbapi.com/?apikey=${key}&t=${movie}`)
let data= await res.json();

    // console.log("data:",data)

    showMovie(data)

}
catch (err){
    let db=document.createElement("div")
  let error= document.createElement("img");
    error.setAttribute("id","error")
    error.src="https://media1.tenor.com/images/916544ac793a85f91c370c4e63254724/tenor.gif?itemid=16095497"
  db.append(error)
      document.querySelector("#container").append(db)

// console.log(err)
}
}
// getMovieData()


function showMovie(d){
    console.log("d:",d)


    container.innerHTML=null;
  
    
    let image=document.createElement("img")
    image.src=d.Poster;
 
let div=document.createElement("div")
    let name=document.createElement("h1");
    name.innerText=`Movie name -${d.Title}`;

    let actor=document.createElement("h1")
    actor.innerText=`Actor -${d.Actors}`

    let Released=document.createElement("h1");
    Released.innerText=`Released -${d.Released}`


    let Rating=document.createElement("h1");

    Rating.innerText=`Rating -${d.imdbRating}`
    
    
    div.append(name,actor,Released,Rating)

    

    container.append(image,div)


// 
    
}


// async function getMovie(){




//     try{
//         let res=await fetch ("http://www.omdbapi.com/?apikey=febea5c0&s=Harry");
    
//         let data=await res.json();
//         // console.log("data:",data); 
//         appendMovieData(data)
//     }
//     catch(err){
//         console.log("err:",err)
//     }
//     }  
//     getMovie();
    
//     function appendMovieData(data){
//         console.log("data:",data.Search)
    
//         data.Search.forEach(function(el){
//             console.log("el:",el)
    
//             let div =document.createElement("div");
//             let img=document.createElement("img")
//             img.src=el.Poster;
//              let title=document.createElement("h4")
//             title.textContent=el.Title;
    
//          let year=document.createElement("p")
//                year.innerHTML=el.Year;
    
//          let imdbID=document.createElement("p")
    
//          imdbID.innerText=el.imdbID
    
//          div.append(img,title,year,imdbID);
    
    
// co.append(div);
    
    
    
//         });
    
       
    
//     }

