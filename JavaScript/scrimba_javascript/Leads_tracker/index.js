let myLeads = []

const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

tabBtn.addEventListener("click", function () {
  // chrome.tabs.query({ factive: true, currentWindow: true }, function (tabs) {
  //   // since only one tab should be active and in the current window at once
  //   // the return variable should only have one entry
  //   let activeTab = tabs[0]
  //   let activeTabId = activeTab.id // or do whatever you need
  // })

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
  })
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
