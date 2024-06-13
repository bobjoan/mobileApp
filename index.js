import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  dataBaseURL:
    "https://realtime-database-633b1-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingInDb = ref(database, "shoppingList");

let inputFieldEl = document.getElementById("input-field");
let appBtnEl = document.getElementById("app-btn");
let shoppingListEl = document.getElementById("shopping-list");

addEventListener("click", function () {
  let inputValue = inputFieldEl.value;
  push(shoppingInDb, inputFieldEl);
  clearInputField();
  appendMyListmyList(inputValue);

  console.log(inputFieldEl.value);
});
function clearInputField() {
  inputFieldEl.value = "";
}

function appendMyList(inputValue) {
  shoppingListEl.innerHTML += `<li>${inputValue}</li>`;
}
