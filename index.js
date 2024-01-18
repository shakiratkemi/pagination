let names = [
  "Ope",
  "Tobi",
  "Tope",
  "Karl",
  "Titi",
  "Tolu",
  "Bob",
  "Priscilla",
  "Godwin",
  "Sarah",
];

let namesPerPage = 5;
let pageNumber = document.querySelector("#page");
let pageValue = parseInt(pageNumber.value);

function showPages() {
  let pageValue = parseInt(pageNumber.value);
  let startPage = (pageValue - 1) * namesPerPage;
  let endPage = startPage + namesPerPage;
  let name = names.slice(startPage, endPage);
  console.log(pageValue);
  const listParent = document.querySelector("ul");
  listParent.innerHTML = `Showing ${startPage + 1} to ${endPage} of ${
    names.length
  } `;
  if (isNaN(pageValue) || pageValue <= 0) {
    console.log("Please enter page number");
    return;
  }

  if (name.length === 0) {
    console.log("No more names to display.");
  } else {
    name.forEach((n) => {
      const listItem = document.createElement("li");
      listItem.textContent = n;
      listParent.appendChild(listItem);
    });
    console.log("Displaying names:", name);
  }
}

let button = document.querySelector("button");
button.addEventListener("click", function (e) {
  showPages();
});
showPages();

function updatePages(increment) {
  let pageValue = parseInt(pageNumber.value);
  pageNumber.value = pageValue + increment;
  showPages();
}

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener("click", function () {
  updatePages(-1);
});
next.addEventListener("click", function () {
  updatePages(1);
});
