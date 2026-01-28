function getImagePromise(url) {
    return new Promise((resolve, reject) => {
        
            const img = new Image()
            img.src = url
            img.alt = 'Scenic Image'
            img.onload = () => resolve(img)
            img.onerror = () => reject(new Error(`Failed to load image : ${url}`))
            img.style.margin = '5px'
        
    })
}

const imageUrls = [
    'https://scrimba.com/links/advancedjs-resources-images-scenic1',
    'https://scrimba.com/links/advancedjs-resources-images-scenic2',
    'https://scrimba.com/links/advancedjs-resources-images-scenic3'
]

async function preloadImages (imageUrlsArr) {
    const imgContainer = document.getElementById('img-container')
    const uploadContainer = document.getElementById('upload-container')

    const promises = imageUrlsArr.map(url => getImagePromise(url))

    try {
        const images = await Promise.all(promises)
        images.forEach(img => imgContainer.appendChild(img))
        uploadContainer.style.display = 'none'
        imgContainer.style.display = 'block'
    } catch (error) {
        console.error(error)
    }
}

document.getElementById('submit-imgs').addEventListener('click',() => {preloadImages(imageUrls)})