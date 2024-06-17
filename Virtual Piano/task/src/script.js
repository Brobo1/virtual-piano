let keys = document.querySelectorAll("kbd");

document.addEventListener("keydown", (e) => {
  let isKey = false;
  keys.forEach((key) => {
    if (key.innerText === e.key.toUpperCase()) {
      key.style.backgroundColor = "#6a6a6a";
      isKey = true;
      let keyColor = key.parentElement.className.split("-")[0];
      const audio = new Audio(`${keyColor}_keys/${e.key}.mp3`);
      audio.play();
      audio.volume = 0.2;
    }
  });
  isKey
    ? console.log(`The '${e.key.toUpperCase()}' key is pressed`)
    : console.warn("Unbound key");
});

document.addEventListener("keyup", () => {
  keys.forEach((key) => {
    let keyColor = key.parentElement.className.split("-")[0];
    if (keyColor === "white") {
      key.style.backgroundColor = "#ffffff";
    } else {
      key.style.backgroundColor = "#000000";
    }
  });
});
