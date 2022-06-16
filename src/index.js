document.addEventListener("DOMContentLoaded", () => {
  // your code here
  form = document.querySelector('form')

  
  form.addEventListener('submit', e => {
    e.preventDefault()
    
    let newTask = e.target.newTaskDescription.value
    let selectedOption = e.target.priority.value
    let dueDate = e.target.due.value

    
    let li = document.createElement('li')
    li.textContent = `${newTask}  | Due by: ${dueDate}  | `
    li.className = selectedOption

    
    if (li.className === "high") {
      li.style.color = "red";
    } else if (li.className === "medium") {
      li.style.color = "yellow";
    } else if (li.className === "low") {
      li.style.color = "green";
    }

    
    let btn = document.createElement('button')
    btn.textContent = 'X'
    btn.addEventListener('click', e => {
      e.target.parentNode.remove()
    })
    li.appendChild(btn)

    
    document.querySelector('ul').appendChild(li)

    
  })
});