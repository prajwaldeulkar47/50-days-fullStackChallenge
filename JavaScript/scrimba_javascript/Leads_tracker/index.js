let myLeads = []

const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

saveBtn.addEventListener("click", function () {
  if (inputEl.value === "") return // avoids empty input to be stored

  myLeads.push(inputEl.value)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  inputEl.value = ""
  render(myLeads)
})

deleteBtn.addEventListener("dblclick", function () {
  localStorage.removeItem("myLeads")
  myLeads = []
  render(myLeads)
})

function render(leads) {
  ulEl.innerHTML = ""

  for (let i = 0; i < leads.length; i++) {
    ulEl.innerHTML += `
        <li>
            <a target="_blank" rel="noopener noreferrer" href="${leads[i]}">
                ${leads[i]}
            </a>
        </li>`
  }
}
