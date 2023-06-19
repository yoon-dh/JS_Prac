const target = document.querySelector(".target");
const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const tag = document.querySelector(".tag");

addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    //   target.style.left = `${x}px`;
    //   target.style.top = `${y}px`;
    target.style.transform = `translate(${x - targetHalfWidth}px,${
      y - targetHalfHeight
    }px)`;

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    //   vertical.style.left = `${x}px`;
    //   horizontal.style.top = `${y}px`;

    tag.innerHTML = `${x}px, ${y}px`;
    //   tag.style.left = `${x}px`;
    //   tag.style.top = `${y}px`;
    tag.style.transform = `translate(${x}px,${y}px)`;
  });
});
