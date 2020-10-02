const body = document.body;
const themeButton = document.getElementById("color-theme-btn");
const randomFact = document.getElementById("random-fact");
const blogLink = document.getElementById("blog-link");
const factLink = document.getElementById("fact-link");
const blog = document.getElementById("blog");
const fact = document.getElementById("fact");

themeButton.addEventListener("click", function (event) {
  body.classList.toggle("dark-theme");
});

blogLink.addEventListener("click", function (event) {
  blog.style.display = "block";
  fact.style.display = "none";
});

factLink.addEventListener("click", function (event) {
  fact.style.display = "block";
  blog.style.display = "none";
  getFact();
});

function lowerFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function getFact() {
  fetch(`https://uselessfacts.jsph.pl/random.json?language=en`, {
    method: "GET",
    header: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      randomFact.innerHTML = lowerFirstLetter(data.text);
    })
    .catch((e) => {
      randomFact.innerHTML = "-";
    });
}
