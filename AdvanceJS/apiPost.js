try {
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts', 
        {
            method: 'POST',
            body: JSON.stringify({
                title: 'Holiday Nightmares',
                body: 'When your vacation turns into a series of unfortunate events...',
                userId: 1001
            }) ,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },

        })
    if(!response.ok){
        throw new Error('Network response was not ok');
    }
    const data = await response.json()
    console.log(data)
} catch (error) {
    console.error('Error occurred while making the POST request:', error);
}