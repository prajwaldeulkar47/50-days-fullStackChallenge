function checkUserName(userName) {
    if (userName){
        console.log(userName)
    } else {
        console.log(new Error('No username provided'))
        // throw new Error('No username provided') 
        /* What it means :
            - Error creates a new error object with the message "No username provided"
            - throw immediately stops execution of the current function
            - The error must be caught by a try...catch, or it will crash the program */

    }
} 

checkUserName()