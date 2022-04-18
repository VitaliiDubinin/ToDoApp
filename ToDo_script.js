const curDate = document.getElementById("date");
let dateFormat = { weekday: "long", month: "short", day: "numeric" };
let today = new Date();
curDate.innerHTML = today.toLocaleDateString("en-US", dateFormat);

const form = document.querySelector("#task-list");
const clear = document.getElementById("clear");
const delTick = document.querySelector("ul");
const inpClear = document.getElementById("item-name");

const submit = (event) => {
  event.preventDefault();
  let input = document.querySelector("input");
  if (input.value != "" && input.value.length >= 3) {
    addItemToTaskList(input.value);
  } else {
  }
};

const addItemToTaskList = (item) => {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");

  li.innerHTML = `<span  class="material-icons-outlined">
  delete_forever
  </span><input class="checkbox" type="checkbox"><label class="checkbox">${item}</label>`;

  ul.appendChild(li);
};

const clearList = () => {
  inpClear.value = "";
  document.querySelector("ul").innerHTML = "";
  //   console.log("clearList");
};

function deleteTask(e) {
  //   console.log("delete task");
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}

const tickTask = (e) => {
  //   console.log(`${e}`);
  const task = e.target.nextSibling;
  //   console.log("ticked task");
  //   console.log(`${e.target}`);
  //   console.log(`${task}`);
  //   console.log(`${task.checked}`);
  if (e.target.checked) {
    // console.log("ticked task");
    task.style.textDecoration = "line-through";
    task.style.color = "#ff0000";
  } else {
    // console.log("else ticked task");
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
};

const deleteOrTick = (e) => {
  //   console.log("delOrTick");
  if (e.target.className == "material-icons-outlined") deleteTask(e);
  else {
    tickTask(e);
  }
};

form.addEventListener("submit", submit);
clear.addEventListener("click", clearList);
delTick.addEventListener("click", deleteOrTick);
