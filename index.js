let img_src = document.querySelector("#description_image");

let productCard = document.querySelectorAll(".card_product img");

let color_fraise = "#d38990";
let color_cafe = "#a9562b";
let color_creme = "#995f37";

class UI{
    
    static getTheHoverDiv(){
        for(let i=0;i<productCard.length;i++){
            productCard[i].addEventListener("mouseover",UI.displayData);
            productCard[i].addEventListener("mouseleave",UI.outEvent);
        }
    }
    
    static displayData(e){
        e.preventDefault();
        console.log(e.target);
        let data = e.target.getAttribute("alt");
        // rotate the image 
        e.target.style.transform='rotate(-35deg)';
        
        // change the image in the description
        img_src.setAttribute("src",`img/STARBUCK_${data}.png`);
    }
    
    static outEvent(e){
        e.preventDefault();
        // derotate the image 
        e.target.style.transform='rotate(0deg)';
    }
    
}

UI.getTheHoverDiv();