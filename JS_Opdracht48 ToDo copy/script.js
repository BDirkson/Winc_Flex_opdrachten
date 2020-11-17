// Clear total list
const list = document.querySelector(".todo-list");
const delButton = document.querySelector(".del-button")

delButton.addEventListener("click", async () => {
    await delAllData();
    list.innerHTML = "";
  });
  
// Add one task
const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", async () => {
    await postData({ description: input.value, done: false });
    addTo();
  });

// Main function
const input= document.getElementById("textfield");

const addTo = async () => {
  const tasks = await getData();
  list.innerHTML = '';
  tasks.forEach(task => {
    const listLi = document.createElement("li");
      listLi.innerHTML = task.description;
      listLi.classList.add("li-item");
      list.appendChild(listLi);
    const checkIcon = document.createElement("button")
      checkIcon.innerHTML = '<i class="far fa-check-square"></i>';
      checkIcon.classList.add('far', 'fa-check-square');
      listLi.appendChild(checkIcon);
      checkIcon.addEventListener("click", async ()=>{
        if(task.done == false){
            await checkOneData (task._id, task.description, true);
            checkIcon.classList.add("blue");
            listLi.classList.add("line-through");
            addTo();
        } if(task.done == true){
            await checkOneData(task._id, task.description, false);
            addTo();
            }
    });
    const removeIcon = document.createElement("button");
      removeIcon.innerHTML = `<i class="fas fa-trash-alt"></i>`;
      removeIcon.classList.add('fas', 'fa-trash-alt');
      listLi.appendChild(removeIcon);
      removeIcon.addEventListener("click", async () => {
        await delOneData (task._id);
    addTo();
    })
  })};

addTo();
