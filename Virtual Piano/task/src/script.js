let wKeys = document.querySelectorAll(".white-keys kbd");
let bKeys = document.querySelectorAll(".black-keys kbd");

document.addEventListener("keydown", (e) => {
  let isKey = false;
  wKeys.forEach((key) => {
    if (key.innerText === e.key.toUpperCase()) {
      key.style.backgroundColor = "#6a6a6a";
      isKey = true;
      const audio = new Audio(`white_keys/${e.key}.mp3`);
      audio.play();
      audio.volume = 0.2;
    }
  });
  bKeys.forEach((key) => {
    if (key.innerText === e.key.toUpperCase()) {
      key.style.backgroundColor = "#6a6a6a";
      isKey = true;
      const audio = new Audio(`black_keys/${e.key}.mp3`);
      audio.play();
      audio.volume = 0.2;
    }
  });

  isKey
    ? console.log(`The '${e.key.toUpperCase()}' key is pressed`)
    : console.warn("Unbound key");
});

document.addEventListener("keyup", () => {
  wKeys.forEach((key) => {
    key.style.backgroundColor = "#ffffff";
  });
  bKeys.forEach((key) => {
    key.style.backgroundColor = "#000000";
  });
});
