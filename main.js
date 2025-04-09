const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Spiderman-photo-1.avif") {
    myImage.setAttribute("src", "images/superman.webp");
  } else {
    myImage.setAttribute("src", "images/Spiderman-photo-1.avif");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Who is your favourite superhero, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Who is your favourite superhero, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
