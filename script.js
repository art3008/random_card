const url = "https://aws.random.cat/meow";
const btn = document.getElementById('getCat')
const img = document.querySelector('img')


fetchHandler()


async function fetchHandler() {
    try {

        const response = await fetch(url)
        const data = await response.json()
        img.src = data.file
        console.log(data.file);

    } catch(error) {
        console.log(error);
    }
}


btn.addEventListener('click', () => {

    let isLoaded = img.complete

    if(isLoaded) {
        fetchHandler()
    } 
})
