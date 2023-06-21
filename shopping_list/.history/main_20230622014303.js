const items = document.querySelector(".items");
const input = document.querySelector(".footer_input");
const addBtn = document.querySelector(".footer_button");

function onAdd() {
  const text = input.value;
  const item = createItem(text);
  items.appendChild(item);
  input.value = "";
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item_row");

  const item = document.createElement("div");
  itemRow.setAttribute("class", "item");

  const span = document.createElement("span");
  span.setAttribute("class", "item_name");
  span.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item_delete_btn");
  deleteBtn.innerHTML =
    '<img class="item_delete" src="image/delete-button.png" alt="" />';

  deleteBtn.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item_divider");
}

addBtn.addEventListener("click", () => {
  onAdd();
});
