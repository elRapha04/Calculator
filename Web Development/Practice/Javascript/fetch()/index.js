// fetchData();

// function fetchData(){
//   const input = document.getElementById("input");
//   const submitBtn = document.getElementById("submitBtn");
//   const output = document.getElementById("output");
// }

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(response => {
    
    if(!response.ok){
      throw new Error("Couldn't find resource");
    }
    
    return response.json();

  })
  .then(data => console.log(data.id))
  .catch(error => console.error(error))