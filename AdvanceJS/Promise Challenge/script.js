function preLoad(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.alt = "Beautiful Landscape";
    img.style.cursor = "pointer";
    img.onload = () => {resolve(img);};
    img.onerror = () => reject(new Error("Image load failed"));
    img.src = url;
  });
}
async function loadImage() {
  try {
    const img = await preLoad("https://picsum.photos/400/400");
    document.body.appendChild(img);
    console.log("Image reloaded");
  } catch (err) {
    console.error("Error occurred:", err.message);
  }
}

loadImage();

// document.body.addEventListener("click", loadImage);


// preLoad('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwdmlld3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60').then( ( img ) => {
//     document.body.appendChild(img)
//     console.log('Image loaded successfully')
// } ).catch( ( err ) => {
//     console.error(err)
// } )


// (async () => {

// try{
//     const img = await preLoad('https://picsum.photos/1200/600')
//     document.body.appendChild(img)
//     console.log('Image loaded successfully')

// } catch( err ) {
//     console.error('Error occurred: ',err)
// }
// })()
