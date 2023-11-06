
const coverUrl = "./assets/img/cover/";
const sliderHTML = document.querySelector("#slider");
let currentImg = 0;

const initSlider = () => {
    // je cree une première image d'arriere plan fixe
    const coverSlider = document.createElement("img");
    coverSlider.src = coverUrl + catalogue[currentImg].cover;
    coverSlider.id = "coverSlider";
    sliderHTML.append(coverSlider);
    // je cree une deuxieme image supperposée destiné à l'effet(transform)
    const imgA = document.createElement("img");
    imgA.src = coverUrl + catalogue[currentImg].cover;
    imgA.id = "imgA";
    sliderHTML.append(imgA);
}
const nextSlider=()=>{
    if (currentImg < catalogue.length - 1) {
        currentImg++;
    } else {
        currentImg = 0;
    }
    document.querySelector("#coverSlider").src = coverUrl + catalogue[currentImg].cover;
    document.querySelector("#imgA").classList.add("transSlider","slideRight");
    setTimeout(()=>{
        document.querySelector("#imgA").src = coverUrl + catalogue[currentImg].cover;
        document.querySelector("#imgA").classList.remove("transSlider","slideRight");
    },500)
    
}
const prevSlider=()=>{
    document.querySelector("#coverSlider").src = coverUrl + catalogue[currentImg].cover;
    document.querySelector("#imgA").classList.add("transSlider","slideLeft");
    setTimeout(()=>{
        document.querySelector("#imgA").src = coverUrl + catalogue[currentImg].cover;
        document.querySelector("#imgA").classList.remove("transSlider","slideLeft");
    },500)
    
}

const slider = (status = "init") => {
    switch (status) {
        case "init":
            initSlider();
            break;
        case "next":
            nextSlider();
            break;
        case "prev":
            prevSlider();
            break;
        default:
            break;
    }
};
setInterval(()=>slider("next"),4000);
export { slider };