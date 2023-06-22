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

let id = 0; // UUID 사용이 Good

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item_row");
  itemRow.innerHTML = `
        <div class="item" data-id=${id}>
            <span class="item_name">${text}</span>
            <button class="item_delete_btn" data-id=${id}>
                <img class="item_delete" src="image/delete-button.png" alt="" />
            </button>
        </div>
        <div class="item_divider"></div>
    `;
  id++;
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
