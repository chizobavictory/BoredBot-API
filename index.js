document.getElementById("bored-bot").addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("title").textContent = "🦾 HappyBot🦿";
      document.getElementById("random-activities").textContent = data.activity;
    });

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("image-container").innerHTML = `
  <img src="${data.message}"  /> `;
    });
});
