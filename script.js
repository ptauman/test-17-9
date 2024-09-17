const output = document.getElementById("output");
const button = document.getElementById("input");
let bull = false;

button.addEventListener("click", () => {
  if (bull === false) {
    const colorDiv = document.createElement("div");
    colorDiv.style.backgroundColor = "yellow";
    colorDiv.style.height = "100px";
    colorDiv.style.width = "100px";
    colorDiv.classList.add("colorDiv");

    output.appendChild(colorDiv);
    bull = true;
  } else {
    const colorDiv = document.querySelector(".colorDiv");
    if (colorDiv) {
      output.removeChild(colorDiv);
    }
    bull = false;
  }

});
document.addEventListener("DOMContentLoaded", () => {
  showRandomUser();
});

async function showRandomUser() {
  // output.innerHTML = "";
  const response = await fetch("https://randomuser.me/api");
  const data = await response.json();
  const randomUser = document.createComment("p");
  randomUser.textContent = `${data.results[0].name.first} ${data.results[0].name.last}`;
  console.log(data.results[0].name.first);
  output.appendChild(randomUser);
}
