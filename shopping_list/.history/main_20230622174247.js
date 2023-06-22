const items = document.querySelector(".items");
const input = document.querySelector(".footer_input");
const addBtn = document.querySelector(".footer_button");

function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: "center" });
  input.value = "";
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item_row");
  itemRow.innerHTML = `
        <div class="item">
            <span class="item_name"></span>
            <button class="item_delete_btn">
                <img class="item_delete" src="image/delete-button.png" alt="" />
            </button>
    `;
  //   const item = document.createElement("div");
  //   item.setAttribute("class", "item");

  //   const name = document.createElement("span");
  //   name.setAttribute("class", "item_name");
  //   name.innerText = text;

  //   const deleteBtn = document.createElement("button");
  //   deleteBtn.setAttribute("class", "item_delete_btn");
  //   deleteBtn.innerHTML =
  //     '<img class="item_delete" src="image/delete-button.png" alt="" />';

  //   deleteBtn.addEventListener("click", () => {
  //     items.removeChild(itemRow);
  //   });

  //   const itemDivider = document.createElement("div");
  //   itemDivider.setAttribute("class", "item_divider");

  //   item.appendChild(name);
  //   item.appendChild(deleteBtn);

  //   itemRow.appendChild(item);
  //   itemRow.appendChild(itemDivider);

  return itemRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    onAdd();
  }
  return;
});
