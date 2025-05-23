// script.js
let nameInput = document.getElementById("name");
let yearInput = document.getElementById("year");
let btn = document.getElementById("button");
let urlElement = document.getElementById("url");

btn.addEventListener("click", () => {
  let name = nameInput.value;
  let year = yearInput.value;
  let baseUrl = urlElement.textContent.split('?')[0]; // Get base URL without params
  
  let newUrl = baseUrl;
  
  if (name && year) {
    newUrl = `${baseUrl}?name=${encodeURIComponent(name)}&year=${year}`;
  } else if (name) {
    newUrl = `${baseUrl}?name=${encodeURIComponent(name)}`;
  } else if (year) {
    newUrl = `${baseUrl}?year=${year}`;
  }

  urlElement.textContent = newUrl;
});