
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
    // creation d'un premier element text
    const textesA = document.createElement("div");
    textesA.id = "textesA";
    sliderHTML.append(textesA);
    const pA1 = document.createElement("p");
    pA1.innerText = catalogue[currentImg].titre;
    textesA.append(pA1);
    const pA2 = document.createElement("p");
    pA2.innerText = catalogue[currentImg].artiste;
    textesA.append(pA2);
    //
    const textesB = document.createElement("div");
    textesB.id = "textesB";
    sliderHTML.append(textesB);
    const pB1 = document.createElement("p");
    pB1.innerText = catalogue[currentImg].titre;
    textesB.append(pB1);
    const pB2 = document.createElement("p");
    pB2.innerText = catalogue[currentImg].artiste;
    textesB.append(pB2);

}
const nextSlider=()=>{
    if (currentImg < catalogue.length - 1) {
        currentImg++;
    } else {
        currentImg = 0;
    }
    document.querySelector("#coverSlider").src = coverUrl + catalogue[currentImg].cover;
    document.querySelector("#textesB p:first-child").innerText = catalogue[currentImg].titre;
    document.querySelector("#textesB p:last-child").innerText = catalogue[currentImg].artiste;
    document.querySelector("#imgA").classList.add("transSlider","slideRight");
    document.querySelector("#textesA").classList.add("transSlider","slideRight");
    setTimeout(()=>{
        document.querySelector("#imgA").src = coverUrl + catalogue[currentImg].cover;
        document.querySelector("#textesA p:first-child").innerText = catalogue[currentImg].titre;
        document.querySelector("#textesA p:last-child").innerText = catalogue[currentImg].artiste;
        document.querySelector("#imgA").classList.remove("transSlider","slideRight");
        document.querySelector("#textesA").classList.remove("transSlider","slideRight");

    },500)
    
}
const prevSlider=()=>{
    if (currentImg > 0) {
        currentImg--;
    } else {
        currentImg = catalogue.length - 1;
    }
    document.querySelector("#coverSlider").src = coverUrl + catalogue[currentImg].cover;
    document.querySelector("#textesB p:first-child").innerText = catalogue[currentImg].titre;
    document.querySelector("#textesB p:last-child").innerText = catalogue[currentImg].artiste;
    document.querySelector("#imgA").classList.add("transSlider","slideLeft");
    document.querySelector("#textesA").classList.add("transSlider","slideLeft");
    setTimeout(()=>{
        document.querySelector("#imgA").src = coverUrl + catalogue[currentImg].cover;
        document.querySelector("#textesA p:first-child").innerText = catalogue[currentImg].titre;
        document.querySelector("#textesA p:last-child").innerText = catalogue[currentImg].artiste;
        document.querySelector("#imgA").classList.remove("transSlider","slideLeft");
        document.querySelector("#textesA").classList.remove("transSlider","slideLeft");
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