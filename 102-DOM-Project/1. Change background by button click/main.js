
// window onload
window.onload = () =>{
    main()
}

// generate RGB color function
function generateRGBcolor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}

// get elements
function main(){
    const root =  document.getElementById("root");
    const changeBtn = document.getElementById("change-button");

    // When Click button, insert color code into body bg
    changeBtn.addEventListener('click', function(){
        const bgColor = generateRGBcolor();
        root.style.backgroundColor = bgColor;
    })
    
}


