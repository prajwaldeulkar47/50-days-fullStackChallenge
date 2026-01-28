function createPromise(id){
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5
        if (success) {
            resolve(`Promise ${id} resolved successfully!`)
        } else {
            reject(`Promise ${id} rejected!`)
        }
    })
}

async function runPromises() {
    try {
        const promise1 = createPromise(1)
        const promise2 = createPromise(2)
        const promise3 = createPromise(3)
        const results = await Promise.all([promise1,promise2,promise3])
        console.log(results)
    } catch (error) {
        console.error('Error:', error)
    }
}
runPromises()