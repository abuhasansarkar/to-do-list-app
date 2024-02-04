const searchInput = document.querySelector(".addItem input");

const searchBtn = document.querySelector(".addItem button");

const listItemWrapper = document.querySelector(".listItemWrapper");

searchBtn.addEventListener("click", () => {
  if (searchInput.value == "") {
    alert("Write Something");
  } else {
    const li = document.createElement("li");
    const span = document.createElement("span");

    li.innerHTML = searchInput.value;
    span.innerHTML = "X";

    listItemWrapper.appendChild(li);
    li.appendChild(span);
  }
  searchInput.value = "";

  saveDataLocalStorage();
});

listItemWrapper.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveDataLocalStorage();
  }
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveDataLocalStorage();
  }

  // saveDataLocalStorage();
});

// Data Save In Browser LocalStorage

function saveDataLocalStorage() {
  localStorage.setItem("data", listItemWrapper.innerHTML);
}

// Data Call on the Browser LocalStorage

function getDataLocalStorage() {
  listItemWrapper.innerHTML = localStorage.getItem("data");
}

getDataLocalStorage();
