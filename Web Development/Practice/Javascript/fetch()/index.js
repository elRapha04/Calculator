fetchData();

function fetchData() {
  const input = document.getElementById("input").value.toLowerCase();
  const submitBtn = document.getElementById("submitBtn");

  const output = document.getElementById("output");
  const image = document.getElementById("image");
  const name = document.getElementById("name");
  const height = document.getElementById("height");
  const weight = document.getElementById("weight");
  const id = document.getElementById("id");

  fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Couldn't find resource");
      }

      return response.json();
    })
    .then((data) => {
      image.src = data.sprites.front_default;
      output.style.display = "block";
      
      const upperName = data.forms[0].name;
      name.textContent = `Name: ${upperName.charAt(0).toUpperCase()+upperName.slice(1)}`;
      height.textContent = `Height: ${data.height}`;
      weight.textContent = `Weight: ${data.weight}`;
      id.textContent = `ID: ${data.id}`;
    })
    .catch((error) => console.error(error));
}
