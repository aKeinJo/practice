window.addEventListener("keydown", (e) => {
  const key = document.getElementById(e.key);
  if (key) key.classList.add("key_Reaction_btn_pressed");
});

window.addEventListener("keyup", (e) => {
  const key = document.getElementById(e.key);
  if (key) key.classList.remove("key_Reaction_btn_pressed");
});
