const target = document.querySelector(".target");
const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const tag = document.querySelector(".tag");

document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;

  tag.innerHTML = `${x}px, ${y}px`;
  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;
});
