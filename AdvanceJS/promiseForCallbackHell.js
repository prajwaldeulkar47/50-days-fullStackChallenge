function uploadFile(){
    return new Promise((resolve, reject) => {
        console.log('Uploading file...')
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}
function processFile(){
    return new Promise((resolve, reject) => {
        console.log('processing file...')
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}
function notifyUser(){
    return new Promise((resolve, reject) => {
        console.log('Notifying User...')
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

try{
    await uploadFile()
    await processFile()
    await notifyUser()
}
catch(error){
    console.log('Error:', error)
}  