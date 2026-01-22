const start = performance.now()


setTimeout(() => {
    const end = performance.now()
    console.log(`Execution time: ${end - start} miliseconds`)
} , 1000) 