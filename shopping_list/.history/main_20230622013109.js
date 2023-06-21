const items = document.querySelector(".items");
const input = document.querySelector(".footer_input");
const addBtn = document.querySelector(".footer_button");

function onAdd() {
  const text = input.value;
  const item = createItem();
  items.appendChild(item);
  input.value = "";
  input.focus();
}

addBtn.addEventListener("click", () => {
  onAdd();
});
