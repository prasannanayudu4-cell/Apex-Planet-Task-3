// Quiz Function
function checkAnswer(answer) {
  const result = document.getElementById("result");

  if (answer === "b") {
    result.innerHTML = "✅ Correct!";
    result.style.color = "green";
  } else {
    result.innerHTML = "❌ Wrong! Try again.";
    result.style.color = "red";
  }
}

// Image Carousel
let images = ["D:/task3/images/image1.jpg", "D:/task3/images/image2.jpg", "D:/task3/images/image3.jpg"];
let index = 0;

function nextImage() {
  index = (index + 1) % images.length;
  document.getElementById("carousel").src = images[index];
}

// API Joke
async function getJoke() {
  const jokeDiv = document.getElementById("joke");

  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();

    jokeDiv.innerHTML = data.setup + "<br><b>" + data.punchline + "</b>";
  } catch (error) {
    jokeDiv.innerHTML = "Error fetching joke 😢";
  }
}
