const slider= document.getElementById("slider")

let sliderSections= document.querySelectorAll(".slider__section")
let sliderLastSection= sliderSections[sliderSections.length-1]
slider.insertAdjacentElement("afterbegin", sliderLastSection)

/* ------------- funcionalidad de los chevrones ----------------------------- */

const btnRight= document.getElementById("btn-right")
const btnLeft= document.getElementById("btn-left")  

btnRight.addEventListener("click", function(){
    clearInterval(automaticSlider)
    let nextArticle= slider.children[2] 
    noClick()
    right1()
    if(nextArticle.classList.contains("slider__section--1")){
        identifiersToggle(0)
    } else if(nextArticle.classList.contains("slider__section--2")){
        identifiersToggle(1)
    } else {
        identifiersToggle(2)
    }
    automaticSlider= setInterval(() => {
        let nextArticle= slider.children[2] 
        noClick()
        right1()
        if(nextArticle.classList.contains("slider__section--1")){
            identifiersToggle(0)
        } else if(nextArticle.classList.contains("slider__section--2")){
            identifiersToggle(1)
        } else {
            identifiersToggle(2)
        }
    }, 6000);
})

btnLeft.addEventListener("click", function(){
    clearInterval(automaticSlider)
    let prevArticle= slider.children[0] 
    noClick()
    left1()
    if(prevArticle.classList.contains("slider__section--1")){
        identifiersToggle(0)
    } else if(prevArticle.classList.contains("slider__section--2")){
        identifiersToggle(1)
    } else {
        identifiersToggle(2)
    }
    automaticSlider= setInterval(() => {
        let nextArticle= slider.children[2] 
        noClick()
        right1()
        if(nextArticle.classList.contains("slider__section--1")){
            identifiersToggle(0)
        } else if(nextArticle.classList.contains("slider__section--2")){
            identifiersToggle(1)
        } else {
            identifiersToggle(2)
        }
    }, 6000);
})

function identifiersToggle(index) {
    for (let j=0; j<sliderIdentifiers.length; j++) {
        if(sliderIdentifiers[j].classList.contains("selected")){
            sliderIdentifiers[j].style.backgroundColor="rgba(255, 255, 255, .5)"
            sliderIdentifiers[j].classList.remove("selected")
            sliderIdentifiers[j].style.transition="all 1000ms"
        }
    }
    sliderIdentifiers[index].style.backgroundColor="#fff"
    sliderIdentifiers[index].classList.add("selected")
    sliderIdentifiers[index].style.transition="all 1000ms"
}

function sliderByIdentifiers(index) {
    if(!sliderIdentifiers[index].classList.contains("selected")){
        noClick()
        identifiersToggle(index)
        switch (index){
            case 0:
                if (slider.children[0].classList.contains("slider__section--1")){
                    left1()
                } else {
                    left2()
                }
                break;
            case 1:
                if (slider.children[0].classList.contains("slider__section--3")){
                    right1()
                } else {
                    left1()
                }
                break;
            case 2:
                if (slider.children[0].classList.contains("slider__section--3")){
                    right2()
                } else {
                    right1()
                }
                break;
        }
    }
}

const sliderIdentifiers= document.querySelectorAll(".slider__identifier");
sliderIdentifiers[0].style.backgroundColor= "#fff"

for (let i=0; i<sliderIdentifiers.length; i++) {
    sliderIdentifiers[i].addEventListener("click", function(e){
        clearInterval(automaticSlider)
        sliderByIdentifiers(i)
        automaticSlider= setInterval(() => {
            let nextArticle= slider.children[2] 
            noClick()
            right1()
            if(nextArticle.classList.contains("slider__section--1")){
                identifiersToggle(0)
            } else if(nextArticle.classList.contains("slider__section--2")){
                identifiersToggle(1)
            } else {
                identifiersToggle(2)
            }
        }, 6000);
    })
}

function right1() {
    slider.style.marginLeft="-200%"
    slider.style.transition="all 1000ms"
    setTimeout(() => {
        slider.style.transition="none"
        slider.insertAdjacentElement("beforeend", slider.children[0])
        slider.style.marginLeft="-100%"
    }, 1000);
}

function right2() {
    slider.insertAdjacentElement("beforeend", slider.children[0])
    slider.style.marginLeft="0%"
    setTimeout(() => {
        slider.style.transition="all 999ms"
        slider.style.marginLeft="-200%"
    }, 1);
    setTimeout(() => {
        slider.style.transition="none"
        slider.insertAdjacentElement("beforeend", slider.children[0])
        slider.style.marginLeft="-100%"
    }, 1000);
}

function left1() {
    sliderLastArticle= slider.children[slider.childElementCount-1]
    slider.style.marginLeft="0%"
    slider.style.transition="all 1000ms"
    setTimeout(() => {
        slider.style.transition="none"
        slider.insertAdjacentElement("afterbegin", sliderLastArticle)
        slider.style.marginLeft="-100%"
    }, 1000);
}

function left2() {
    sliderLastArticle= slider.children[slider.childElementCount-1]
    slider.insertAdjacentElement("afterbegin", sliderLastArticle)
    slider.style.marginLeft="-200%"
    setTimeout(() => {
        slider.style.transition="all 999ms"
        slider.style.marginLeft="0%"
    }, 1);
    setTimeout(() => {
        sliderLastArticle= slider.children[slider.childElementCount-1]
        slider.insertAdjacentElement("afterbegin", sliderLastArticle)
        slider.style.marginLeft="-100%"
        slider.style.transition="none"
    }, 1000);
}

function noClick(){
    for(let i=0; i<sliderIdentifiers.length; i++) {
        sliderIdentifiers[i].classList.add("pointer-events")
    }
    btnRight.classList.add("pointer-events")
    btnLeft.classList.add("pointer-events")
    setTimeout(() => {
        for(let i=0; i<sliderIdentifiers.length; i++) {
            sliderIdentifiers[i].classList.remove("pointer-events")
        }
        btnRight.classList.remove("pointer-events")
        btnLeft.classList.remove("pointer-events")
    }, 1000);
}

let automaticSlider= setInterval(() => {
    let nextArticle= slider.children[2] 
    noClick()
    right1()
    if(nextArticle.classList.contains("slider__section--1")){
        identifiersToggle(0)
    } else if(nextArticle.classList.contains("slider__section--2")){
        identifiersToggle(1)
    } else {
        identifiersToggle(2)
    }
}, 6000);