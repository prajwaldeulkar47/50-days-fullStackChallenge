
async function getSuggestions(){
    const response = await fetch('https://apis.scrimba.com/bored/api/activity')
    const data = await response.json()
    console.log(data.activity)
}

getSuggestions()