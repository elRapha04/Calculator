fetchData();

function fetchData(){
  const input = document.getElementById("input");
  const submitBtn = document.getElementById("submitBtn");
  const output = document.getElementById("output");
  const name = document.getElementById("name");
  const height = document.getElementById("height");
  const weight = document.getElementById("weight");
  const id = document.getElementById("id");
  
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(response => {
    
    if(!response.ok){
      throw new Error("Couldn't find resource");
    }
    
    return response.json();
    
  })
  .then(data => {
    name.textContent = `Name: ${data.forms[0].name}`;
    height.textContent = `Height: ${data.height}`;
    weight.textContent = `Weight: ${data.height}`;
    id.textContent = `ID: ${data.id}`;
    
  })
  .catch(error => console.error(error))
}