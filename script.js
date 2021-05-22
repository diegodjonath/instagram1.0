let time = 2000,
    currentImageIndex = 0,
    images = document
            .querySelectorAll("#instagram-phone img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
    .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")


}

function start() {
    setInterval(()=>{
        // troca de image
        nextImage() /*vai utilizar uma função a cada momento*/
    }, time) 

}

window.addEventListener("load", start) /*quando window for totalmente carregado, use funciotn start*/
