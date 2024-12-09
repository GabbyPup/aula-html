const To_doValue = document.getElementById("input-box");
const To_doAlert = document.getElementById("Alert");
const To_doItems = document.getElementById("list-items");
const addUpdate = document.getElementById("AddUpdateClick");
const To_doColor = document.querySelector('#task-priority');
let taskId = 0;

let to_do = JSON.parse(localStorage.getItem("todo-list"));
if(!to_do){
    to_do = [];
}

function CreateToDoItems() {
    if(To_doValue.value === ""){
        To_doAlert.innerText = "Insira texto";
        To_doValue.focus();
    } else {
        let isPresent = false;
        to_do.forEach((Element) => {
            if(Element.item == To_doValue.value){
                isPresent == true
            }
        });
    
    if(isPresent){
        setAlertMessage("Este item já está na lista");
      return;
    }

    let li = document.createElement("li");
    li.setAttribute("id", ("taskId"+taskId));
    const todoItems = `<div title="Hit Double Click and Complete" ondblclick="CompletedToDoItems(this)">${To_doValue.value}</div>
                    <div>
                    <box-icon type='solid' name='edit-alt' class="edit todo-controls" onclick="UpdateToDoItems(this)"></box-icon>
                    <box-icon name='trash' class="delete todo-controls" onclick="DeleteToDoItems(this)"></box-icon>
                    </div>
                    </div>`;
                    li.innerHTML = todoItems;
                    To_doItems.appendChild(li);

                    if(To_doColor.value == "baixa"){
                      document.getElementById("taskId"+taskId).style.background="#36AE7C";
                      taskId++;
                    }
                    if(To_doColor.value == "media"){
                      document.getElementById("taskId"+taskId).style.background="#F9D923";
                      taskId++;
                    }
                    if(To_doColor.value == "alta"){
                      document.getElementById("taskId"+taskId).style.background="#EB5353";
                      taskId++;
                    }
                
        if (!to_do) {
            to_do = [];
                }
        let itemList = { item: To_doValue.value, status: false };
        to_do.push(itemList);
        setLocalStorage();
    }
    To_doValue.value = "";
    setAlertMessage("Tarefa criada");
}

function ReadToDoItems() {
  to_do.forEach((element) => {
    let li = document.createElement("li");
    let style = "";
    if (element.status) {
      style = "style='text-decoration: line-through'";
    }
    const todoItems = `<div ${style} title="Hit Double Click and Complete" ondblclick="CompletedToDoItems(this)">${
      element.item
    }
    ${
      style === ""
        ? ""
        : '<img class="todo-controls" src="/images/check-mark.png" />'
    }</div><div>
    ${
      style === ""
        ? '<img class="edit todo-controls" onclick="UpdateToDoItems(this)" src="/images/pencil.png" />'
        : ""
    }
    <img class="delete todo-controls" onclick="DeleteToDoItems(this)" src="/images/delete.png" /></div></div>`;
    li.innerHTML = todoItems;
    listItems.appendChild(li);
  });
}
ReadToDoItems();

function UpdateToDoItems(e) {
  if (e.parentElement.parentElement.querySelector("div").style.textDecoration === "") {
    To_doValue.value = e.parentElement.parentElement.querySelector("div").innerText;
    updateText = e.parentElement.parentElement.querySelector("div");
    addUpdate.setAttribute("onclick", "UpdateOnSelectionItems()");
    addUpdate.setAttribute("src", "/images/refresh.png");
    To_doValue.focus();
  }
}

function UpdateOnSelectionItems() {
  let IsPresent = false;
  to_do.forEach((element) => {
    if (element.item == To_doValue.value) {
      IsPresent = true;
    }
  });

  if (IsPresent) {
    setAlertMessage("This item already present in the list!");
    return;
  }

  to_do.forEach((element) => {
    if (element.item == updateText.innerText.trim()) {
      element.item = To_doValue.value;
    }
  });
  setLocalStorage();

  updateText.innerText = todoValue.value;
  addUpdate.setAttribute("onclick", "CreateToDoItems()");
  addUpdate.setAttribute("src", "/images/plus.png");
  To_doValue.value = "";
  setAlertMessage("Todo item Updated Successfully!");
}
