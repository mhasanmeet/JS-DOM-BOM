
// window onload
window.onload = () =>{
    main()
}

// generate RGB color function 
function generateHEXcolor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    // Convert RGB into HEX code
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

// get elements
function main(){
    const root =  document.getElementById("root");
    const changeBtn = document.getElementById("change-button");
    const output = document.getElementById("output")
    const copyBtn = document.getElementById("copyBtn");


    // When Click button, insert color code into body bg
    changeBtn.addEventListener('click', function(){
        const bgColor = generateHEXcolor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
        copyBtn.innerHTML = "Copy to Clipboard"
        copyBtn.style.backgroundColor = "white"
        copyBtn.style.color = "black"
    })

    // Copy to Clipboard and change Button color to green
    copyBtn.addEventListener('click', function(){
        // Copy to Clipboard
        navigator.clipboard.writeText(output.value)
        // Change Button color to green
        copyBtn.innerHTML = "Code Copied"
        copyBtn.style.backgroundColor = "green"
        copyBtn.style.color = "white"
    })
    
}


