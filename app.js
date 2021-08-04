const item = document.querySelector(".item");
const placeHolders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragStart);
item.addEventListener("dragend", drugEnd);

for (const placeHolder of placeHolders) {
  placeHolder.addEventListener("dragover", dragOver);
  placeHolder.addEventListener("dragenter", dragEnter);
  placeHolder.addEventListener("dragleave", dragLeave);
  placeHolder.addEventListener("drop", dragDrop);
}

function dragStart(event) {
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);
}

function drugEnd(event) {
  event.target.classList.remove("hold", "hide");
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.target.classList.add("hovered");
}

function dragLeave(event) {
  event.target.classList.remove("hovered");
}

function dragDrop(event) {
  event.target.classList.remove("hovered");
  event.target.append(item);
}
